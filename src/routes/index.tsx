import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => pageHead({
    path: "/",
    title: "VOW",
    description: "YOUR GOALS DESERVE MORE THAN GOOD INTENTIONS. TURN THEM INTO A PLAN. VOW is a goal-planning app that turns what you want to achieve into a personalised, step-by-step plan — so you know what to do, how to do it, and what comes next.",
  }),
  component: Home,
});

const steps = [
  ["01", "Set your goal", "Define what you want to achieve. Give the goal a clear outcome and a direction you can work towards."],
  ["02", "Build your plan", "VOW turns your goal into a personalised sequence of steps and milestones, so the next move is clear."],
  ["03", "Do the work", "Turn those steps into sessions, track what gets done and use your reviews to decide what comes next."],
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
                VOW is a goal-planning app that turns what you want to achieve into a personalised, step-by-step plan — so you know what to do, how to do it, and what comes next.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a href="/early-access" className="vow-btn-primary">Get early access <span aria-hidden>→</span></a>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-vow-muted">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vow-section-grey py-20 sm:py-28">
        <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="vow-label">The VOW system</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.6rem,5vw,4.7rem)] leading-[.92]">A goal is only the beginning.</h2>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <p className="max-w-[58ch] text-xl leading-[1.65]">A goal gives you something to aim for. A plan gives you something to work with. VOW helps you build that plan — then gives you the tools to follow it.</p>
            <p className="mt-6 max-w-[60ch] leading-[1.8] text-vow-muted">Start with what you want to achieve. Break it into manageable steps, organise those steps into sessions, and keep track of your progress as you go. When plans meet real life, review what happened and adjust your next steps.</p>
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
        </div>
      </section>

      <section className="border-y border-vow-border vow-section-grey">
        <div className="container-site py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="vow-label">What VOW puts together</p>
            <h2 className="mt-5 text-[clamp(2.5rem,5vw,4.5rem)] leading-[.92]">One goal. A clear plan. Work you can track.</h2>
            <p className="mx-auto mt-6 max-w-[58ch] leading-[1.8] text-vow-muted">VOW connects the parts that are usually scattered across notes, calendars and to-do lists — from the first plan to the progress review.</p>
          </div>

          <div className="mt-14 grid gap-px border border-vow-border bg-vow-border sm:grid-cols-2">
            {[
              ["Personalised plans", "Turn a goal into a structured plan with practical steps and milestones you can work through."],
              ["Goals & progress", "Keep your goals together and see the progress you are making over time."],
              ["Sessions & calendar", "Break planned work into scheduled sessions and connect it with your calendar."],
              ["Reviews & journal", "Record what you completed, reflect on how it went and use that insight to shape the next step."],
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
              <p className="leading-[1.8] text-vow-ink/70">VOW brings your goals, plans, sessions and progress into one place — helping you move from deciding what matters to doing the work, seeing what changed and choosing your next step.</p>
              <div className="mt-8"><a href="/early-access" className="vow-arrow-light">Get early access <span aria-hidden>→</span></a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
