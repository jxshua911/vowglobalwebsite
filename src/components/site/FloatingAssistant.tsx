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
    return () => window.clearInterval(timer);
  }, [open, sid]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  async function send() {
    const text = input.trim();
    if (!text || busy || !FUNCTION_URL()) return;
    setInput("");
    setBusy(true);
    const optimistic: Message = {
      id: `local-${Date.now()}`,
      sender_type: "visitor",
      content: text,
      created_at: new Date().toISOString(),
    };
    setMessages((current) => [...current, optimistic]);
    try {
      const response = await fetch(FUNCTION_URL(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "message", session_id: sid, message: text }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Request failed");
      setHumanMode(Boolean(data.human_mode));
      await loadMessages();
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: `error-${Date.now()}`,
          sender_type: "system",
          content: "I couldn't reach VOW AI right now. Please try again or use Get in touch.",
          created_at: new Date().toISOString(),
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80] sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label="VOW AI chat"
          className="mb-3 flex h-[min(620px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden border border-vow-border bg-vow-bg shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
        >
          <div className="flex items-center justify-between border-b border-vow-border px-5 py-4">
            <div>
              <p className="text-sm font-semibold tracking-tight">VOW AI</p>
              <p className="mt-0.5 text-xs text-vow-muted">
                {humanMode ? "A VOW team member is here." : "Ask about VOW or your goals."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm text-vow-muted hover:text-vow-ink"
              aria-label="Close VOW AI"
            >
              Close
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="border border-vow-border bg-vow-surface/30 p-4">
                <p className="text-sm leading-6">
                  Hi — I’m VOW AI. Ask me how VOW works, what VOW can help with, or tell me what you’re trying to achieve.
                </p>
                <p className="mt-3 text-xs leading-5 text-vow-muted">
                  If you need a human, a VOW team member can take over the conversation.
                </p>
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
                      ? "bg-vow-ink px-4 py-3 text-sm leading-6 text-vow-bg"
                      : "border border-vow-border bg-vow-bg px-4 py-3 text-sm leading-6"
                  }
                >
                  {message.content}
                </div>
                {message.sender_type === "admin" && (
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-vow-muted">VOW team</p>
                )}
              </div>
            ))}

            {busy && (
              <div className="mr-4 border border-vow-border px-4 py-3 text-sm text-vow-muted">
                VOW AI is thinking…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-vow-border p-3">
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
                placeholder={humanMode ? "Send a message to the VOW team…" : "Ask VOW AI anything…"}
                className="min-h-11 flex-1 resize-none border border-vow-border bg-vow-bg px-3 py-2 text-sm outline-none placeholder:text-vow-muted focus:border-vow-ink"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="vow-btn-primary !px-4 !py-3 disabled:cursor-not-allowed disabled:opacity-40"
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
        className="ml-auto flex items-center gap-2 border border-vow-ink bg-vow-ink px-4 py-3 text-sm font-semibold text-vow-bg shadow-[0_10px_35px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-0.5"
      >
        <span className="grid size-6 place-items-center border border-vow-bg/40 text-xs" aria-hidden>V</span>
        VOW AI
      </button>
    </div>
  );
}
