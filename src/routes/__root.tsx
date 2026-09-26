import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CookieConsent } from "@/components/site/CookieConsent";
import { Analytics } from "@/components/site/Analytics";
import { FloatingAssistant } from "@/components/site/FloatingAssistant";

function NotFoundComponent(){return <div className="flex min-h-[60vh] items-center justify-center px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold">404</h1><h2 className="mt-4 text-xl font-semibold">Page not found</h2><p className="mt-2 text-sm text-vow-muted">The page you're looking for doesn't exist or has been moved.</p><Link to="/" className="vow-btn-primary mt-6">Go home</Link></div></div>;}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){const router=useRouter();useEffect(()=>{console.error("[VOW website] Route error:",error);},[error]);return <div className="flex min-h-[60vh] items-center justify-center px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold">This page didn't load</h1><p className="mt-2 text-sm text-vow-muted">Something went wrong. Try refreshing or head back home.</p><div className="mt-6 flex justify-center gap-2"><button onClick={()=>{router.invalidate();reset();}} className="vow-btn-primary">Try again</button><a href="/" className="vow-btn-ghost">Go home</a></div></div></div>;}

export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
 head:()=>({meta:[
  {charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"VOW"},
  {name:"description",content:"VOW turns goals into structured plans, sessions and visible progress."},{name:"robots",content:"index,follow"},{name:"author",content:"VOW"},
  {property:"og:site_name",content:"VOW"},{property:"og:title",content:"VOW"},{property:"og:description",content:"Make your VOW. Keep your VOW."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}
 ],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}]}),
 shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent,
});
function RootShell({children}:{children:ReactNode}){return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html>;}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><div className="flex min-h-screen flex-col"><SiteHeader/><main id="main" className="flex-1"><Outlet/></main><SiteFooter/><CookieConsent/><Analytics/><FloatingAssistant/></div></QueryClientProvider>;}
