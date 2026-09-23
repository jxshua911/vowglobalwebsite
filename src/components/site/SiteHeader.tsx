import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeOptions={{ exact: true, includeHash: false }}
              activeProps={{ className: "text-sm font-medium text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <a href={`mailto:${site.supportEmail}?subject=VOW`} className="btn-primary !px-4 !py-2.5 !text-sm">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full border border-border text-foreground md:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <div className="container-site flex flex-col py-2">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={"hash" in l ? l.hash : undefined}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-3.5 text-base font-medium text-foreground last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
            <a href={`mailto:${site.supportEmail}?subject=VOW`} className="btn-primary my-4">
              Get in touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
