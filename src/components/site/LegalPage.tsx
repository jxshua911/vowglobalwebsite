import type { LegalSection } from "@/content/legal-types";
import { site } from "@/content/site";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  dates?: { label: string; value: string }[];
  sections: LegalSection[];
};

function renderText(text: string) {
  // Auto-link email addresses inside legal copy.
  const parts = text.split(/([\w.+-]+@[\w-]+\.[\w.]+)/g);
  return parts.map((part, i) =>
    /^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part) ? (
      <a key={i} href={`mailto:${part}`}>{part}</a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function LegalPage({ eyebrow, title, intro, dates, sections }: Props) {
  return (
    <article>
      <header className="hero-gradient border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
          {dates && (
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {dates.map((d) => (
                <div key={d.label} className="flex gap-2">
                  <dt className="text-muted-foreground">{d.label}:</dt>
                  <dd className="font-medium text-foreground">{d.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
        </div>
      </header>

      <div className="container-site grid gap-12 py-12 lg:grid-cols-[15rem_1fr] lg:py-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contents</p>
            <ol className="mt-4 space-y-2 border-l border-border text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l border-transparent py-0.5 pl-4 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl">
          <div className="legal-prose">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`}>
                <h2 id={`${s.id}-heading`}>{s.heading}</h2>
                {s.blocks.map((b, i) =>
                  b.type === "p" ? (
                    <p key={i}>{renderText(b.text)}</p>
                  ) : (
                    <ul key={i}>
                      {b.items.map((item, j) => (
                        <li key={j}>{renderText(item)}</li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}
          </div>

          <aside className="mt-14 rounded-xl border border-border bg-surface px-5 py-4 text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Notice.</strong> {site.legalNotice}
          </aside>
        </div>
      </div>
    </article>
  );
}
