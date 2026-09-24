import { pageHead } from "@/lib/seo";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useLocale } from "@/lib/i18n";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead({
      path: "/work",
      title: "Work — VOW product, brand and interface design",
      description:
        "Selected work behind VOW, the goal-planning and accountability app: product screens, brand system, interface design and visualisation.",
    }),
  component: Work,
});

const imageBase="https://raw.githubusercontent.com/jxshua911/Vow/capacitor-mobile/public/";
const projects=[
  {id:"vow",title:"VOW",type:"Product · Mobile app",image:imageBase+"Screenshot_2026-08-14_at_12.45.04.png",body:"The core VOW product: a structured goal-planning and accountability system built around planning, commitment and honest review.",alt:"VOW app interface screenshot"},
  {id:"brand",title:"VOW brand system",type:"Brand · Product design",image:imageBase+"Vow-Loading_Screen.png",body:"The visual language behind VOW — restrained typography, strong contrast and a wordmark designed to stay recognisable across product and web.",alt:"VOW loading screen and visual identity"},
  {id:"interface",title:"Digital product work",type:"Web · Interface design",image:imageBase+"Screenshot_2026-08-14_at_12.45.04.png",body:"Interfaces built to make complex products feel direct: clear hierarchy, purposeful motion and components that support the actual workflow.",alt:"VOW digital product interface"},
  {id:"3d",title:"3D visualisation",type:"Visualisation · Concept",image:imageBase+"Vow-Loading_Screen.png",body:"3D and visualisation work used to communicate product ideas, environments and concepts before they become physical or final.",alt:"VOW visualisation concept"}
];

function Work(){
 const sw=useLocale();
 return <>
  <header className="border-b border-vow-border">
   <div className="container-site py-20 sm:py-24">
    <p className="vow-label">{sw==="sw"?"Kazi iliyochaguliwa":"Selected work"}</p>
    <h1 className="mt-4 max-w-4xl text-5xl leading-none sm:text-7xl">{sw==="sw"?"Kazi inayogeuza mawazo kuwa vitu vinavyoweza kutumiwa.":"Work that turns ideas into things people can use."}</h1>
    <p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">{sw==="sw"?"Angalia kwa karibu bidhaa, miingiliano na kazi za kuona zilizo nyuma ya studio.":"A closer look at the products, interfaces and visual work behind the studio."}</p>
   </div>
  </header>
  <section className="container-site py-16 sm:py-20">
   <div className="grid gap-8 md:grid-cols-2">
    {projects.map((p,i)=><article key={p.title} className="group overflow-hidden border border-vow-border bg-vow-bg">
      <div className="vow-work-image aspect-[16/10] overflow-hidden bg-vow-surface">
       <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.parentElement?.classList.add("vow-image-failed")}} />
       <div className="vow-image-fallback" aria-hidden><span>VOW</span></div>
       <span className="vow-image-index">0{i+1}</span>
      </div>
      <div className="p-7">
       <p className="vow-label">{p.type}</p>
       <h2 className="mt-3 text-3xl">{p.title}</h2>
       <p className="mt-3 text-sm leading-7 text-vow-muted">{sw==="sw"?(i===0?"Bidhaa kuu ya VOW: mfumo wa kupanga malengo na uwajibikaji unaounganisha mipango, kujitolea na mapitio.":i===1?"Lugha ya kuona ya VOW — uchapaji uliotulia, utofauti thabiti na nembo inayotambulika kwenye bidhaa na wavuti.":i===2?"Miingiliano iliyoundwa kufanya bidhaa changamano ziwe rahisi kuelewa, zikiwa na mpangilio wazi na vipengele vinavyounga mkono mtiririko halisi.":"Kazi ya 3D na taswira inayotumika kueleza mawazo ya bidhaa, mazingira na dhana kabla ya kuwa za mwisho.") : p.body}</p>
       <Link to="/work" hash={p.id} className="mt-6 inline-flex text-sm font-semibold underline underline-offset-4">{sw==="sw"?"Angalia hadithi ya mradi":"View project story"} <span aria-hidden className="ml-2">→</span></Link>
      </div>
    </article>)}
   </div>
  </section>
  <section className="container-site py-16 sm:py-24"><div className="border-y border-vow-border divide-y divide-vow-border">{projects.map((p,i)=><article id={p.id} key={p.id} className="scroll-mt-28 grid gap-8 py-10 lg:grid-cols-[8rem_1fr_1fr] lg:items-start"><div className="font-mono text-xs text-vow-muted">0{i+1}</div><div><p className="vow-label">{p.type}</p><h2 className="mt-3 text-3xl sm:text-4xl">{p.title}</h2></div><p className="max-w-xl text-sm leading-7 text-vow-muted">{sw==="sw" ? (i===0?"Bidhaa kuu ya VOW inaunganisha malengo, hatua, vipindi na mapitio katika mfumo mmoja wa kufuatilia utekelezaji.":i===1?"Mfumo wa chapa unaweka VOW katika lugha rahisi, yenye utofauti na inayofanya kazi kwenye skrini ndogo na kubwa.":i===2?"Kazi ya interface inalenga kupunguza msuguano: taarifa muhimu iko wazi, vitendo vinaeleweka na kila sehemu ina sababu ya kuwepo.":"Taswira ya 3D hutumika kuwasilisha dhana kwa njia inayoonekana kabla ya wazo kufika kwenye bidhaa au mazingira ya mwisho.") : (i===0?"VOW turns a goal into milestones, scheduled sessions and reviews so progress is grounded in what actually happened.":i===1?"The brand system keeps VOW recognisable across product and web through restrained type, contrast and a deliberately simple visual language.":i===2?"The interface work focuses on reducing friction: clear hierarchy, understandable actions and components that earn their place in the workflow.":"3D visualisation gives product and spatial ideas a tangible form before they become final, making concepts easier to communicate and refine.")}</p></article>)}</div></section>
  <section className="bg-vow-surface"><div className="container-site py-16 sm:py-20 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="vow-label">{sw==="sw"?"Una mradi?":"Have a project?"}</p><h2 className="mt-3 text-4xl sm:text-5xl">{sw==="sw"?"Tujenge kwa usahihi.":"Let's build it properly."}</h2></div><Link to="/support" className="vow-btn-primary">{sw==="sw"?"Wasiliana nasi":"Get in touch"}</Link></div></section>
 </>;
}
