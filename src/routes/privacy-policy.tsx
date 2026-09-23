import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyIntro, privacySections } from "@/content/privacy";
import { site } from "@/content/site";

const title = "Privacy Policy — VOW";
const description =
  "How VOW collects, uses, shares and protects information, including AI-assisted features, connected services, payments, retention and your rights.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="VOW Privacy Policy"
      intro={privacyIntro}
      dates={[
        { label: "Effective date", value: site.policy.effectiveDate },
        { label: "Last updated", value: site.policy.lastUpdated },
      ]}
      sections={privacySections}
    />
  );
}
