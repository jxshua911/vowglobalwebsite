import { useEffect, useState } from "react";

type Choice = "accepted" | "necessary";

const KEY = "vow-cookie-consent";

function setConsent(value: Choice) {
  localStorage.setItem(KEY, value);
  document.cookie = `vow_cookie_consent=${value}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

export function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [manageOpen, setManageOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem(KEY);
    if (value === "accepted" || value === "necessary") {
      setChoice(value);
      setAnalyticsEnabled(value === "accepted");
    }
  }, []);

  const save = (value: Choice) => {
    setConsent(value);
    setChoice(value);
    setAnalyticsEnabled(value === "accepted");
    setManageOpen(false);
  };

  const saveManaged = () => {
    save(analyticsEnabled ? "accepted" : "necessary");
  };

  if (choice && !manageOpen) return null;

  return (
    <>
      {!choice && (
        <aside className="vow-cookie-banner" aria-label="Cookie preferences">
          <div className="vow-cookie-copy">
            <p className="vow-label">Cookies</p>
            <h2>A small choice about cookies.</h2>
            <p>
              VOW uses essential cookies to keep the website working. With your permission,
              analytics cookies help us understand anonymous site usage and improve the experience.
            </p>
          </div>
          <div className="vow-cookie-actions">
            <button type="button" onClick={() => save("necessary")} className="vow-btn-ghost">
              Decline
            </button>
            <button type="button" onClick={() => save("accepted")} className="vow-btn-primary">
              Accept
            </button>
            <button type="button" onClick={() => setManageOpen(true)} className="vow-btn-ghost">
              Manage
            </button>
          </div>
        </aside>
      )}

      {manageOpen && (
        <div className="vow-cookie-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setManageOpen(false);
        }}>
          <section
            className="vow-cookie-manager"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-manager-title"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="vow-label">Cookie settings</p>
                <h2 id="cookie-manager-title" className="mt-2 text-2xl">Choose what VOW can use.</h2>
              </div>
              <button
                type="button"
                aria-label="Close cookie settings"
                onClick={() => setManageOpen(false)}
                className="grid size-9 shrink-0 place-items-center border border-vow-border text-lg"
              >
                ×
              </button>
            </div>

            <div className="mt-7 divide-y divide-vow-border border-y border-vow-border">
              <div className="flex items-center justify-between gap-6 py-5">
                <div>
                  <h3 className="font-semibold">Essential cookies</h3>
                  <p className="mt-1 text-sm leading-6 text-vow-muted">
                    Required for core site functions and your cookie preference.
                  </p>
                </div>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-vow-muted">
                  Always on
                </span>
              </div>

              <label className="flex cursor-pointer items-center justify-between gap-6 py-5">
                <span>
                  <span className="block font-semibold">Analytics cookies</span>
                  <span className="mt-1 block text-sm leading-6 text-vow-muted">
                    Optional, anonymous usage measurement to help improve VOW.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                  className="size-5 shrink-0 accent-black"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => save("necessary")} className="vow-btn-ghost">
                Decline
              </button>
              <button type="button" onClick={saveManaged} className="vow-btn-primary">
                Save preferences
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
