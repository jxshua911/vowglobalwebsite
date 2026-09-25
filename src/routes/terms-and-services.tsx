import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyIntro, privacySections } from "@/content/privacy";
import { termsIntro, termsSections } from "@/content/terms";
import { copyrightIntro, copyrightSections } from "@/content/copyright";
import { site } from "@/content/site";

export const Route = createFileRoute("/terms-and-services")({
  head: () => pageHead({
    path: "/terms-and-services",
    title: "VOW - Terms & Privacy",
    description: "VOW Terms of Use, Privacy Policy and Copyright / DMCA information.",
  }),
  component: TermsAndServicesPage,
});

const prefix = (label: string, sections: typeof privacySections) =>
  sections.map((section) => ({
    ...section,
    id: `${label}-${section.id}`,
    heading: `${label} — ${section.heading}`,
  }));

function TermsAndServicesPage() {
  return (
    <LegalPage
      eyebrow="VOW / Terms & Privacy"
      title="Terms, privacy & rights."
      intro={`${termsIntro} ${privacyIntro}`}
      dates={[
        { label: "Effective date", value: site.policy.effectiveDate },
        { label: "Last updated", value: site.policy.lastUpdated },
      ]}
      sections={[
        ...prefix("Terms", termsSections),
        ...prefix("Privacy", privacySections),
        ...prefix("Copyright", copyrightSections),
      ]}
    />
  );
}
