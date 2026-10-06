import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/terms";
import { site } from "@/content/site";

export const Route = createFileRoute("/eula")({
  head: () => pageHead({
    path: "/eula",
    title: "End User License Agreement - VOW | EULA\"",
    description: "\"Read VOW's End User License Agreement (EULA). Understand the licensing terms for using our AI goal planning application.\"",
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
