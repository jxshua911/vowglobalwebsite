import { Link, createFileRoute } from "@tanstack/react-router";

export const Route=createFileRoute("/services")({head:()=>({meta:[{title:"Services — VOW"},{name:"description",content:"Digital product design, web development and 3D visualisation."}],links:[{rel:"canonical",href:"/services"}]}),component:Services});

const services=[
["01","Digital product design","Product thinking, UX structure and polished interfaces for apps and digital products."],
["02","Web development","Responsive websites and web applications built around clear content, strong performance and maintainable code."],
["03","3D visualisation","3D scenes, product concepts and visualisations that make an idea easier to understand before it is built."],
["04","Product systems","Design systems, reusable components and interaction patterns that keep a product coherent as it grows."]
] as const;

function Services(){return <>
<header className="border-b border-vow-border"><div className="container-site py-20 sm:py-24"><p className="vow-label">Services</p><h1 className="mt-4 max-w-4xl text-5xl leading-none sm:text-7xl">Design, development and visualisation — without the fluff.</h1><p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">From the first structure to the finished interface, the work stays focused on making the idea useful and understandable.</p></div></header>
<section className="container-site py-16 sm:py-20"><div className="divide-y divide-vow-border border-y border-vow-border">{services.map(([n,t,b])=><article key={n} className="grid gap-5 py-9 md:grid-cols-[5rem_20rem_1fr]"><span className="font-mono text-xs text-vow-muted">{n}</span><h2 className="text-3xl">{t}</h2><p className="max-w-2xl text-sm leading-7 text-vow-muted">{b}</p></article>)}</div></section>
<section className="bg-vow-ink text-vow-bg"><div className="container-site py-16 sm:py-20"><p className="vow-label !text-vow-muted">Need something specific?</p><h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Tell us what you're trying to build.</h2><Link to="/support" className="vow-btn-ghost mt-8">Get in touch →</Link></div></section>
</>;}
