import { Link, createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VOW" },
      { name: "description", content: "VOW turns goals into structured plans, sessions and visible progress." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const steps = [
  ["01", "Make it concrete", "Turn what you want into a defined outcome, milestones and a practical sequence."],
  ["02", "Put it into motion", "Build sessions around real time, real constraints and the work that actually needs doing."],
  ["03", "Keep your VOW", "Review what happened, learn from the evidence and adjust without losing the goal."],
];

function Home() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden bg-vow-bg text-vow-ink">
        <div className="absolute inset-0 vow-hero-art" aria-hidden />
                <div className="vow-paint-splash" aria-hidden>
          <svg viewBox="0 0 520 340" role="presentation">
            <path d="M50 196c-7-35 21-65 61-79 42-15 74-5 110 12 28 13 50 28 78 22 31-7 39-44 72-47 38-4 63 34 55 69-7 31-37 48-72 51-37 3-65-11-98 3-45 19-91 53-148 36-33-10-54-34-58-67Z"/>
            <path d="M121 101c8-23 36-40 57-29 17 9 14 31-5 44-19 13-59 12-52-15Z"/>
            <path d="M361 71c7-17 29-24 43-14 12 9 8 25-8 32-18 8-42 2-35-18Z"/>
            <path d="M438 184c7-12 23-16 33-8 9 8 5 20-8 25-15 5-31-3-25-17Z"/>
            <circle cx="67" cy="104" r="7"/><circle cx="83" cy="75" r="3"/><circle cx="92" cy="259" r="5"/><circle cx="182" cy="291" r="4"/><circle cx="322" cy="274" r="6"/><circle cx="476" cy="122" r="4"/><circle cx="404" cy="287" r="3"/>
            <path d="M222 62c4-9 15-13 23-8 7 5 5 14-4 18-10 5-22-1-19-10Z"/>
          </svg>
        </div>
                <div className="container-site relative flex min-h-[82vh] items-end py-14 sm:py-20">
          <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="vow-label">Goal planning · Accountability · Progress</p>
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
                <Link to="/how-it-works" className="vow-btn-primary">See how it works</Link>
                <Link to="/support" className="vow-arrow-light">Start a conversation <span aria-hidden>→</span></Link>
              </div>
            </div>
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
            <li key={n} className="group border border-vow-border bg-vow-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-vow-blue md:p-9">
              <span className="vow-label text-vow-blue">{n}</span>
              <h3 className="mt-14 text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{title}</h3>
              <p className="mt-6 leading-[1.75] text-vow-muted">{body}</p>
              <span className="mt-10 block text-xl text-vow-blue transition-transform duration-300 group-hover:translate-x-2">→</span>
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
              ["AI-assisted planning", "Get a structured starting point without handing control of the goal away."],
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
              <div className="mt-8"><Link to="/work" className="vow-arrow-light">Explore VOW <span aria-hidden>→</span></Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20 sm:py-28">
        <div className="flex flex-col gap-8 border-t border-vow-border pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="vow-label">Have a question?</p>
            <h2 className="mt-4 text-[clamp(2.6rem,5vw,4.5rem)] leading-[.9]">Contact us or talk to us.</h2>
          </div>
          <Link to="/support" className="vow-btn-primary">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
