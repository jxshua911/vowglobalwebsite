import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/terms";
import { site } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({
    path: "/terms",
    title: "VOW - Terms / EULA",
    description: "VOW Terms of Use and End User Licence Agreement.",
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="VOW / Terms & EULA"
      title="Terms for using VOW."
      intro={termsIntro}
      dates={[
        { label: "Effective date", value: site.policy.effectiveDate },
        { label: "Last updated", value: site.policy.lastUpdated },
      ]}
      sections={termsSections}
    />
  );
}
