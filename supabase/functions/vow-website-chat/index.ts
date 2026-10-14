import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: CORS });

function secret() {
  try {
    const keys = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}");
    if (keys.default) return keys.default;
  } catch {}
  return Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
}

const adminDb = () =>
  createClient(Deno.env.get("SUPABASE_URL")!, secret(), {
    auth: { persistSession: false, autoRefreshToken: false },
  });

function clean(value: unknown, max = 4000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}


function clientAddress(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || req.headers.get("cf-connecting-ip") || req.headers.get("x-real-ip") || "";
}

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function consumeRateLimit(scope: string, identity: string, limit: number, windowSeconds = 60) {
  try {
    const pepper = Deno.env.get("CHAT_RATE_LIMIT_SECRET") || secret();
    const digest = await sha256Hex(pepper + ":" + scope + ":" + identity);
    const { data, error } = await adminDb().schema("website").rpc("consume_chat_rate_limit", {
      p_key: scope + ":" + digest,
      p_limit: limit,
      p_window_seconds: windowSeconds,
    });
    if (error) {
      // Fail open: a missing/broken limiter must not take the public waitlist down.
      console.error("rate-limit-error", error.message);
      return true;
    }
    return data === true;
  } catch (err) {
    // Fail open: rate limiting is protective, not a prerequisite for waitlist access.
    console.error("rate-limit-exception", err instanceof Error ? err.message : String(err));
    return true;
  }
}

async function enforceVisitorRateLimit(req: Request, sessionId?: string, limit = 12) {
  const ip = clientAddress(req);
  if (ip && !(await consumeRateLimit("ip", ip, limit))) return false;
  if (sessionId && !(await consumeRateLimit("session", sessionId, 8))) return false;
  return true;
}
function adminEmails() {
  return (Deno.env.get("VOW_WEBSITE_ADMIN_EMAILS") || "vowglobalapp@gmail.com")
    .split(",").map((x) => x.trim().toLowerCase()).filter(Boolean);
}

async function requireAdmin(req: Request) {
  const auth = req.headers.get("Authorization") || "";
  if (!auth.startsWith("Bearer ")) throw new Error("ADMIN_AUTH_REQUIRED");
  const token = auth.slice(7);
  const { data, error } = await adminDb().auth.getUser(token);
  const email = data.user?.email?.toLowerCase() || "";
  if (error || !email || !adminEmails().includes(email)) throw new Error("ADMIN_FORBIDDEN");
  return email;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Method not allowed." }, 405);

  try {
    const body = await req.json();
    const action = clean(body?.action, 40);
    if (["message", "messages", "admin_list", "admin_messages", "takeover", "release", "admin_reply", "close"].includes(action)) {
      return json({ error: "The VOW website chat assistant has been discontinued." }, 410);
    }

    if (action === "waitlist") {
      const email = clean(body?.email, 240).toLowerCase();
      const honeypot = clean(body?.website, 120);
      if (honeypot) return json({ ok: true });
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return json({ error: "Please enter a valid email address." }, 400);
      }
      if (!(await enforceVisitorRateLimit(req, undefined, 3))) {
        return json({ error: "Too many requests. Please try again in a moment." }, 429);
      }
      const { data, error } = await adminDb()
        .from("vow_waitlist")
        .insert({
          email,
          source: clean(body?.source, 80) || "website-home",
        })
        .select("id, created_at")
        .single();
      if (error) {
        if (error.code === "23505") return json({ error: "That email is already on the list." }, 409);
        throw error;
      }
      return json({ ok: true, submission: data });
    }
    if (action === "contact") {
      const name = clean(body?.name, 120);
      const email = clean(body?.email, 240);
      const subject = clean(body?.subject, 240);
      const message = clean(body?.message, 6000);
      const honeypot = clean(body?.website, 120);
      if (honeypot) return json({ ok: true });
      if (!email || !message) return json({ error: "Email and message are required." }, 400);
      if (!/^\S+@\S+\.\S+$/.test(email)) return json({ error: "Please enter a valid email address." }, 400);
      const { data, error } = await adminDb()
        .schema("website").from("contact_submissions")
        .insert({ name: name || null, email, subject: subject || null, message })
        .select("id, created_at")
        .single();
      if (error) throw error;
      return json({ ok: true, submission: data });
    }

    const adminEmail = await requireAdmin(req);
    const db = adminDb();

    if (action === "admin_contacts") {
      const { data, error } = await db
        .schema("website").from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return json({ contacts: data || [] });
    }

    return json({ error: "Unknown action." }, 400);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message === "ADMIN_AUTH_REQUIRED") return json({ error: "Admin sign-in required." }, 401);
    if (message === "ADMIN_FORBIDDEN") return json({ error: "You are not authorised for the VOW admin console." }, 403);
    console.error("vow-website-chat", message);
    return json({ error: "VOW AI could not complete that request right now." }, 500);
  }
});