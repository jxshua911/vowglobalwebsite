import { Link, createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";

const title = "Support & Contact — VOW";
const description =
  "Contact VOW support, reach the privacy contact, and find answers about account deletion, subscriptions and connected services.";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/support" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: SupportPage,
});

const faqs = [
  {
    q: "How do I delete my VOW account?",
    a: "Where available, use the account deletion option inside the VOW app. You can also email support and we will help you with the request. See the Privacy Policy for what deletion covers.",
  },
  {
    q: "How do I manage or cancel a subscription?",
    a: "Subscriptions are billed through the distribution platform you purchased from, such as Google Play. Manage or cancel them through that platform's subscription settings.",
  },
  {
    q: "How do I disconnect Google Calendar or Strava?",
    a: "You can disconnect integrations from within the VOW app, or revoke VOW's access from your Google or Strava account settings.",
  },
  {
    q: "How do I turn off reminders?",
    a: "Notification preferences can be changed in the VOW app, and notifications can also be disabled in your device settings.",
  },
];

function SupportPage() {
  return (
    <>
      <header className="hero-gradient border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Support</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">We're here to help.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Questions about VOW, your account or your data? Reach us by email and we'll respond as soon as
            reasonably possible.
          </p>
        </div>
      </header>

      <section aria-labelledby="contact-heading" className="container-site py-14 sm:py-16">
        <h2 id="contact-heading" className="sr-only">Contact details</h2>
        <div className="grid gap-5 md:grid-cols-3">
          <ContactCard
            label="Support"
            heading="Help with the app"
            body="Account questions, bugs, feature feedback and general enquiries."
            href={`mailto:${site.supportEmail}?subject=VOW%20support`}
            display={site.supportEmail}
          />
          <ContactCard
            label="Privacy"
            heading="Data & privacy requests"
            body="Access, correction, deletion requests and questions about the Privacy Policy."
            href={`mailto:${site.privacyEmail}?subject=VOW%20privacy%20request`}
            display={site.privacyEmail}
          />
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Postal</p>
            <h3 className="mt-3 text-lg font-semibold">Operator address</h3>
            <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">
              VOW / {site.operator}
              <br />
              {site.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-border bg-surface">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Common questions</p>
            <h2 id="faq-heading" className="mt-3 text-3xl font-bold">Quick answers</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              For full details, read the <Link to="/privacy-policy" className="text-primary underline underline-offset-4">Privacy Policy</Link> and{" "}
              <Link to="/terms" className="text-primary underline underline-offset-4">Terms</Link>.
            </p>
          </div>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ label, heading, body, href, display }: { label: string; heading: string; body: string; href: string; display: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
      <h3 className="mt-3 text-lg font-semibold">{heading}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <a href={href} className="mt-5 inline-flex items-center gap-2 break-all text-sm font-semibold text-primary underline-offset-4 hover:underline">
        {display} <span aria-hidden>→</span>
      </a>
    </div>
  );
}
