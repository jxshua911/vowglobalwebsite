-- Website chat and public-form hardening.
-- Keep website writes behind the server-side Edge Function and service role.

begin;

alter table website.waitlist
  add column if not exists source text,
  add column if not exists launch_date date;

create table if not exists website.chat_rate_limits (
  key text primary key,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table website.chat_rate_limits enable row level security;
revoke all on table website.chat_rate_limits from public, anon, authenticated;
grant all on table website.chat_rate_limits to service_role;

create index if not exists chat_rate_limits_updated_at_idx
  on website.chat_rate_limits(updated_at);

create or replace function website.consume_chat_rate_limit(
  p_key text,
  p_limit integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $function$
declare
  now_ts timestamptz := clock_timestamp();
  allowed boolean;
begin
  if nullif(trim(p_key), '') is null then
    raise exception 'RATE_LIMIT_KEY_REQUIRED';
  end if;
  if p_limit < 1 or p_window_seconds < 1 then
    raise exception 'RATE_LIMIT_CONFIG_INVALID';
  end if;

  insert into website.chat_rate_limits(key, window_started_at, request_count, updated_at)
  values (p_key, now_ts, 1, now_ts)
  on conflict (key) do update
  set window_started_at = case
        when now_ts - website.chat_rate_limits.window_started_at >= make_interval(secs => p_window_seconds)
          then now_ts
        else website.chat_rate_limits.window_started_at
      end,
      request_count = case
        when now_ts - website.chat_rate_limits.window_started_at >= make_interval(secs => p_window_seconds)
          then 1
        else website.chat_rate_limits.request_count + 1
      end,
      updated_at = now_ts
  returning request_count <= p_limit into allowed;

  return coalesce(allowed, false);
end;
$function$;

revoke all on function website.consume_chat_rate_limit(text, integer, integer) from public, anon, authenticated;
grant execute on function website.consume_chat_rate_limit(text, integer, integer) to service_role;

-- Legacy public waitlist is no longer used by the website.
revoke all on table public.vow_waitlist from public, anon, authenticated;
revoke insert on table public.vow_waitlist from public, anon, authenticated;

commit;
