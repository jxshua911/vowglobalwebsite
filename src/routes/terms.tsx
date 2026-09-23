import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/terms";
import { site } from "@/content/site";

const title = "Terms of Use / EULA — VOW";
const description =
  "The product terms and end user licence agreement for the VOW goal-planning app, covering licence, accounts, subscriptions, AI features and liability.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Product terms — not legal advice"
      title="Terms of Use & End User Licence Agreement"
      intro={termsIntro}
      dates={[
        { label: "Effective date", value: site.policy.effectiveDate },
        { label: "Last updated", value: site.policy.lastUpdated },
      ]}
      sections={termsSections}
    />
  );
}
