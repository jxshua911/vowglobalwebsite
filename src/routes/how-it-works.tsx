import { Link, createFileRoute } from "@tanstack/react-router";

export const Route=createFileRoute("/how-it-works")({head:()=>({meta:[{title:"VOW - How it works"},{name:"description",content:"How VOW turns goals into plans, sessions and review."}],links:[{rel:"canonical",href:"/how-it-works"}]}),component:HowItWorks});

const steps=[
["01","Define the outcome","Start with what you actually want to accomplish. Keep the outcome visible while VOW turns it into practical work."],
["02","Build the plan","Break the outcome into milestones and concrete sessions. AI can help create a starting structure, but you stay in control."],
["03","Schedule the commitment","Give the work a place in your week. Optional calendar connections and reminders make the commitment visible."],
["04","Do the work","Complete sessions and log what happened. Progress is based on action, not simply checking a planning box."],
["05","Review and adapt","Use reviews and journal entries to see what worked, what did not, and what should change next."]
] as const;

function HowItWorks(){return <>
<header className="border-b border-vow-border"><div className="container-site py-20 sm:py-24"><p className="vow-label">How it works</p><h1 className="mt-4 max-w-4xl text-5xl leading-none sm:text-7xl">A goal becomes a system of action.</h1><p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">Decide what matters. Plan the work. Commit to it. Do it. Learn from the result.</p></div></header>
<section className="container-site py-16 sm:py-20"><div className="divide-y divide-vow-border border-y border-vow-border">{steps.map(([n,t,b])=><article key={n} className="grid gap-6 py-9 md:grid-cols-[5rem_18rem_1fr]"><span className="font-mono text-xs text-vow-muted">{n}</span><h2 className="font-sans text-xl font-semibold tracking-tight">{t}</h2><p className="max-w-2xl text-sm leading-7 text-vow-muted">{b}</p></article>)}</div></section>
<section className="bg-vow-bg text-vow-ink"><div className="container-site grid gap-10 py-16 lg:grid-cols-2 lg:items-end"><div><p className="vow-label !text-vow-muted">The point</p><h2 className="mt-3 text-4xl sm:text-5xl">The plan should make action easier.</h2></div><p className="max-w-xl text-base leading-7 text-vow-muted">VOW is not a generic checklist generator. The product connects the goal, the sessions you commit to and the evidence you build through review.</p></div></section>
<section className="container-site py-16"><Link to="/support" className="vow-btn-primary">Get in touch →</Link></section>
</>;}
