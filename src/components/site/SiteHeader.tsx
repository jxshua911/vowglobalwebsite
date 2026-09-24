import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { setLocale, useLocale } from "@/lib/i18n";
import { navLinks } from "@/content/site";

const copy = {
  en: { home:"Home", how:"How it works", work:"Work", services:"Services", founders:"Founders", legal:"Legal", contact:"Get in touch", assistant:"Assistant" },
  sw: { home:"Nyumbani", how:"Jinsi inavyofanya kazi", work:"Kazi", services:"Huduma", founders:"Waanzilishi", legal:"Sheria", contact:"Wasiliana", assistant:"Msaidizi" },
} as const;

function getInitialLocale() {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("vow-locale");
  if (saved === "en" || saved === "sw") return saved;
  const lang = navigator.language.toLowerCase();
  return lang.startsWith("sw") || Intl.DateTimeFormat().resolvedOptions().timeZone.includes("Africa/") && lang.startsWith("en") ? (lang.startsWith("sw") ? "sw" : "en") : "en";
}

export function SiteHeader() {
  const [open,setOpen]=useState(false);
  const [locale,setLocalLocale]=useState<"en"|"sw">(getInitialLocale);
  useEffect(()=>{ document.documentElement.lang=locale; },[locale]);
  const changeLocale=(value:"en"|"sw")=>{ setLocalLocale(value); setLocale(value); };
  const labels=copy[locale];
  const links=navLinks.map((l,i)=>({ ...l, label:[labels.home,labels.how,labels.work,labels.services,labels.founders,labels.legal,labels.contact,labels.assistant][i] }));
  return <>
    <header className="sticky top-0 z-50 border-b border-vow-border/80 bg-vow-bg/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-vow-ink focus:px-4 focus:py-2 focus:text-sm focus:text-vow-bg">Skip to content</a>
      <div className="container-site flex h-[4.25rem] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-5 lg:flex">
          <nav aria-label="Primary" className="flex items-center gap-5">

            {links.map(l=><Link key={l.to} to={l.to} activeOptions={{exact:true}} className="text-sm font-medium text-vow-ink hover:opacity-60">{l.label}</Link>)}
          </nav>
          <a href="/#waitlist" className="vow-btn-primary !px-4 !py-2 text-xs">Early access</a>
        </div>
        <button type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(v=>!v)} className="grid size-10 place-items-center border border-vow-border lg:hidden">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">{open?<path d="M6 6l12 12M18 6L6 18"/>:<path d="M4 8h16M4 16h16"/>}</svg>
        </button>
      </div>
      {open&&<nav id="mobile-nav" aria-label="Mobile" className="border-t border-vow-border bg-vow-bg lg:hidden"><div className="container-site flex flex-col py-2">
        {links.map(l=><Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="border-b border-vow-border/70 py-3.5 text-base font-medium">{l.label}</Link>)}
        <a href="/#waitlist" onClick={()=>setOpen(false)} className="vow-btn-primary my-3 w-full">Get early access</a>
      </div></nav>}
    </header>
    <div className="vow-language-bar" aria-label="Website language">
      <div className="container-site flex items-center justify-end gap-2 py-2">
        <span className="vow-label">{locale==="en"?"Language":"Lugha"}</span>
        <button type="button" onClick={()=>changeLocale("en")} aria-pressed={locale==="en"} className={locale==="en"?"vow-language-active":"vow-language-button"}>EN</button>
        <span className="text-vow-muted">/</span>
        <button type="button" onClick={()=>changeLocale("sw")} aria-pressed={locale==="sw"} className={locale==="sw"?"vow-language-active":"vow-language-button"}>SW</button>
      </div>
    </div>
  </>;

}
