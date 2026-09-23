/**
 * CSS-built interface compositions illustrating the VOW concept.
 * These are illustrative product concepts, not screenshots of the app.
 */

export function GoalPanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <p className="eyebrow">Goal</p>
      <p className="mt-3 font-display text-xl leading-tight">Write and publish a short book</p>
      <div className="mt-5 flex items-end gap-1.5" aria-hidden>
        {[30, 44, 36, 58, 52, 70, 64, 82].map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}%` }}
            className={`w-full rounded-sm ${i > 5 ? "bg-primary" : "bg-primary/25"}`}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between font-mono text-[0.625rem] uppercase tracking-widest text-muted-foreground">
        <span>Week 1</span>
        <span>Week 8</span>
      </div>
    </div>
  );
}

export function PlanPanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <p className="eyebrow">Plan</p>
      <ul className="mt-4 space-y-3">
        {[
          ["Outline the argument", "Milestone 1", true],
          ["Draft chapters 1–3", "Milestone 2", true],
          ["Edit and restructure", "Milestone 3", false],
          ["Final proof", "Milestone 4", false],
        ].map(([label, meta, done]) => (
          <li key={label as string} className="flex items-center gap-3">
            <span
              aria-hidden
              className={`grid size-4 shrink-0 place-items-center rounded-full border ${
                done ? "border-primary bg-primary text-primary-foreground" : "border-border"
              }`}
            >
              {done && (
                <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </span>
            <span className="flex-1 text-sm font-medium">{label}</span>
            <span className="font-mono text-[0.625rem] uppercase tracking-widest text-muted-foreground">{meta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CommitPanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <p className="eyebrow">Commitment</p>
      <div className="mt-4 space-y-2.5">
        {[
          ["Writing block · 90 min", "Today, 07:00"],
          ["Language practice · 30 min", "Today, 18:30"],
          ["Weekly review", "Sunday, 19:00"],
        ].map(([label, time]) => (
          <div key={label} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-3.5 py-2.5">
            <span className="text-sm font-medium">{label}</span>
            <span className="shrink-0 font-mono text-[0.625rem] uppercase tracking-widest text-muted-foreground">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReviewPanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <p className="eyebrow">Review</p>
      <div className="mt-4 grid grid-cols-7 gap-1.5" aria-hidden>
        {[3, 1, 2, 3, 0, 2, 3, 2, 3, 3, 1, 3, 2, 0, 3, 3, 2, 3, 1, 2, 3].map((v, i) => (
          <span
            key={i}
            className="aspect-square rounded-[3px]"
            style={{
              background:
                v === 0
                  ? "var(--color-muted)"
                  : `color-mix(in oklab, var(--color-primary) ${v * 30}%, var(--color-muted))`,
            }}
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        “Kept both writing blocks. Evening sessions work better than mornings — move two of them.”
      </p>
    </div>
  );
}
