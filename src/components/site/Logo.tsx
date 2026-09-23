import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="VOW home"
      className="group inline-flex items-baseline gap-2"
    >
      <span
        className={`font-display text-[1.375rem] font-semibold leading-none tracking-[-0.05em] ${
          inverted ? "text-[oklch(0.98_0.004_85)]" : "text-foreground"
        }`}
      >
        VOW
      </span>
      <span
        aria-hidden
        className="mb-[0.15rem] block h-[5px] w-[5px] rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"
      />
    </Link>
  );
}
