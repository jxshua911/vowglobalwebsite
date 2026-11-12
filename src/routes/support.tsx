import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

const SUPABASE_URL = "https://vqsrdausvmfjayffxiuh.supabase.co";
const SUPABASE_KEY = "sb_publishable_M6qmsILtc2ORJ_3tSe5OQg_Fv6RaTib";
const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/vow-website-chat`;

export const Route = createFileRoute("/support")({
  head: () => pageHead({
    path: "/support",
    title: "Support | VOW",
    description: "Get help with your VOW account, technical issues, Premium, privacy or account deletion.",
  }),
  component: SupportPage,
});

const supportTopics = [
  { number: "01", title: "Technical issues", description: "Report a bug or something that is not working as expected." },
  { number: "02", title: "Account & Premium", description: "Get help with signing in, access or your subscription." },
  { number: "03", title: "Privacy & data", description: "Ask about your information or request account deletion." },
];

function SupportPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailSent, setEmailSent] = useState(false);

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
      const result = await response.json();
      form.reset();
      setEmailSent(result.email_sent === true);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <header className="border-b border-vow-border vow-surface-grey">
        <div className="container-site grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-16 lg:py-24">
          <div>
            <p className="vow-label">VOW / Support</p>
            <h1 className="mt-4 max-w-3xl text-6xl leading-[.92] sm:text-8xl">Support.</h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-vow-muted sm:text-lg">
              Need a hand? Tell us what happened and we’ll help you work out the next step.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 border border-vow-ink bg-vow-ink px-5 py-3 text-sm font-medium text-vow-bg transition-colors hover:bg-vow-muted">
              Contact support <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="border border-vow-border bg-vow-bg p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-vow-border pb-4">
              <p className="vow-label">What do you need help with?</p>
              <span className="font-mono text-xs text-vow-muted">01 — 03</span>
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
              Prefer email? <a href={`mailto:${site.supportEmail}`} className="font-medium text-vow-ink underline underline-offset-4">{site.supportEmail}</a>
            </p>
          </div>
        </div>
      </header>

      <main id="contact" className="vow-section-grey scroll-mt-24 py-14 sm:py-20 lg:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="vow-label">Contact</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">Tell us what’s going on.</h2>
            <p className="mt-5 max-w-md leading-7 text-vow-muted">
              Include the page or feature involved, what you expected, and what happened instead. Clear details help us investigate.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Choose the topic that best matches your question.",
                "Describe what happened and where it happened.",
                "Leave an email address where we can reach you.",
              ].map((item, index) => (
                <div key={item} className="flex gap-3 border border-vow-border bg-vow-surface-grey p-4">
                  <span className="grid size-8 shrink-0 place-items-center border border-vow-border bg-vow-bg font-mono text-xs">{index + 1}</span>
                  <p className="text-sm leading-6 text-vow-muted">{item}</p>
                </div>
              ))}
            </div>
          </aside>

          <section className="border border-vow-border bg-vow-bg p-5 sm:p-8 lg:p-10">
            <div className="mb-8 border-b border-vow-border pb-5">
              <p className="vow-label">Support request</p>
              <h3 className="mt-2 text-2xl sm:text-3xl">How can we help?</h3>
            </div>

            {status === "success" && (
              <div role="status" className="mb-7 border border-vow-border bg-vow-surface p-5">
                <p className="font-semibold">Your message has been received.</p>
                <p className="mt-1 text-sm leading-6 text-vow-muted">{emailSent ? "We’ve saved your request and notified the support inbox." : <>Your request has been saved, but an email notification could not be confirmed. You can also email <a className="underline underline-offset-4" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.</>}</p>
              </div>
            )}
            {status === "error" && (
              <div role="alert" className="mb-7 border border-vow-border bg-vow-surface p-5">
                <p className="font-semibold">Your message couldn’t be sent.</p>
                <p className="mt-1 text-sm leading-6 text-vow-muted">Please try again or email <a className="underline underline-offset-4" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.</p>
              </div>
            )}

            <form onSubmit={submit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block"><span className="vow-label">Name</span><input required name="name" autoComplete="name" className="vow-field" placeholder="Your name" /></label>
                <label className="block"><span className="vow-label">Email address</span><input required type="email" name="email" autoComplete="email" className="vow-field" placeholder="you@example.com" /></label>
              </div>
              <label className="block"><span className="vow-label">Topic</span><select required name="reason" defaultValue="" className="vow-field"><option value="" disabled>Select a topic</option><option>Bug or technical issue</option><option>Account / login</option><option>Subscription / Premium</option><option>Privacy request</option><option>Account deletion</option><option>Feedback</option><option>Other</option></select></label>
              <label className="block"><span className="vow-label">Message</span><textarea required minLength={10} name="message" rows={7} className="vow-field resize-y leading-7" placeholder="Tell us what happened and which part of VOW you were using." /></label>
              <input aria-hidden="true" tabIndex={-1} autoComplete="off" name="website" className="absolute -left-[9999px] h-px w-px opacity-0" />
              <div className="flex flex-col gap-4 border-t border-vow-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-vow-muted">Do not include passwords or sensitive login details.</p>
                <button type="submit" disabled={status === "loading"} className="vow-btn-primary inline-flex items-center justify-center gap-3 disabled:cursor-wait disabled:opacity-50">
                  {status === "loading" ? "Sending..." : "Send message"} <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <section className="border-t border-vow-border vow-surface-grey">
        <div className="container-site py-12 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="vow-label">More from VOW</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Useful links.</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-vow-muted">Find product information and the documents that explain how VOW works.</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a href="/early-access" className="group flex items-center justify-between border border-vow-border bg-vow-bg p-6 transition-colors hover:bg-vow-surface/70">
              <div><h3 className="text-xl">Early access</h3><p className="mt-2 text-sm text-vow-muted">Join the VOW launch list.</p></div>
              <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="/legal" className="group flex items-center justify-between border border-vow-border bg-vow-bg p-6 transition-colors hover:bg-vow-surface/70">
              <div><h3 className="text-xl">Legal</h3><p className="mt-2 text-sm text-vow-muted">Privacy, terms and other documents.</p></div>
              <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
