import { Link, createFileRoute } from "@tanstack/react-router";

export const Route=createFileRoute("/work")({head:()=>({meta:[{title:"Work — VOW"},{name:"description",content:"Selected work and product projects from the VOW studio."}],links:[{rel:"canonical",href:"/work"}]}),component:Work});

const projects=[
{title:"VOW",type:"Product · Mobile app",image:"/Screenshot_2026-08-14_at_12.45.04.png",body:"The core VOW product: a structured goal-planning and accountability system built around planning, commitment and honest review."},
{title:"VOW brand system",type:"Brand · Product design",image:"/Vow-Loading_Screen.png",body:"The visual language behind VOW — restrained typography, strong contrast and a wordmark designed to stay recognisable across product and web."},
{title:"Digital product work",type:"Web · Interface design",image:"/Screenshot_2026-08-14_at_12.45.04.png",body:"Interfaces built to make complex products feel direct: clear hierarchy, purposeful motion and components that support the actual workflow."},
{title:"3D visualisation",type:"Visualisation · Concept",image:"/Vow-Loading_Screen.png",body:"3D and visualisation work used to communicate product ideas, environments and concepts before they become physical or final."}
];

function Work(){return <>
<header className="border-b border-vow-border"><div className="container-site py-20 sm:py-24"><p className="vow-label">Selected work</p><h1 className="mt-4 max-w-4xl text-5xl leading-none sm:text-7xl">Work that turns ideas into things people can use.</h1><p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">A closer look at the products, interfaces and visual work behind the studio.</p></div></header>
<section className="container-site py-16 sm:py-20"><div className="grid gap-8 md:grid-cols-2">{projects.map((p,i)=><article key={p.title} className="group overflow-hidden border border-vow-border bg-vow-bg"><div className="aspect-[16/10] overflow-hidden bg-vow-surface"><img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><div className="p-7"><p className="vow-label">{p.type}</p><h2 className="mt-3 text-3xl">{p.title}</h2><p className="mt-3 text-sm leading-7 text-vow-muted">{p.body}</p><span className="mt-6 inline-flex text-sm font-medium">View project story →</span></div></article>)}</div></section>
<section className="bg-vow-surface"><div className="container-site py-16 sm:py-20 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="vow-label">Have a project?</p><h2 className="mt-3 text-4xl sm:text-5xl">Let's build it properly.</h2></div><Link to="/support" className="vow-btn-primary">Get in touch</Link></div></section>
</>;}
