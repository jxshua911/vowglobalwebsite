import { Link, createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";

const title = "VOW — Structured goal planning and accountability";
const description =
  "VOW helps you turn goals into structured plans, commit to sessions, and track real progress. Public launch planned for 29 October 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const pillars = [
  {
    title: "Plan with structure",
    body: "Break a goal into milestones and scheduled sessions so the next step is always clear.",
    icon: <path d="M4 5h16M4 12h10M4 19h7" />,
  },
  {
    title: "Commit with intent",
    body: "Set reminders, connect your calendar, and hold yourself to the sessions you planned.",
    icon: <path d="M20 6L9 17l-5-5" />,
  },
  {
    title: "Review real progress",
    body: "Log sessions, write reviews, and see how your effort compounds over weeks and months.",
    icon: <path d="M4 19l5-6 4 3 7-9" />,
  },
];

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy", body: "How VOW collects, uses and protects information." },
  { to: "/terms", label: "Terms / EULA", body: "The product terms that govern your use of VOW." },
  { to: "/copyright", label: "Copyright / DMCA", body: "Ownership of VOW materials and how to report infringement." },
  { to: "/support", label: "Support", body: "Get help or reach the privacy contact." },
] as const;

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden border-b border-border">
        <div aria-hidden className="grid-fade absolute inset-0" />
        <div className="container-site relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-accent-foreground shadow-soft">
              <span aria-hidden className="size-1.5 rounded-full bg-primary" />
              Public launch planned for {site.launchDate}
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Make a vow.
              <br />
              <span className="text-gradient">Keep it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              VOW is a goal-planning and accountability app. Turn ambitions into structured plans,
              commit to scheduled sessions, and track progress you can actually see.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/support" className="btn-primary">Get in touch</Link>
              <Link to="/privacy-policy" className="btn-secondary">Read the Privacy Policy</Link>
            </div>
          </div>

          {/* Illustrative product card (not a screenshot) */}
          <div aria-hidden className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Goal</span>
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">Week 6 of 12</span>
              </div>
              <p className="mt-3 font-display text-2xl font-bold">Run a half marathon</p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[52%] rounded-full bg-primary" />
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  ["Tempo run · 8 km", "Today, 06:30", true],
                  ["Long run · 14 km", "Sat, 07:00", false],
                  ["Weekly review", "Sun, 19:00", false],
                ].map(([label, time, done]) => (
                  <li key={label as string} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-3">
                    <span className={`grid size-5 place-items-center rounded-full border ${done ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
                      {done && (
                        <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      )}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{label}</p>
                      <p className="text-xs text-muted-foreground">{time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section aria-labelledby="how-heading" className="container-site py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How VOW works</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold sm:text-4xl">Three habits, one system.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{p.icon}</svg>
                </span>
                <span className="font-display text-sm font-semibold text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features band */}
      <section aria-labelledby="features-heading" className="dark-gradient text-primary-foreground">
        <div className="container-site grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-glow">Built for follow-through</p>
            <h2 id="features-heading" className="mt-3 text-3xl font-bold sm:text-4xl">Everything around the goal, not just the goal.</h2>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              VOW is designed around the moments where plans usually fall apart: scheduling the work,
              showing up, and honestly reviewing what happened.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ["AI-assisted planning", "Get a suggested plan from your goal, then shape it yourself. Outputs are for planning support, not professional advice."],
              ["Sessions & reminders", "Schedule sessions and receive local reminders you control from the app and device settings."],
              ["Calendar & Strava", "Optionally connect Google Calendar or Strava. You authorise it, and you can disconnect at any time."],
              ["Reviews & journal", "Reflect after each session and each week so progress stays visible and honest."],
            ].map(([t, b]) => (
              <li key={t} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Legal & trust */}
      <section aria-labelledby="legal-heading" className="container-site py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Transparency</p>
          <h2 id="legal-heading" className="mt-3 text-3xl font-bold sm:text-4xl">Clear policies, in plain language.</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            VOW is operated by {site.operator}. The documents below describe how the app handles your
            information and what you can expect from us.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {legalLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ring"
            >
              <div>
                <h3 className="text-lg font-semibold">{l.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{l.body}</p>
              </div>
              <span aria-hidden className="mt-1 text-primary transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
