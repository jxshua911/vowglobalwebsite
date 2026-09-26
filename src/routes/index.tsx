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
          <g fill="#111">
            <path d="M28 78l19-25 24 9 18-18 31 13 22-8 21 20-9 26-24 7-14 19-30-7-21 10-20-19z"/>
            <path d="M250 30l14-17 20 6 15-11 23 14-4 21-19 8-13 17-25-8-17 5-9-18z"/>
            <path d="M530 92l23-18 28 8 17-13 27 19-8 25-25 7-17 18-29-10-20 6-10-24z"/>
            <path d="M820 38l18-16 24 8 18-11 24 17-7 23-22 8-15 18-27-10-18 6-8-22z"/>
            <path d="M1115 82l25-21 29 10 19-15 31 22-8 29-28 8-18 21-31-12-23 7-10-27z"/>
            <path d="M1335 210l19-23 27 9 18-14 28 20-7 27-24 9-16 20-29-10-21 6-9-24z"/>
            <path d="M1288 485l24-19 28 8 18-14 29 20-7 27-24 9-17 21-29-11-22 6-10-24z"/>
            <path d="M1165 715l21-20 27 9 17-13 28 19-7 26-24 9-16 19-28-10-20 6-9-24z"/>
            <path d="M930 775l17-16 23 7 15-11 24 16-6 22-20 8-14 17-24-9-18 5-8-21z"/>
            <path d="M70 720l20-18 27 8 17-12 27 18-6 25-23 9-16 19-28-10-21 6-9-23z"/>
            <path d="M1390 735l12-13 18 6 10-8 16 12-4 18-15 6-9 13-18-7-12 4-6-16z"/>
          </g>
          <g fill="#111">
            <circle cx="82" cy="145" r="4"/><circle cx="190" cy="78" r="3"/><circle cx="315" cy="125" r="5"/>
            <circle cx="590" cy="145" r="3"/><circle cx="875" cy="120" r="4"/><circle cx="1190" cy="145" r="3"/>
            <circle cx="1370" cy="330" r="5"/><circle cx="1240" cy="585" r="3"/><circle cx="1090" cy="765" r="4"/>
            <circle cx="150" cy="765" r="4"/><circle cx="1360" cy="690" r="3"/>
          </g>
        </svg>     <div className="container-site relative z-[3] flex min-h-[82vh] items-end py-14 sm:py-20">
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
