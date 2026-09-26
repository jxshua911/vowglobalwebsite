import { pageHead } from "@/lib/seo";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-vow")({
  head: () => pageHead({
    path: "/about-vow",
    title: "VOW - About VOW",
    description: "Learn what VOW is, the thinking behind it, and how planning, work and review fit together.",
  }),
  component: AboutVow,
});

const principles = [
  ["01", "Define the outcome", "Start with what you actually want to accomplish and keep the outcome visible."],
  ["02", "Build the route", "Turn the outcome into milestones and concrete sessions around real time and constraints."],
  ["03", "Do the work", "Give each commitment a place in your week and let progress come from action."],
  ["04", "Review the evidence", "Look at what happened, learn from it and adjust what comes next."],
] as const;

function AboutVow() {
  return <>
    <header className="border-b border-vow-border">
      <div className="container-site py-20 sm:py-24">
        <p className="vow-label">About VOW</p>
        <h1 className="mt-4 max-w-5xl text-5xl leading-none sm:text-7xl">A clearer way to turn intention into action.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">VOW is a goal-planning and accountability system built around the full loop: decide what matters, plan the work, do it, and learn from the result.</p>
      </div>
    </header>

    <section className="container-site py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="vow-label">The idea</p>
          <h2 className="mt-5 text-[clamp(2.7rem,5vw,4.8rem)] leading-[.9]">A goal is only the beginning.</h2>
        </div>
        <div className="lg:col-span-7 lg:pl-10">
          <p className="text-xl leading-[1.65]">VOW connects planning, commitment and review into one continuous system.</p>
          <p className="mt-6 leading-[1.8] text-vow-muted">The point is not to produce another plan that looks good and then disappears. VOW is designed to make the next piece of work clear, give it a place to happen and keep a record of what actually happened.</p>
          <p className="mt-6 leading-[1.8] text-vow-muted">AI can help structure a starting point, but the goal, decisions and commitments remain yours.</p>
        </div>
      </div>
    </section>

    <section className="border-y border-vow-border bg-vow-surface/35">
      <div className="container-site py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="vow-label">The VOW loop</p>
          <h2 className="mt-5 text-[clamp(2.7rem,5vw,4.8rem)] leading-[.9]">Plan. Work. Review.</h2>
          <p className="mt-6 max-w-2xl leading-[1.8] text-vow-muted">Each part is connected so the system can reflect what is happening in real life rather than treating planning as the finish line.</p>
        </div>
        <div className="mt-14 divide-y divide-vow-border border-y border-vow-border">
          {principles.map(([n, title, body]) => (
            <article key={n} className="grid gap-5 py-8 md:grid-cols-[5rem_18rem_1fr] md:items-start">
              <span className="font-mono text-xs text-vow-muted">{n}</span>
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="max-w-2xl text-sm leading-7 text-vow-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-vow-bg text-vow-ink">
      <div className="container-site grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="vow-label !text-vow-ink">Built for follow-through</p>
          <h2 className="mt-4 text-4xl leading-none sm:text-6xl">Less inspiration.<br />More evidence.</h2>
        </div>
        <div>
          <p className="max-w-xl leading-7 text-vow-ink/70">VOW is for people who want their goals to become visible work, not just good intentions.</p>
          <Link to="/connect#waitlist" className="vow-btn-primary mt-8">Get early access →</Link>
        </div>
      </div>
    </section>
  </>;
}
