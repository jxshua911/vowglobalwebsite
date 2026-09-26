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
      <section className="relative min-h-[82vh] overflow-hidden bg-vow-bg text-vow-ink">
        <div className="absolute inset-0 vow-hero-art" aria-hidden />
                <div className="vow-paint-splash" aria-hidden>
          <svg viewBox="0 0 1440 700" preserveAspectRatio="none" role="presentation">
            <g className="splash">
              <path d="M-20 92 C35 48 86 65 119 31 C152 -3 193 24 218 58 C245 94 291 72 311 108 C330 142 288 169 248 154 C204 137 179 174 137 154 C98 135 68 171 31 145 C-3 122 -48 123 -20 92Z"/>
              <circle cx="286" cy="38" r="11"/><circle cx="326" cy="76" r="6"/><circle cx="248" cy="9" r="5"/>
            </g>
            <g className="splash">
              <path d="M454 24 C493 -3 539 22 563 48 C588 75 631 56 654 87 C677 117 650 146 612 132 C579 120 554 151 521 132 C489 113 454 128 437 98 C419 67 428 43 454 24Z"/>
              <circle cx="434" cy="15" r="6"/><circle cx="677" cy="55" r="8"/><circle cx="706" cy="92" r="4"/>
            </g>
            <g className="splash">
              <path d="M1074 34 C1120 -8 1172 18 1201 48 C1233 80 1270 52 1301 78 C1334 106 1314 143 1272 134 C1231 125 1215 162 1175 143 C1139 126 1101 148 1073 120 C1041 89 1045 60 1074 34Z"/>
              <circle cx="1033" cy="50" r="8"/><circle cx="1328" cy="47" r="12"/><circle cx="1362" cy="91" r="5"/><circle cx="1288" cy="15" r="6"/>
            </g>
            <g className="splash">
              <path d="M1187 282 C1224 252 1261 271 1283 297 C1307 326 1344 303 1369 329 C1394 355 1377 387 1343 379 C1308 371 1290 402 1258 384 C1229 368 1202 389 1178 365 C1151 338 1158 305 1187 282Z"/>
              <circle cx="1141" cy="310" r="6"/><circle cx="1402" cy="294" r="9"/><circle cx="1374" cy="407" r="5"/>
            </g>
            <g className="splash">
              <path d="M1070 536 C1098 511 1131 524 1151 548 C1170 570 1202 554 1222 576 C1244 600 1229 628 1200 621 C1171 615 1154 642 1127 626 C1102 611 1078 628 1058 606 C1038 583 1047 556 1070 536Z"/>
              <circle cx="1018" cy="566" r="6"/><circle cx="1248" cy="553" r="7"/><circle cx="1266" cy="620" r="4"/>
            </g>
            <g className="splash">
              <path d="M720 565 C745 543 775 553 792 573 C809 594 836 581 853 601 C870 620 859 646 834 640 C809 635 793 658 771 645 C748 632 728 645 711 627 C693 608 700 582 720 565Z"/>
              <circle cx="682" cy="580" r="5"/><circle cx="875" cy="569" r="7"/>
            </g>
          </svg>
        </div>
          <div className="vow-splash-blob"></div>
          <div className="vow-splash-blob"></div>
          <div className="vow-splash-blob"></div>
          <div className="vow-splash-blob"></div>
          <div className="vow-splash-blob"></div>
          <div className="vow-splash-blob"></div>
          <div className="vow-splash-blob"></div>
        </div>
                <div className="container-site relative z-[1] flex min-h-[82vh] items-end py-14 sm:py-20">
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


      <section className="container-site py-20 sm:py-28">
        <div className="flex flex-col gap-8 border-t border-vow-border pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="vow-label">Connect with VOW</p>
            <h2 className="mt-4 text-[clamp(2.6rem,5vw,4.5rem)] leading-[.9]">Join VOW or get in touch.</h2>
          </div>
          <Link to="/join-vow" className="vow-btn-primary">Join VOW</Link>
        </div>
      </section>
    </>
  );
}
