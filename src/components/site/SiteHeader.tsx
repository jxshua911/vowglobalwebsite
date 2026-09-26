import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.documentElement.lang = "en"; }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-vow-border/80 bg-vow-bg/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-vow-ink focus:px-4 focus:py-2 focus:text-sm focus:text-vow-bg">Skip to content</a>
      <div className="container-site flex h-[4.25rem] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-5 lg:flex">
          <nav aria-label="Primary" className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} activeOptions={{ exact: true }} className="text-sm font-medium text-vow-ink hover:opacity-60">
                {link.label}
              </Link>
            ))}
          </nav>
          <a href="/connect#waitlist" className="vow-btn-primary !px-4 !py-2 text-xs">Get early access</a>
        </div>
        <button type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)} className="grid size-10 place-items-center border border-vow-border lg:hidden">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-vow-border bg-vow-bg lg:hidden">
          <div className="container-site flex flex-col py-2">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="border-b border-vow-border/70 py-3.5 text-base font-medium">
                {link.label}
              </Link>
            ))}
            <a href="/connect#waitlist" onClick={() => setOpen(false)} className="vow-btn-primary my-3 w-full">Get early access</a>
          </div>
        </nav>
      )}
    </header>
  );
}
