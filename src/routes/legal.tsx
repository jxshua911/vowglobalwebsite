import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyIntro, privacySections } from "@/content/privacy";
import { termsIntro, termsSections } from "@/content/terms";
import { copyrightIntro, copyrightSections } from "@/content/copyright";
import { site } from "@/content/site";

export const Route=createFileRoute("/legal")({
 head:()=>({meta:[
  {title:"VOW - Legal"},
  {name:"description",content:"VOW privacy policy, terms and EULA, copyright information and account deletion."},
  {name:"robots",content:"index,follow"},
  {property:"og:title",content:"VOW - Legal"},{property:"og:description",content:"VOW privacy, terms, copyright and account deletion information."}
 ],links:[{rel:"canonical",href:"/legal"}]}),
 component:Legal
});
const prefix=(p:string,sections:typeof privacySections)=>sections.map(s=>({...s,id:`${p}-${s.id}`,heading:`${p==="privacy"?"Privacy":p==="terms"?"Terms":"Copyright"} — ${s.heading}`}));
const sections=[...prefix("privacy",privacySections),...prefix("terms",termsSections),...prefix("copyright",copyrightSections)];
function Legal(){return <LegalPage eyebrow="VOW / Legal" title="Privacy, terms & rights." intro={`${privacyIntro} ${termsIntro}`} dates={[{label:"Effective date",value:site.policy.effectiveDate},{label:"Last updated",value:site.policy.lastUpdated}]} sections={sections}/>;}
