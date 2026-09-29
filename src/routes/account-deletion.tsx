import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/account-deletion")({
  head: () => pageHead({
    path: "/account-deletion",
    title: "VOW - Account deletion",
    description: "Request deletion of your VOW account online or from the VOW app.",
  }),
  component: AccountDeletionPage,
});

function AccountDeletionPage() {
  const [session, setSession] = useState<Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"]>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "requesting" | "requested" | "cancelled" | "error">("idle");
  const [deleteAt, setDeleteAt] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    let subscription: { unsubscribe: () => void } | null = null;

    try {
      supabase.auth.getSession()
        .then(({ data }) => {
          if (!active) return;
          setSession(data.session);
          if (data.session?.user?.email) setEmail(data.session.user.email);
        })
        .catch((sessionError) => {
          if (active) setError(sessionError instanceof Error ? sessionError.message : "Unable to load your account session.");
        });

      const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => {
        if (!active) return;
        setSession(next);
        if (next?.user?.email) setEmail(next.user.email);
      });
      subscription = listener.subscription;
    } catch (sessionError) {
      if (active) setError(sessionError instanceof Error ? sessionError.message : "Unable to load your account session.");
    }

    return () => {
      active = false;
      subscription?.unsubscribe();
    };
  }, []);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthLoading(true);
    setError("");
    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (signInError) setError(signInError.message);
    else setSession(data.session);
    setAuthLoading(false);
  }

  async function requestDeletion() {
    setStatus("requesting");
    setError("");
    const { data, error: requestError } = await supabase.rpc("vow_request_account_deletion");
    if (requestError) {
      setStatus("error");
      setError(requestError.message);
      return;
    }
    const nextDeleteAt = Array.isArray(data) ? data[0]?.delete_at : null;
    setDeleteAt(nextDeleteAt || null);
    setStatus("requested");
  }

  async function cancelDeletion() {
    setError("");
    const { data, error: cancelError } = await supabase.rpc("vow_cancel_account_deletion");
    if (cancelError) {
      setStatus("error");
      setError(cancelError.message);
      return;
    }
    if (data) setStatus("cancelled");
  }

  return (
    <>
      <header className="border-b border-vow-border bg-vow-surface/40">
        <div className="container-site py-20 sm:py-24">
          <p className="vow-label">Account deletion</p>
          <h1 className="mt-4 max-w-5xl text-5xl leading-none sm:text-7xl">Your account.<br />Your decision.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-7 text-vow-muted">
            Request deletion of your VOW account online or from the VOW app. Deletion is permanent after the 14-day grace period.
          </p>
        </div>
      </header>

      <main className="container-site py-14 sm:py-20">
        <div className="grid gap-px border border-vow-border bg-vow-border lg:grid-cols-2">
          <section className="bg-vow-bg p-7 sm:p-10 lg:p-12">
            <p className="vow-label">Online deletion</p>
            <h2 className="mt-5 text-4xl leading-none sm:text-5xl">Delete your account online.</h2>
            <p className="mt-6 max-w-xl leading-7 text-vow-muted">
              Sign in to verify that you control the account, then request deletion. You can cancel the request during the 14-day grace period.
            </p>

            {!session ? (
              <form onSubmit={signIn} className="mt-10 space-y-6">
                <label className="block">
                  <span className="vow-label">Email</span>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="vow-field" autoComplete="email" />
                </label>
                <label className="block">
                  <span className="vow-label">Password</span>
                  <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="vow-field" autoComplete="current-password" />
                </label>
                {error && <p role="alert" className="text-sm leading-6 text-vow-muted">{error}</p>}
                <button disabled={authLoading} className="vow-btn-primary disabled:opacity-50">
                  {authLoading ? "Signing in..." : "Sign in to continue"} <span aria-hidden>→</span>
                </button>
              </form>
            ) : (
              <div className="mt-10">
                <p className="text-sm text-vow-muted">Signed in as <span className="font-medium text-vow-ink">{session.user.email}</span></p>
                {status === "requested" ? (
                  <div className="mt-6 border border-vow-border bg-vow-surface p-6">
                    <p className="font-medium">Deletion requested.</p>
                    <p className="mt-3 text-sm leading-6 text-vow-muted">
                      Your account is scheduled for permanent deletion{deleteAt ? " on " + new Date(deleteAt).toLocaleDateString() : ""}. You can cancel before then.
                    </p>
                    <button onClick={cancelDeletion} className="vow-btn-ghost mt-6">Cancel deletion</button>
                  </div>
                ) : status === "cancelled" ? (
                  <div className="mt-6 border border-vow-border bg-vow-surface p-6">
                    <p className="font-medium">Deletion cancelled.</p>
                    <p className="mt-3 text-sm leading-6 text-vow-muted">Your VOW account remains active.</p>
                  </div>
                ) : (
                  <div className="mt-6 border border-vow-border p-6">
                    <p className="text-sm leading-7 text-vow-muted">This starts a 14-day grace period. After it ends, your account and associated VOW data will be permanently deleted, subject to information VOW is legally required to retain.</p>
                    {error && <p role="alert" className="mt-4 text-sm text-vow-muted">{error}</p>}
                    <button onClick={requestDeletion} disabled={status === "requesting"} className="vow-btn-primary mt-6 disabled:opacity-50">
                      {status === "requesting" ? "Requesting..." : "Request account deletion"} <span aria-hidden>→</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>

          <section className="bg-vow-bg p-7 sm:p-10 lg:p-12">
            <p className="vow-label">From the app</p>
            <h2 className="mt-5 text-4xl leading-none sm:text-5xl">You can also delete from VOW.</h2>
            <ol className="mt-8 space-y-7">
              {[
                ["01", "Open VOW", "Sign in to your account."],
                ["02", "Open Profile", "Go to your account settings."],
                ["03", "Choose Delete account", "Review the deletion information."],
                ["04", "Confirm", "Confirm your deletion request."],
              ].map(([number, title, description]) => (
                <li key={number} className="border-t border-vow-border pt-5">
                  <span className="font-mono text-xs text-vow-muted">{number}</span>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-vow-muted">{description}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="mt-14 border-y border-vow-border py-12 sm:mt-20 sm:py-16">
          <p className="vow-label">The 14-day grace period</p>
          <div className="mt-5 grid gap-8 md:grid-cols-3">
            <div><h3 className="text-xl">Day 0</h3><p className="mt-2 text-sm leading-6 text-vow-muted">You request deletion. VOW records the request and the date your account is scheduled for permanent deletion.</p></div>
            <div><h3 className="text-xl">Days 1–13</h3><p className="mt-2 text-sm leading-6 text-vow-muted">You can contact VOW Support to resolve an issue or cancel the deletion request.</p></div>
            <div><h3 className="text-xl">Day 14</h3><p className="mt-2 text-sm leading-6 text-vow-muted">The account is permanently deleted if the request has not been cancelled.</p></div>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/support" className="vow-btn-ghost">Contact Support</Link>
          <Link to="/privacy-policy" className="vow-btn-ghost">Read Privacy Policy</Link>
        </div>
      </main>
    </>
  );
}
