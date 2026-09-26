import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Waitlist } from "@/components/site/Waitlist";

const SUPABASE_URL = "https://vqsrdausvmfjayffxiuh.supabase.co";
const SUPABASE_KEY = "sb_publishable_M6qmsILtc2ORJ_3tSe5OQg_Fv6RaTib";
const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/vow-website-chat`;

const faqs = [
  ["How do I delete my VOW account?", "Use the account deletion option in VOW where available, or contact support and we will help with the request."],
  ["How do I manage a subscription?", "Subscriptions are managed through the platform where you purchased them, such as Google Play."],
  ["How do I disconnect an integration?", "Disconnect Google Calendar, Strava or another connected service from VOW or the connected service's own account settings."],
  ["How do I turn off reminders?", "Change notification preferences in VOW or in your device settings."],
] as const;

export const Route = createFileRoute("/connect")({
  head: () => pageHead({
    path: "/connect",
    title: "VOW - Connect",
    description: "Join VOW for early access or get in touch with VOW for support, feedback, partnerships and privacy requests.",
  }),
  component: ConnectPage,
});

function ConnectPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (String(formData.get("website") || "").trim()) return;
    setStatus("loading");

    try {
      const response = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "contact",
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          subject: String(formData.get("reason") || "General enquiry"),
          message: String(formData.get("message") || ""),
          website: String(formData.get("website") || ""),
        }),
      });
      if (!response.ok) throw new Error("Contact submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <>
    <header className="border-b border-vow-border bg-vow-surface/40">
      <div className="container-site py-20 sm:py-24">
        <p className="vow-label">Connect</p>
        <h1 className="mt-4 max-w-5xl text-5xl leading-none sm:text-7xl">Join VOW.<br />Talk to VOW.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">Early access, questions, feedback, partnerships or support — this is the direct line to VOW.</p>
      </div>
    </header>

    <section id="waitlist" className="scroll-mt-24 border-b border-vow-border">
      <Waitlist />
    </section>

    <section id="contact" className="relative overflow-hidden bg-vow-bg text-vow-ink scroll-mt-24">
      <div className="absolute inset-0 opacity-20" aria-hidden><div className="vow-contact-grid h-full w-full" /></div>
      <div className="container-site relative py-20 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="vow-label !text-vow-muted">Get in touch</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(4rem,10vw,9rem)] leading-[.78] tracking-[-.05em]">Let's<br /><span className="text-vow-muted">talk.</span></h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-[34ch] text-lg leading-[1.7] text-vow-muted">Questions, feedback, partnerships or privacy requests. Send them directly from the website — no mail app, no extra steps.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container-site relative -mt-8 pb-20 sm:-mt-12 sm:pb-28">
      <div className="grid border border-vow-border bg-vow-bg shadow-[0_25px_70px_rgba(0,0,0,.08)] lg:grid-cols-12">
        <aside className="border-b border-vow-border p-7 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12">
          <p className="vow-label text-vow-muted">Get in touch</p>
          <h2 className="mt-5 text-[clamp(2.4rem,4vw,4rem)] leading-[.9]">A direct line to VOW.</h2>
          <p className="mt-6 leading-[1.8] text-vow-muted">Use the form to send your enquiry straight to VOW. You will stay on this website throughout the submission.</p>
          <div className="mt-10 border-t border-vow-border pt-6">
            <p className="vow-label">Prefer email?</p>
            <p className="mt-2 break-all text-sm font-semibold">vowglobalapp@gmail.com</p>
          </div>
        </aside>

        <div className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
          {status === "success" && <div role="status" className="mb-7 border-l-2 border-vow-ink bg-vow-surface px-5 py-4 text-sm leading-6">Your enquiry has been sent. Thanks — we’ll get back to you.</div>}
          {status === "error" && <div role="alert" className="mb-7 border-l-2 border-vow-ink bg-vow-surface px-5 py-4 text-sm leading-6">We couldn’t send your enquiry right now. Please try again in a moment.</div>}

          <div className="mb-10 flex items-end justify-between gap-6 border-b border-vow-border pb-6">
            <div><p className="vow-label">Enquiry form</p><h2 className="mt-2 text-3xl sm:text-4xl">What can we help with?</h2></div>
            <span className="hidden font-mono text-xs text-vow-muted sm:block">VOW / 02</span>
          </div>

          <form onSubmit={submit} className="space-y-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <label><span className="vow-label">01 · Name</span><input required name="name" className="vow-field" placeholder="Your name" /></label>
              <label><span className="vow-label">02 · Email</span><input required type="email" name="email" className="vow-field" placeholder="you@example.com" /></label>
            </div>
            <label className="block"><span className="vow-label">03 · Enquiry type</span><select required name="reason" className="vow-field"><option>General support</option><option>Bug or technical issue</option><option>Feedback</option><option>Partnership / business enquiry</option><option>Privacy request</option><option>Account deletion</option></select></label>
            <label className="block"><span className="vow-label">04 · Message</span><textarea required minLength={10} name="message" rows={8} className="vow-field resize-y leading-7" placeholder="Tell us what you need..." /></label>
            <input aria-hidden="true" tabIndex={-1} autoComplete="off" name="website" className="absolute -left-[9999px] h-px w-px opacity-0" />
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button type="submit" disabled={status === "loading"} className="vow-btn-primary disabled:cursor-wait disabled:opacity-50">{status === "loading" ? "Sending..." : "Send enquiry"} <span aria-hidden>→</span></button>
              <a href="/legal" className="text-sm text-vow-muted underline underline-offset-4">Legal & policies</a>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section className="border-t border-vow-border bg-vow-bg text-vow-ink">
      <div className="container-site py-20 sm:py-28">
        <div className="flex flex-col gap-8 border-b border-vow-border pb-10 md:flex-row md:items-end md:justify-between">
          <div><p className="vow-label !text-vow-ink">FAQ</p><h2 className="mt-4 text-[clamp(2.8rem,5vw,5rem)] leading-[.88]">Quick answers.</h2></div>
          <p className="max-w-sm leading-7 text-vow-ink/60">A few things people commonly ask before getting in touch.</p>
        </div>
        <div className="mt-10 divide-y divide-vow-bg/15 border-y border-vow-border">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-xl sm:text-2xl"><span>{question}</span><span className="font-sans text-2xl font-light text-vow-muted transition-transform group-open:rotate-45">+</span></summary>
              <p className="mt-4 max-w-2xl leading-7 text-vow-ink/60">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </>;
}
