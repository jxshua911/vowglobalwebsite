import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

const SUPABASE_URL = "https://vqsrdausvmfjayffxiuh.supabase.co";
const SUPABASE_KEY = "sb_publishable_M6qmsILtc2ORJ_3tSe5OQg_Fv6RaTib";
const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/vow-website-chat`;

export const Route = createFileRoute("/support")({
  head: () => pageHead({
    path: "/support",
    title: "Support - VOW | Get Help & Contact Us",
    description: "Need help with VOW? Contact our support team for assistance with your AI goal planning app. We're here to help you succeed.",
  }),
  component: SupportPage,
});

const supportTopics = [
  { number: "01", title: "Something not working?", description: "Report a bug or technical issue." },
  { number: "02", title: "Account or Premium?", description: "Get help with access or a subscription." },
  { number: "03", title: "Privacy matters", description: "Ask about your data or account deletion." },
];

function SupportPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") || "").trim()) return;
    setStatus("loading");

    try {
      const response = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "contact",
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          subject: String(data.get("reason") || "General support"),
          message: String(data.get("message") || ""),
          website: String(data.get("website") || ""),
        }),
      });
      if (!response.ok) throw new Error("Support submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <header className="border-b border-vow-border bg-vow-surface/45">
        <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-16 lg:py-24">
          <div>
            <p className="vow-label">VOW / Support desk</p>
            <h1 className="mt-4 max-w-3xl text-5xl leading-[.98] sm:text-7xl">Good support starts with being heard.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-vow-muted sm:text-lg">
              Something confusing? Found a bug? Need help with your account? Tell us what is happening and we’ll help you find the next step.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 border border-vow-ink bg-vow-ink px-5 py-3 text-sm font-medium text-vow-bg transition-colors hover:bg-vow-muted">
              Contact support <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="border border-vow-border bg-vow-bg p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-vow-border pb-4">
              <p className="vow-label">How can we help?</p>
              <span className="font-mono text-xs text-vow-muted">VOW / HELP</span>
            </div>
            <div className="divide-y divide-vow-border">
              {supportTopics.map((topic) => (
                <div key={topic.number} className="flex gap-4 py-5">
                  <span className="font-mono text-xs text-vow-muted">{topic.number}</span>
                  <div>
                    <h2 className="text-lg leading-snug">{topic.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-vow-muted">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="border-t border-vow-border pt-4 text-sm leading-6 text-vow-muted">
              Prefer email? <a href="mailto:vowglobalapp@gmail.com" className="font-medium text-vow-ink underline underline-offset-4">vowglobalapp@gmail.com</a>
            </p>
          </div>
        </div>
      </header>

      <main id="contact" className="container-site scroll-mt-24 py-14 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="vow-label">Send a message</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">Let’s work through it.</h2>
            <p className="mt-5 max-w-md leading-7 text-vow-muted">
              A few clear details help us understand the issue and investigate it properly.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex gap-3 border border-vow-border bg-vow-surface/40 p-4">
                <span className="grid size-8 shrink-0 place-items-center border border-vow-border bg-vow-bg font-mono text-xs">1</span>
                <p className="text-sm leading-6 text-vow-muted">Choose the topic that best matches your question.</p>
              </div>
              <div className="flex gap-3 border border-vow-border bg-vow-surface/40 p-4">
                <span className="grid size-8 shrink-0 place-items-center border border-vow-border bg-vow-bg font-mono text-xs">2</span>
                <p className="text-sm leading-6 text-vow-muted">Describe what happened and which page or feature was involved.</p>
              </div>
              <div className="flex gap-3 border border-vow-border bg-vow-surface/40 p-4">
                <span className="grid size-8 shrink-0 place-items-center border border-vow-border bg-vow-bg font-mono text-xs">3</span>
                <p className="text-sm leading-6 text-vow-muted">Leave a reachable email so we can follow up if needed.</p>
              </div>
            </div>
          </aside>

          <section className="border border-vow-border bg-vow-bg p-5 sm:p-8 lg:p-10">
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-vow-border pb-5">
              <div>
                <p className="vow-label">Support request</p>
                <h3 className="mt-2 text-2xl sm:text-3xl">What can we help with?</h3>
              </div>
              <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center border border-vow-border bg-vow-surface text-xl">↗</span>
            </div>

            {status === "success" && (
              <div role="status" className="mb-7 border border-vow-border bg-vow-surface p-5">
                <p className="font-semibold">Your support request has been sent.</p>
                <p className="mt-1 text-sm leading-6 text-vow-muted">Thanks for reaching out. We’ll get back to you.</p>
              </div>
            )}
            {status === "error" && (
              <div role="alert" className="mb-7 border border-vow-border bg-vow-surface p-5">
                <p className="font-semibold">We couldn’t send that just now.</p>
                <p className="mt-1 text-sm leading-6 text-vow-muted">Please try again or email <a className="underline underline-offset-4" href="mailto:vowglobalapp@gmail.com">vowglobalapp@gmail.com</a>.</p>
              </div>
            )}

            <form onSubmit={submit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block"><span className="vow-label">Your name</span><input required name="name" className="vow-field" placeholder="How should we address you?" /></label>
                <label className="block"><span className="vow-label">Email address</span><input required type="email" name="email" className="vow-field" placeholder="you@example.com" /></label>
              </div>
              <label className="block"><span className="vow-label">What is this about?</span><select required name="reason" className="vow-field"><option>Bug or technical issue</option><option>Account / login</option><option>Subscription / Premium</option><option>Privacy request</option><option>Account deletion</option><option>Feedback</option><option>Other</option></select></label>
              <label className="block"><span className="vow-label">Tell us a little more</span><textarea required minLength={10} name="message" rows={7} className="vow-field resize-y leading-7" placeholder="What happened? Which page or feature were you using? What did you expect to happen?" /></label>
              <input aria-hidden="true" tabIndex={-1} autoComplete="off" name="website" className="absolute -left-[9999px] h-px w-px opacity-0" />
              <div className="flex flex-col gap-4 border-t border-vow-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-vow-muted">Please don’t include passwords or other sensitive login details in your message.</p>
                <button type="submit" disabled={status === "loading"} className="vow-btn-primary inline-flex items-center justify-center gap-3 disabled:cursor-wait disabled:opacity-50">
                  {status === "loading" ? "Sending..." : "Send support request"} <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <section className="border-t border-vow-border bg-vow-surface/35">
        <div className="container-site py-12 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="vow-label">Keep exploring</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Useful VOW links.</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-vow-muted">Find product information, legal documents, and details about using VOW.</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a href="/early-access" className="group flex items-center justify-between border border-vow-border bg-vow-bg p-6 transition-colors hover:bg-vow-surface/70">
              <div><h3 className="text-xl">Get early access</h3><p className="mt-2 text-sm text-vow-muted">Join the launch list.</p></div>
              <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="/legal" className="group flex items-center justify-between border border-vow-border bg-vow-bg p-6 transition-colors hover:bg-vow-surface/70">
              <div><h3 className="text-xl">Legal documents</h3><p className="mt-2 text-sm text-vow-muted">Terms, privacy, EULA and more.</p></div>
              <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
