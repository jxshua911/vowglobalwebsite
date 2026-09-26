import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/terms";
import { site } from "@/content/site";

export const Route = createFileRoute("/eula")({
  head: () => pageHead({
    path: "/eula",
    title: "VOW - EULA",
    description: "VOW End User Licence Agreement.",
  }),
  component: EulaPage,
});

function EulaPage() {
  return <LegalPage
    eyebrow="VOW / End User Licence Agreement"
    title="End User Licence Agreement."
    intro={termsIntro}
    dates={[
      { label: "Effective date", value: site.policy.effectiveDate },
      { label: "Last updated", value: site.policy.lastUpdated },
    ]}
    sections={termsSections}
  />;
}
