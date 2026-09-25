import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

type Conversation = {
  id: string;
  session_id: string;
  visitor_name?: string | null;
  visitor_email?: string | null;
  status: "open" | "human" | "closed";
  human_mode: boolean;
  assigned_admin_email?: string | null;
  last_message_at: string;
};

type Contact = { id: string; name?: string | null; email?: string | null; subject?: string | null; message: string; created_at: string; };

type Message = {
  id: string;
  sender_type: "visitor" | "ai" | "admin" | "system";
  sender_name?: string | null;
  content: string;
  created_at: string;
};

const functionUrl = () => {
  const base = import.meta.env["VITE_SUPABASE_URL"] || "";
  return base ? `${base}/functions/v1/vow-website-chat` : "";
};

export const Route = createFileRoute("/admin/chat")({
  component: AdminChat,
});

function AdminChat() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState<any>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [inbox, setInbox] = useState<"chat" | "inquiries">("chat");
  const [selected, setSelected] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function refreshSession() {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  }

  useEffect(() => {
    refreshSession();
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => data.subscription.unsubscribe();
  }, []);

  async function call(action: string, extra: Record<string, unknown> = {}) {
    const token = session?.access_token;
    if (!token) throw new Error("Please sign in.");
    const response = await fetch(functionUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ action, ...extra }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Request failed");
    return data;
  }

  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) setError(authError.message);
    else setSession(data.session);
    setBusy(false);
  }

  async function loadContacts() {
    try {
      const data = await call("admin_contacts");
      setContacts(data.contacts || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load enquiries.");
    }
  }

  async function loadConversations() {
    try {
      const data = await call("admin_list");
      setConversations(data.conversations || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load conversations.");
    }
  }

  async function loadMessages(conversation: Conversation) {
    setSelected(conversation);
    try {
      const data = await call("admin_messages", { conversation_id: conversation.id });
      setMessages(data.messages || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load messages.");
    }
  }

  useEffect(() => {
    if (!session) return;
    loadConversations();
    loadContacts();
    const timer = window.setInterval(() => { loadConversations(); loadContacts(); }, 4000);
    return () => window.clearInterval(timer);
  }, [session]);

  useEffect(() => {
    if (!session || !selected) return;
    loadMessages(selected);
    const timer = window.setInterval(() => loadMessages(selected), 2500);
    return () => window.clearInterval(timer);
  }, [session, selected?.id]);

  async function takeover() {
    if (!selected) return;
    await call("takeover", { conversation_id: selected.id });
    await loadConversations();
    await loadMessages(selected);
  }

  async function release() {
    if (!selected) return;
    await call("release", { conversation_id: selected.id });
    await loadConversations();
    await loadMessages(selected);
  }

  async function closeConversation() {
    if (!selected) return;
    await call("close", { conversation_id: selected.id });
    setSelected(null);
    setMessages([]);
    await loadConversations();
  }

  async function sendReply() {
    if (!selected || !reply.trim()) return;
    setBusy(true);
    try {
      await call("admin_reply", { conversation_id: selected.id, message: reply.trim() });
      setReply("");
      await loadMessages(selected);
      await loadConversations();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not send reply.");
    } finally {
      setBusy(false);
    }
  }

  if (!session) {
    return (
      <main className="container-site flex min-h-[70vh] items-center py-16">
        <div className="mx-auto w-full max-w-md border border-vow-border p-7">
          <p className="vow-label">VOW admin</p>
          <h1 className="mt-4 text-4xl leading-none">Sign in to take over chats.</h1>
          <p className="mt-4 text-sm leading-6 text-vow-muted">
            This console is for authorised VOW team members only.
          </p>
          <form onSubmit={signIn} className="mt-8 space-y-4">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" placeholder="Admin email" className="w-full border border-vow-border px-3 py-3 text-sm outline-none focus:border-vow-ink" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" placeholder="Password" className="w-full border border-vow-border px-3 py-3 text-sm outline-none focus:border-vow-ink" />
            {error && <p className="text-sm text-red-700">{error}</p>}
            <button disabled={busy} className="vow-btn-primary w-full">{busy ? "Signing in…" : "Sign in"}</button>
          </form>
          <Link to="/" className="mt-6 inline-block text-sm underline underline-offset-4">Back to VOW</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container-site min-h-[80vh] py-10">
      <div className="flex flex-col gap-3 border-b border-vow-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="vow-label">VOW admin</p>
          <h1 className="mt-3 text-4xl leading-none">Chat inbox</h1>
          <p className="mt-2 text-sm text-vow-muted">AI handles normal questions. Take over any conversation when you want.</p>
        </div>
        <button onClick={() => supabase.auth.signOut()} className="vow-btn-ghost">Sign out</button>
      </div>

      {error && <div className="mt-5 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>}

      <div className="mt-8 flex gap-2 border-b border-vow-border">
        <button onClick={() => setInbox("chat")} className={`px-1 pb-3 text-sm font-semibold ${inbox === "chat" ? "border-b-2 border-vow-ink" : "text-vow-muted"}`}>Chat inbox</button>
        <button onClick={() => setInbox("inquiries")} className={`px-1 pb-3 text-sm font-semibold ${inbox === "inquiries" ? "border-b-2 border-vow-ink" : "text-vow-muted"}`}>Website enquiries ({contacts.length})</button>
      </div>

      {inbox === "inquiries" ? (
        <section className="mt-5 border border-vow-border">
          <div className="border-b border-vow-border px-4 py-3 text-sm font-semibold">Website enquiries</div>
          <div className="divide-y divide-vow-border">
            {contacts.length === 0 && <p className="p-5 text-sm text-vow-muted">No enquiries yet.</p>}
            {contacts.map((contact) => (
              <article key={contact.id} className="p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-semibold">{contact.name || "Website visitor"}</p>
                    <p className="text-xs text-vow-muted">{contact.email || "No email provided"}</p>
                  </div>
                  <p className="text-xs text-vow-muted">{new Date(contact.created_at).toLocaleString()}</p>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-vow-muted">{contact.subject || "General enquiry"}</p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-7">{contact.message}</p>
              </article>
            ))}
          </div>
        </section>
      ) : (
      <div className="mt-5 grid min-h-[620px] gap-5 lg:grid-cols-[330px_1fr]">
        <aside className="border border-vow-border">
          <div className="border-b border-vow-border px-4 py-3 text-sm font-semibold">Conversations</div>
          <div className="max-h-[620px] overflow-y-auto">
            {conversations.length === 0 && <p className="p-4 text-sm text-vow-muted">No active conversations yet.</p>}
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => loadMessages(conversation)}
                className={`block w-full border-b border-vow-border p-4 text-left ${selected?.id === conversation.id ? "bg-vow-surface/40" : "hover:bg-vow-surface/25"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-sm font-medium">{conversation.visitor_name || "Website visitor"}</span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-vow-muted">{conversation.human_mode ? "Human" : "AI"}</span>
                </div>
                <p className="mt-1 truncate text-xs text-vow-muted">{conversation.visitor_email || conversation.session_id.slice(0, 12)}</p>
                <p className="mt-2 text-[10px] text-vow-muted">{new Date(conversation.last_message_at).toLocaleString()}</p>
              </button>
            ))}
          </div>
        </aside>

        <section className="flex flex-col border border-vow-border">
          {!selected ? (
            <div className="grid flex-1 place-items-center p-8 text-center text-sm text-vow-muted">Select a conversation.</div>
          ) : (
            <>
              <div className="flex flex-col gap-3 border-b border-vow-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold">{selected.visitor_name || "Website visitor"}</p>
                  <p className="mt-1 text-xs text-vow-muted">{selected.visitor_email || "No email provided"}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {!selected.human_mode ? (
                    <button onClick={takeover} className="vow-btn-primary !px-3 !py-2 text-xs">Take over</button>
                  ) : (
                    <button onClick={release} className="vow-btn-ghost !px-3 !py-2 text-xs">Return to AI</button>
                  )}
                  <button onClick={closeConversation} className="vow-btn-ghost !px-3 !py-2 text-xs">Close</button>
                </div>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto p-5">
                {messages.map((message) => (
                  <div key={message.id} className={message.sender_type === "visitor" ? "mr-12" : "ml-12"}>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.12em] text-vow-muted">
                      {message.sender_type === "visitor" ? "Visitor" : message.sender_type === "admin" ? "You" : message.sender_type === "ai" ? "VOW AI" : "System"}
                    </p>
                    <div className="border border-vow-border px-4 py-3 text-sm leading-6">{message.content}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-vow-border p-4">
                <form onSubmit={(e) => { e.preventDefault(); sendReply(); }} className="flex gap-2">
                  <textarea value={reply} onChange={(e) => setReply(e.target.value)} rows={3} placeholder={selected.human_mode ? "Reply as VOW…" : "Take over first to reply as a human…"} disabled={!selected.human_mode || busy} className="min-h-12 flex-1 resize-none border border-vow-border px-3 py-2 text-sm outline-none focus:border-vow-ink disabled:bg-vow-surface/30" />
                  <button disabled={!selected.human_mode || busy || !reply.trim()} className="vow-btn-primary self-end !px-4 !py-3 disabled:opacity-40">Send</button>
                </form>
              </div>
            </>
          )}
        </section>
      </div>
      )}
    </main>
  );
}
