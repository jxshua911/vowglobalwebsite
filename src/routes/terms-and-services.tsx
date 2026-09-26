import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/terms";
import { site } from "@/content/site";

export const Route = createFileRoute("/terms-and-services")({
  head: () => pageHead({
    path: "/terms-and-services",
    title: "VOW - Terms of Service",
    description: "VOW Terms of Service and conditions of use.",
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return <LegalPage
    eyebrow="VOW / Terms of Service"
    title="Terms of Service."
    intro={termsIntro}
    dates={[
      { label: "Effective date", value: site.policy.effectiveDate },
      { label: "Last updated", value: site.policy.lastUpdated },
    ]}
    sections={termsSections}
  />;
}
