import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { copyrightIntro, copyrightSections } from "@/content/copyright";
import { site } from "@/content/site";

export const Route = createFileRoute("/copyright")({
  head: () => pageHead({
    path: "/copyright",
    title: "VOW - Copyright / DMCA",
    description: "VOW Copyright and DMCA policy.",
  }),
  component: CopyrightPage,
});

function CopyrightPage() {
  return (
    <LegalPage
      eyebrow="VOW / Copyright & DMCA"
      title="Copyright, clearly stated."
      intro={copyrightIntro}
      dates={[
        { label: "Effective date", value: site.policy.effectiveDate },
        { label: "Last updated", value: site.policy.lastUpdated },
      ]}
      sections={copyrightSections}
    />
  );
}
