import type { LegalSection } from "@/content/legal-types";
import { site } from "@/content/site";

type Props = { eyebrow: string; title: string; intro: string; dates?: { label: string; value: string }[]; sections: LegalSection[] };

function renderText(text: string) {
  const parts = text.split(/([\w.+-]+@[\w-]+\.[\w.]+)/g);
  return parts.map((part, i) =>
    /^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)
      ? <a key={i} href={`mailto:${part}`}>{part}</a>
      : <span key={i}>{part}</span>,
  );
}

export function LegalPage({ eyebrow, title, intro, dates, sections }: Props) {
  return (
    <article className="pb-8">
      <header className="relative overflow-hidden border-b border-vow-border bg-vow-surface/45">
        <div className="container-site py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="vow-label">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-5xl leading-[.98] sm:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-vow-muted sm:text-lg">{intro}</p>
            {dates && (
              <dl className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                {dates.map((date) => (
                  <div key={date.label} className="border border-vow-border bg-vow-bg/80 px-4 py-3">
                    <dt className="vow-label">{date.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{date.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-vow-border pt-5 text-sm text-vow-muted">
            <span className="inline-flex items-center gap-2 border border-vow-border bg-vow-bg px-3 py-2">
              <span aria-hidden="true">↘</span> {sections.length} sections
            </span>
            <span>Jump to the section you need, or read at your own pace.</span>
          </div>
        </div>
      </header>

      <div className="container-site grid gap-8 py-10 sm:py-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 lg:py-16">
        <nav aria-label="On this page" className="min-w-0">
          <div className="lg:sticky lg:top-24">
            <p className="vow-label">On this page</p>
            <ol className="mt-3 flex gap-2 overflow-x-auto pb-3 lg:block lg:space-y-1 lg:overflow-visible lg:border-l lg:border-vow-border lg:pb-0">
              {sections.map((section, index) => (
                <li key={section.id} className="shrink-0 lg:shrink">
                  <a
                    href={`#${section.id}`}
                    className="group flex min-h-9 items-center gap-2 border border-vow-border bg-vow-bg px-3 py-2 text-xs leading-5 transition-colors hover:border-vow-ink hover:bg-vow-surface/60 lg:-ml-px lg:border-0 lg:bg-transparent lg:py-1.5 lg:pl-4 lg:text-sm"
                  >
                    <span className="font-mono text-[10px] text-vow-muted lg:w-5">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-vow-muted group-hover:text-vow-ink">{section.heading.replace(/^\d+\.\s*/, "")}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <main className="min-w-0 max-w-4xl">
          <div className="mb-7 flex items-start gap-3 border border-vow-border bg-vow-surface/40 p-4 sm:p-5">
            <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center border border-vow-border bg-vow-bg text-lg">i</span>
            <p className="text-sm leading-6 text-vow-muted">
              This document is organised into short, numbered sections. Use the contents above to go directly to a topic; the full wording remains available below.
            </p>
          </div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border border-vow-border bg-vow-bg p-5 sm:p-7 lg:p-8"
              >
                <div className="mb-5 flex items-start gap-4 border-b border-vow-border pb-5">
                  <span className="grid size-10 shrink-0 place-items-center bg-vow-surface font-mono text-xs text-vow-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="pt-1 text-xl leading-snug sm:text-2xl">{section.heading.replace(/^\d+\.\s*/, "")}</h2>
                </div>
                <div className="legal-prose">
                  {section.blocks.map((block, blockIndex) =>
                    block.type === "p" ? (
                      <p key={blockIndex}>{renderText(block.text)}</p>
                    ) : (
                      <ul key={blockIndex}>
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{renderText(item)}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-8 flex items-start gap-3 border border-vow-border bg-vow-surface/60 p-5 sm:p-6">
            <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center border border-vow-border bg-vow-bg">✳</span>
            <div>
              <p className="text-sm font-semibold">Need clarification?</p>
              <p className="mt-1 text-sm leading-6 text-vow-muted">
                If something in this document is unclear, contact VOW support at{" "}
                <a className="font-medium text-vow-ink underline underline-offset-4" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
              </p>
            </div>
          </aside>
          <aside className="mt-4 border-l-2 border-vow-border px-4 py-3 text-xs leading-6 text-vow-muted">
            <strong className="text-vow-ink">Notice.</strong> {site.legalNotice}
          </aside>
        </main>
      </div>
    </article>
  );
}
