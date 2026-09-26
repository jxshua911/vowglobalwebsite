import { pageHead } from "@/lib/seo";
import { Link, createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => pageHead({path:'/',title:'VOW - Home',description:'VOW is a goal-planning and accountability app by Joshua Nathan Kasanga. Turn goals into structured plans, scheduled sessions and honest progress reviews.'}),
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
      <section className="vow-hero relative min-h-[82vh] overflow-hidden bg-vow-bg text-vow-ink">
        <svg className="vow-hero-splashes" viewBox="0 0 1440 820" preserveAspectRatio="none" aria-hidden="true">
          <g fill="rgb(17 17 17)">
            <path d="M44 238c28-36 66-52 106-45 31 5 46 27 75 28 32 1 61-22 88-7 28 16 12 55-18 68-32 14-71 3-102 18-35 17-47 54-83 54-42 0-89-42-93-77-2-14 8-27 27-39z"/>
            <path d="M128 166c11-14 29-19 45-10 12 7 15 21 8 31-9 13-31 16-45 7-11-7-16-18-8-28z"/>
            <path d="M230 119c7-8 18-10 27-5 9 5 11 15 6 23-6 9-19 12-28 7-8-5-11-16-5-25z"/>
            <circle cx="90" cy="140" r="7"/><circle cx="310" cy="183" r="9"/><circle cx="346" cy="225" r="5"/>
            <path d="M1035 510c36-29 72-35 108-19 27 12 37 39 65 49 31 11 65-1 86 22 20 23-7 54-40 57-34 3-68-19-101-14-38 6-61 36-94 23-38-15-61-62-48-91 5-11 13-19 24-27z"/>
            <path d="M1158 598c15-11 34-10 45 2 9 10 6 25-5 33-14 10-34 7-44-5-9-10-7-22 4-30z"/>
            <path d="M1270 554c9-7 21-6 28 2 6 7 4 17-4 22-9 7-21 5-27-3-6-7-5-15 3-21z"/>
            <circle cx="1327" cy="638" r="8"/><circle cx="1072" cy="600" r="6"/><circle cx="1002" cy="555" r="4"/>
            <path d="M510 680c24-22 51-27 78-16 23 9 30 29 51 37 23 9 49 1 64 18 15 17-4 39-29 42-26 3-51-13-75-10-28 4-46 27-70 18-29-11-46-46-37-68 4-8 9-14 18-21z"/>
            <circle cx="477" cy="707" r="6"/><circle cx="730" cy="742" r="8"/><circle cx="775" cy="695" r="5"/>
          </g>
        </svg>
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
                <a href="/join-vow#waitlist" className="vow-btn-primary">Get early access <span aria-hidden>→</span></a>
                <Link to="/about-vow" className="vow-arrow-light">About VOW <span aria-hidden>→</span></Link>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-vow-muted">Launching 29 October 2026</p>
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
            <li key={n} className="group border border-vow-border bg-vow-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-vow-ink md:p-9">
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
              <div className="mt-8"><Link to="/about-vow" className="vow-arrow-light">Explore VOW <span aria-hidden>→</span></Link></div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
