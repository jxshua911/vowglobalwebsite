import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" aria-label="VOW home" className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6l8 12 8-12" />
        </svg>
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${inverted ? "text-primary-foreground" : "text-foreground"}`}>
        VOW
      </span>
    </Link>
  );
}
