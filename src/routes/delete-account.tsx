import { Link, createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";

const title = "Delete your VOW account and data — VOW";
const description =
  "How to request deletion of your VOW account and associated data, what is deleted, and what may be retained where the law requires it.";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/delete-account" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/delete-account" }],
  }),
  component: DeleteAccountPage,
});

const mailto =
  `mailto:${site.privacyEmail}` +
  "?subject=" +
  encodeURIComponent("VOW account deletion request") +
  "&body=" +
  encodeURIComponent(
    [
      "I would like my VOW account and associated data deleted.",
      "",
      "Account email address used in VOW:",
      "",
      "(Optional) Anything else we should know:",
      "",
    ].join("\n"),
  );

const deleted = [
  "Your VOW account and sign-in identity",
  "Your goals, plans, milestones and scheduled sessions",
  "Your session logs, reviews and journal entries",
  "Your reminder and notification preferences",
  "Connections you authorised to third-party services, such as a calendar or activity service",
];

const retained = [
  "Records we are required to keep by law, such as transaction or tax records relating to a purchase",
  "Backup copies, until they expire on their normal backup cycle",
  "Data that has been aggregated or anonymised so it can no longer identify you",
];

export default function _unused() {
  return null;
}

function DeleteAccountPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="eyebrow">Account deletion</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
            Delete your VOW account and data.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            You can ask us to delete your VOW account at any time. Where the in-app deletion option is
            available, you can also do it directly inside the app.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto} className="btn-primary">Request deletion by email</a>
            <Link to="/privacy-policy" className="btn-secondary">Read the Privacy Policy</Link>
          </div>
        </div>
      </header>

      <section aria-labelledby="how-heading" className="container-site py-16">
        <h2 id="how-heading" className="text-2xl sm:text-3xl">How to request deletion</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Email the request", `Send a deletion request to ${site.privacyEmail} from the email address linked to your VOW account, or tell us which address the account uses.`],
            ["02", "We verify the request", "We may ask one or two questions to confirm the request comes from the account holder before we act on it."],
            ["03", "We delete the account", "We action verified requests without undue delay and confirm by email once your account and data have been deleted."],
          ].map(([n, h, b]) => (
            <li key={n} className="border-t border-foreground/15 pt-5">
              <span className="font-mono text-xs text-primary">{n}</span>
              <h3 className="mt-3 text-lg">{h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="scope-heading" className="border-t border-border bg-surface">
        <div className="container-site grid gap-12 py-16 md:grid-cols-2">
          <div>
            <h2 id="scope-heading" className="text-2xl">What is deleted</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {deleted.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-primary" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">What may be kept, and for how long</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {retained.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-muted-foreground" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Deleting your VOW account does not cancel a subscription bought through an app store.
              Cancel that through the store you purchased from. See <Link to="/support" className="text-primary underline underline-offset-4">Support</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="rounded-xl border border-border bg-card p-7">
          <p className="eyebrow">Need help?</p>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Privacy and deletion requests: <a href={`mailto:${site.privacyEmail}`} className="text-primary underline underline-offset-4">{site.privacyEmail}</a>.
            General support: <a href={`mailto:${site.supportEmail}`} className="text-primary underline underline-offset-4">{site.supportEmail}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
