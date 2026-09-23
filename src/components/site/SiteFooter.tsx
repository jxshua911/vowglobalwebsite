import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="ink-section">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              {site.tagline} A goal-planning and accountability app by {site.operator}. Public launch
              planned for {site.launchDate}.
            </p>
          </div>

          <nav aria-label="Legal">
            <h2 className="eyebrow !text-ink-soft">Legal</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="text-ink-soft transition-colors hover:text-[oklch(0.98_0.004_85)]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-ink-soft transition-colors hover:text-[oklch(0.98_0.004_85)]">Terms / EULA</Link></li>
              <li><Link to="/copyright" className="text-ink-soft transition-colors hover:text-[oklch(0.98_0.004_85)]">Copyright / DMCA</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow !text-ink-soft">Contact &amp; account</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/support" className="text-ink-soft transition-colors hover:text-[oklch(0.98_0.004_85)]">Support &amp; contact</Link></li>
              <li><Link to="/delete-account" className="text-ink-soft transition-colors hover:text-[oklch(0.98_0.004_85)]">Delete your account</Link></li>
              <li><a href={`mailto:${site.supportEmail}`} className="break-all text-ink-soft transition-colors hover:text-[oklch(0.98_0.004_85)]">{site.supportEmail}</a></li>
              <li><a href={`mailto:${site.privacyEmail}`} className="break-all text-ink-soft transition-colors hover:text-[oklch(0.98_0.004_85)]">{site.privacyEmail}</a></li>
            </ul>
            <address className="mt-5 text-sm not-italic leading-relaxed text-ink-soft">
              {site.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.operator}. All rights reserved.</p>
          <p>This website is not the VOW mobile app.</p>
        </div>
      </div>
    </footer>
  );
}
