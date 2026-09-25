import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Message = {
  id: string;
  sender_type: "visitor" | "ai" | "admin" | "system";
  sender_name?: string | null;
  content: string;
  created_at: string;
};

const FUNCTION_URL = () => {
  const base = import.meta.env["VITE_SUPABASE_URL"] || "";
  return base ? `${base}/functions/v1/vow-website-chat` : "";
};

function sessionId() {
  const key = "vow-website-chat-session";
  const existing = window.localStorage.getItem(key);
  if (existing) return existing;
  const value = crypto.randomUUID();
  window.localStorage.setItem(key, value);
  return value;
}

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [humanMode, setHumanMode] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sid = useMemo(() => (typeof window === "undefined" ? "" : sessionId()), []);

  async function loadMessages() {
    if (!sid || !FUNCTION_URL()) return;
    try {
      const response = await fetch(FUNCTION_URL(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "messages", session_id: sid }),
      });
      const data = await response.json();
      setMessages(data.messages || []);
      setHumanMode(Boolean(data.human_mode));
    } catch {}
  }

  useEffect(() => {
    if (!open) return;
    loadMessages();
    const timer = window.setInterval(loadMessages, 3500);
    return (
    <div className="fixed bottom-5 right-5 z-[80] sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label="VOW AI chat"
          className="mb-3 flex h-[min(620px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-vow-border bg-vow-bg shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
        >
          <div className="flex items-center justify-between border-b border-vow-border px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative grid size-10 place-items-center rounded-full bg-vow-ink text-sm font-bold text-vow-bg">
                V
                <span
                  className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-vow-bg bg-emerald-500"
                  aria-label="VOW AI is online"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold tracking-tight">VOW AI</p>
                  <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Online
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-vow-muted">
                  {humanMode ? "A VOW team member is here." : "Usually replies in seconds."}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-9 place-items-center rounded-full text-lg text-vow-muted transition-colors hover:bg-vow-surface hover:text-vow-ink"
              aria-label="Close VOW AI"
            >
              ×
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-vow-surface/20 px-4 py-4">
            {messages.length === 0 && (
              <div className="max-w-[88%]">
                <div className="rounded-2xl rounded-bl-md border border-vow-border bg-vow-bg px-4 py-3 text-sm leading-6 shadow-sm">
                  Hi — I’m VOW AI. 👋
                  <br />
                  Ask me how VOW works, what it can help with, or tell me what you’re trying to achieve.
                </div>
                <p className="mt-1 px-1 text-[10px] text-vow-muted">VOW AI · just now</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={message.sender_type === "visitor" ? "ml-8" : "mr-4"}
              >
                <div
                  className={
                    message.sender_type === "visitor"
                      ? "rounded-2xl rounded-br-md bg-vow-ink px-4 py-3 text-sm leading-6 text-vow-bg shadow-sm"
                      : message.sender_type === "system"
                        ? "mx-3 rounded-xl border border-vow-border bg-vow-bg px-3 py-2 text-center text-xs leading-5 text-vow-muted"
                        : "rounded-2xl rounded-bl-md border border-vow-border bg-vow-bg px-4 py-3 text-sm leading-6 shadow-sm"
                  }
                >
                  {message.content}
                </div>
                {message.sender_type === "admin" && (
                  <p className="mt-1 px-1 text-[10px] uppercase tracking-[0.14em] text-vow-muted">VOW team</p>
                )}
              </div>
            ))}

            {busy && (
              <div className="mr-4 flex max-w-fit items-center gap-1.5 rounded-2xl rounded-bl-md border border-vow-border bg-vow-bg px-4 py-3 shadow-sm">
                <span className="size-1.5 animate-pulse rounded-full bg-vow-muted" />
                <span className="size-1.5 animate-pulse rounded-full bg-vow-muted [animation-delay:150ms]" />
                <span className="size-1.5 animate-pulse rounded-full bg-vow-muted [animation-delay:300ms]" />
                <span className="sr-only">VOW AI is thinking</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-vow-border bg-vow-bg p-3">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                send();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    send();
                  }
                }}
                rows={2}
                maxLength={2500}
                placeholder={humanMode ? "Message the VOW team…" : "Message VOW AI…"}
                className="min-h-11 flex-1 resize-none rounded-xl border border-vow-border bg-vow-surface/30 px-3 py-2 text-sm outline-none placeholder:text-vow-muted focus:border-vow-ink"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="vow-btn-primary !rounded-xl !px-4 !py-3 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send
              </button>
            </form>
            <p className="mt-2 text-[10px] leading-4 text-vow-muted">
              VOW AI can make mistakes. Don’t share passwords, payment details or other sensitive information.
            </p>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close VOW AI" : "Open VOW AI"}
        className="group relative ml-auto flex items-center gap-3 rounded-full border border-vow-ink bg-vow-ink px-4 py-3 text-sm font-semibold text-vow-bg shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(0,0,0,0.24)]"
      >
        <span className="relative grid size-9 place-items-center rounded-full bg-vow-bg text-sm font-bold text-vow-ink" aria-hidden>
          V
          <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-vow-ink bg-emerald-500" />
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span>VOW AI</span>
          <span className="mt-0.5 text-[10px] font-normal text-vow-bg/70">Online · Ask me anything</span>
        </span>
        {!open && (
          <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-emerald-500 text-[10px] font-bold text-white ring-2 ring-vow-bg">
            1
          </span>
        )}
      </button>
    </div>
  );
}\n