import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

const SUPABASE_URL = "https://vqsrdausvmfjayffxiuh.supabase.co";
const SUPABASE_KEY = "sb_publishable_M6qmsILtc2ORJ_3tSe5OQg_Fv6RaTib";
const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/vow-website-chat`;

export const Route = createFileRoute("/support")({
  head: () => pageHead({
    path: "/support",
    title: "VOW - Support",
    description: "Get help with VOW, report an issue, send feedback or ask a question.",
  }),
  component: SupportPage,
});

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
      <header className="border-b border-vow-border bg-vow-surface/40">
        <div className="container-site py-20 sm:py-24">
          <p className="vow-label">Support</p>
          <h1 className="mt-4 max-w-5xl text-5xl leading-none sm:text-7xl">Need help?<br />Let's sort it.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">Report a bug, ask a question, send feedback, or contact VOW about an account or privacy issue.</p>
        </div>
      </header>

      <section id="contact" className="container-site py-16 sm:py-24 scroll-mt-24">
        <div className="grid border border-vow-border bg-vow-bg lg:grid-cols-12">
          <aside className="border-b border-vow-border p-7 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12">
            <p className="vow-label">Support</p>
            <h2 className="mt-5 text-[clamp(2.4rem,4vw,4rem)] leading-[.9]">Tell us what went wrong.</h2>
            <p className="mt-6 leading-[1.8] text-vow-muted">Give us enough detail to reproduce the problem and we can investigate it properly.</p>
            <div className="mt-10 border-t border-vow-border pt-6">
              <p className="vow-label">Email</p>
              <a href="mailto:vowglobalapp@gmail.com" className="mt-2 inline-block break-all text-sm font-semibold underline underline-offset-4">vowglobalapp@gmail.com</a>
            </div>
          </aside>

          <div className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
            {status === "success" && <div role="status" className="mb-7 border-l-2 border-vow-ink bg-vow-surface px-5 py-4 text-sm leading-6">Your support request has been sent. We’ll get back to you.</div>}
            {status === "error" && <div role="alert" className="mb-7 border-l-2 border-vow-ink bg-vow-surface px-5 py-4 text-sm leading-6">We couldn’t send that right now. Please try again or email vowglobalapp@gmail.com.</div>}

            <form onSubmit={submit} className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <label><span className="vow-label">Name</span><input required name="name" className="vow-field" placeholder="Your name" /></label>
                <label><span className="vow-label">Email</span><input required type="email" name="email" className="vow-field" placeholder="you@example.com" /></label>
              </div>
              <label className="block"><span className="vow-label">Issue type</span><select required name="reason" className="vow-field"><option>Bug or technical issue</option><option>Account / login</option><option>Subscription / Premium</option><option>Privacy request</option><option>Account deletion</option><option>Feedback</option><option>Other</option></select></label>
              <label className="block"><span className="vow-label">Message</span><textarea required minLength={10} name="message" rows={9} className="vow-field resize-y leading-7" placeholder="What happened? Include the page or feature involved and anything that helps us reproduce it." /></label>
              <input aria-hidden="true" tabIndex={-1} autoComplete="off" name="website" className="absolute -left-[9999px] h-px w-px opacity-0" />
              <button type="submit" disabled={status === "loading"} className="vow-btn-primary disabled:cursor-wait disabled:opacity-50">{status === "loading" ? "Sending..." : "Send support request"} <span aria-hidden>→</span></button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-vow-border bg-vow-surface/30">
        <div className="container-site py-16 sm:py-24">
          <p className="vow-label">Useful links</p>
          <div className="mt-6 grid gap-px border border-vow-border bg-vow-border sm:grid-cols-3">
            <a href="/join-vow#waitlist" className="bg-vow-bg p-7 hover:bg-vow-surface/40"><h3 className="text-2xl">Join VOW</h3><p className="mt-2 text-sm text-vow-muted">Get early access.</p></a>
            <a href="/legal" className="bg-vow-bg p-7 hover:bg-vow-surface/40"><h3 className="text-2xl">Legal</h3><p className="mt-2 text-sm text-vow-muted">Terms, privacy and EULA.</p></a>
            <a href="/about-vow" className="bg-vow-bg p-7 hover:bg-vow-surface/40"><h3 className="text-2xl">About VOW</h3><p className="mt-2 text-sm text-vow-muted">What VOW is and how it works.</p></a>
          </div>
        </div>
      </section>
    </>
  );
}