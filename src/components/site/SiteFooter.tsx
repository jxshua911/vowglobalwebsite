import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-vow-ink text-vow-bg">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-7 text-vow-muted">{site.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <p className="vow-label !text-vow-muted">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/how-it-works" className="text-vow-muted hover:text-vow-bg">How it works</Link></li>
              <li><Link to="/work" className="text-vow-muted hover:text-vow-bg">Work</Link></li>
              <li><Link to="/services" className="text-vow-muted hover:text-vow-bg">Services</Link></li>
              <li><Link to="/support" className="text-vow-muted hover:text-vow-bg">Get in touch</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p className="vow-label !text-vow-muted">Legal</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="text-vow-muted hover:text-vow-bg">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-vow-muted hover:text-vow-bg">Terms / EULA</Link></li>
              <li><Link to="/copyright" className="text-vow-muted hover:text-vow-bg">Copyright / DMCA</Link></li>
              <li><Link to="/delete-account" className="text-vow-muted hover:text-vow-bg">Delete account</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-14 border-t border-vow-muted/20 pt-6 text-xs text-vow-muted">
          © {new Date().getFullYear()} {site.operator}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
