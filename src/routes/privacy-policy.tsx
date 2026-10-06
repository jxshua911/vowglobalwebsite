import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyIntro, privacySections } from "@/content/privacy";
import { site } from "@/content/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead({
    path: "/privacy-policy",
    title: "Privacy Policy - VOW | How We Protect Your Data\"",
    description: "\"Learn how VOW protects your personal data. Read our complete privacy policy covering data collection, usage, storage, and your rights.\"",
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return <LegalPage
    eyebrow="VOW / Privacy Policy"
    title="Privacy, clearly stated."
    intro={privacyIntro}
    dates={[
      { label: "Effective date", value: site.policy.effectiveDate },
      { label: "Last updated", value: site.policy.lastUpdated },
    ]}
    sections={privacySections}
  />;
}
