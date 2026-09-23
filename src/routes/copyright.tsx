import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { copyrightIntro, copyrightSections } from "@/content/copyright";
import { site } from "@/content/site";

const title = "Copyright & DMCA — VOW";
const description =
  "VOW copyright notice, permitted use of VOW materials, and the procedure for reporting suspected copyright infringement.";

export const Route = createFileRoute("/copyright")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/copyright" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/copyright" }],
  }),
  component: CopyrightPage,
});

function CopyrightPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Copyright & Infringement Reporting"
      intro={copyrightIntro}
      dates={[{ label: "Last updated", value: site.policy.lastUpdated }]}
      sections={copyrightSections}
    />
  );
}
