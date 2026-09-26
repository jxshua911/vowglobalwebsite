import { pageHead } from "@/lib/seo";
import { Link, createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";

export const Route = createFileRoute("/legal")({
  head: () => pageHead({
    path: "/legal",
    title: "VOW - Legal",
    description: "VOW's Privacy Policy, Terms of Service, EULA and Copyright / DMCA information.",
  }),
  component: LegalIndex,
});

const documents = [
  { title: "Privacy Policy", description: "How VOW handles account, planning, integration, analytics and other personal information.", to: "/privacy-policy" },
  { title: "Terms of Service", description: "The rules and conditions governing use of VOW, subscriptions, content, AI-assisted features and connected services.", to: "/terms-and-services" },
  { title: "End User Licence Agreement", description: "The licence governing installation and personal use of the VOW application.", to: "/eula" },
  { title: "Copyright / DMCA", description: "Ownership, permitted use and the process for reporting suspected copyright infringement.", to: "/copyright" },
] as const;

function LegalIndex() {
  return <>
    <header className="border-b border-vow-border bg-vow-surface/40">
      <div className="container-site py-20 sm:py-24">
        <p className="vow-label">VOW / Legal</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-none sm:text-7xl">Legal documents.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">Official VOW documentation for privacy, use of the service, application licensing and copyright.</p>
      </div>
    </header>
    <main className="container-site py-14 sm:py-20">
      <div className="grid border-y border-vow-border md:grid-cols-2">
        {documents.map((document, index) => (
          <Link key={document.to} to={document.to} className="group border-b border-vow-border p-7 transition-colors hover:bg-vow-surface/50 md:p-10 md:[&:nth-child(odd)]:border-r">
            <span className="font-mono text-xs text-vow-muted">0{index + 1}</span>
            <h2 className="mt-12 text-3xl leading-none sm:text-4xl">{document.title}</h2>
            <p className="mt-5 max-w-md leading-7 text-vow-muted">{document.description}</p>
            <span className="mt-8 block text-xl transition-transform group-hover:translate-x-2">→</span>
          </Link>
        ))}
      </div>
      <div className="mt-12 border border-vow-border bg-vow-surface/35 p-6 sm:p-8">
        <p className="vow-label">Document status</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-vow-muted">Effective {site.policy.effectiveDate}. Last updated {site.policy.lastUpdated}. These documents are published on the VOW website so users can access the current version before and during use of the service.</p>
      </div>
    </main>
  </>;
}
