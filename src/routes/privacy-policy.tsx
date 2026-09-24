import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyIntro, privacySections } from "@/content/privacy";
import { site } from "@/content/site";

export const Route=createFileRoute("/privacy-policy")({
  head:()=>pageHead({path:"/privacy-policy",title:"VOW - Privacy Policy",description:"VOW Privacy Policy covering account information, goals, AI-assisted features, integrations, payments, security, deletion and user rights."}),
  component:PrivacyPolicy,
});

function PrivacyPolicy(){
  return <LegalPage eyebrow="VOW / Privacy Policy" title="Privacy, clearly stated." intro={privacyIntro} dates={[{label:"Effective date",value:site.policy.effectiveDate},{label:"Last updated",value:site.policy.lastUpdated}]} sections={privacySections}/>;
}
