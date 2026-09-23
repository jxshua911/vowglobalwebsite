import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="dark-gradient text-primary-foreground">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              {site.tagline} Built by {site.operator}. Public launch planned for {site.launchDate}.
            </p>
          </div>

          <nav aria-label="Legal">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Legal</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/privacy-policy" className="hover:underline underline-offset-4">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline underline-offset-4">Terms / EULA</Link></li>
              <li><Link to="/copyright" className="hover:underline underline-offset-4">Copyright / DMCA</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/support" className="hover:underline underline-offset-4">Support &amp; Contact</Link></li>
              <li><a href={`mailto:${site.supportEmail}`} className="hover:underline underline-offset-4">{site.supportEmail}</a></li>
              <li><a href={`mailto:${site.privacyEmail}`} className="hover:underline underline-offset-4">{site.privacyEmail}</a></li>
            </ul>
            <address className="mt-4 text-sm not-italic text-ink-soft">
              {site.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.operator}. All rights reserved.</p>
          <p>VOW is a goal-planning and accountability app. This website is not the VOW mobile app.</p>
        </div>
      </div>
    </footer>
  );
}
