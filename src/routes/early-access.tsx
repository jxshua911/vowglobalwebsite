import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Waitlist } from "@/components/site/Waitlist";

export const Route = createFileRoute("/early-access")({
  head: () => pageHead({
    path: "/early-access",
    title: "VOW - Early Access",
    description: "Get early access to VOW. Join the launch list and be among the first to use VOW.",
  }),
  component: EarlyAccessPage,
});

function EarlyAccessPage() {
  return (
    <>
      <header className="border-b border-vow-border bg-vow-surface/40">
        <div className="container-site py-20 sm:py-24">
          <p className="vow-label">VOW / Early Access</p>
          <h1 className="mt-4 max-w-5xl text-5xl leading-none sm:text-7xl">Get early access.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">
            VOW is coming soon. Join the launch list to hear when it goes live and be among the first to get access.
          </p>
        </div>
      </header>

      <Waitlist />

      <section className="border-t border-vow-border bg-vow-bg">
        <div className="container-site py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="vow-label !text-vow-ink">Make your VOW.</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[.88] text-vow-ink">Be there from day one.</h2>
            </div>
            <p className="max-w-xl leading-[1.8] text-vow-ink/70 lg:col-span-5 lg:pb-1">
              VOW is built around structured planning, scheduled sessions and honest progress reviews. The launch list is the first step.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
