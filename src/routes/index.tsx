import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => pageHead({
    path: "/",
    title: "VOW - AI-Powered Goal Planning App | Turn Goals Into Action",
    description: "VOW is an AI assistant that turns your goals into personalized, actionable plans. Get structured guidance, track progress, and achieve more with intelligent goal planning.",
  }),
  component: Home,
});

const steps = [
  ["01", "Make it concrete", "Turn what you want into a defined outcome, milestones and a practical sequence."],
  ["02", "Put it into motion", "Build sessions around real time, real constraints and the work that actually needs doing."],
  ["03", "Keep your VOW", "Review what happened, learn from the evidence and adjust without losing the goal."],
];

function ProductVisual() {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`vow-work-image relative overflow-hidden border border-vow-border bg-vow-surface ${failed ? "vow-image-failed" : ""}`}>
      {!failed && (
        <img
          src="/images/vow-app-screenshot.webp"
          alt="VOW mobile app"
          className="relative z-[1] block h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
      <div className="vow-image-fallback" aria-hidden="true">
        <span>VOW</span>
      </div>
      <span className="vow-image-index">VOW / APP</span>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="vow-hero relative min-h-[82vh] overflow-hidden bg-vow-bg text-vow-ink">
        <div className="container-site relative z-[3] flex min-h-[82vh] items-end py-14 sm:py-20">
          <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="vow-label !text-vow-ink">Goal planning · Accountability · Progress</p>
              <h1 className="vow-hero-title mt-6 max-w-5xl text-[clamp(3.6rem,9vw,8.5rem)]">
                <span className="block">Make your VOW.</span>
                <span className="block">Keep your VOW.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-[38ch] text-base leading-[1.8] text-vow-muted sm:text-lg">
                {site.tagline} Built to move you from intention to scheduled work, then back to the evidence of what actually happened.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a href="/early-access" className="vow-btn-primary">Get early access <span aria-hidden>→</span></a>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-vow-muted">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vow-section-grey py-16 sm:py-24">\n        <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="vow-label">The product</p>
            <h2 className="mt-5 text-[clamp(2.7rem,5vw,4.8rem)] leading-[.9]">See the system in motion.</h2>
          </div>
          <div className="lg:col-span-8 lg:pl-10">
            <ProductVisual />
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-vow-muted">Real VOW product preview · image will be added before launch</p>
          </div>
        </div>
      </section>

      <section className="container-site py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="vow-label">The VOW system</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.6rem,5vw,4.7rem)] leading-[.92]">A goal is only the beginning.</h2>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <p className="max-w-[58ch] text-xl leading-[1.65]">VOW connects planning, commitment and review into one continuous system.</p>
            <p className="mt-6 max-w-[60ch] leading-[1.8] text-vow-muted">No generic motivational feed. No plan that disappears after day one. The point is to make the next piece of work clear, give it a place to happen and learn from what you actually do.</p>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(([n, title, body]) => (
            <li key={n} className="group border border-vow-border bg-vow-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-vow-ink md:p-9">
              <span className="vow-label text-vow-ink">{n}</span>
              <h3 className="mt-14 text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{title}</h3>
              <p className="mt-6 leading-[1.75] text-vow-muted">{body}</p>
              <span className="mt-10 block text-xl text-vow-ink transition-transform duration-300 group-hover:translate-x-2">→</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-vow-border bg-vow-surface/35">
        <div className="container-site py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="vow-label">What VOW puts together</p>
            <h2 className="mt-5 text-[clamp(2.5rem,5vw,4.5rem)] leading-[.92]">From the idea in your head to the work in your week.</h2>
            <p className="mx-auto mt-6 max-w-[58ch] leading-[1.8] text-vow-muted">The system is designed around the full loop: define the outcome, build the route, schedule the sessions, do the work and review the result.</p>
          </div>

          <div className="mt-14 grid gap-px border border-vow-border bg-vow-border sm:grid-cols-2">
            {[
              ["Structured planning", "Get a clear starting point without handing control of the goal away."],
              ["Sessions & reminders", "Turn milestones into concrete blocks of work you can actually show up for."],
              ["Calendar connections", "Bring planned work into the tools you already use."],
              ["Reviews & journal", "Keep a record of what happened and use it to shape what comes next."],
            ].map(([title, body]) => (
              <div key={title} className="bg-vow-bg p-7 md:p-9">
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-3 max-w-[42ch] leading-[1.7] text-vow-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-vow-bg text-vow-ink">
        <div className="container-site py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="vow-label !text-vow-ink">Built for follow-through</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] leading-[.86]">Less inspiration.<br />More evidence.</h2>
            </div>
            <div className="lg:col-span-4">
              <p className="leading-[1.8] text-vow-ink/70">VOW is about the part after the goal is written down: the work, the review and the decision to keep going.</p>
              <div className="mt-8"><a href="/early-access" className="vow-arrow-light">Get early access <span aria-hidden>→</span></a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
