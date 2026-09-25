import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

const SUPABASE_URL = "https://vqsrdausvmfjayffxiuh.supabase.co";
const SUPABASE_KEY = "sb_publishable_M6qmsILtc2ORJ_3tSe5OQg_Fv6RaTib";
const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/vow-website-chat`;

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (String(formData.get("website") || "").trim()) return;

    setStatus("loading");

    try {
      const response = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "waitlist",
          email: email.trim().toLowerCase(),
          source: "website-home",
          website: String(formData.get("website") || ""),
        }),
      });

      if (response.ok) {
        setEmail("");
        setStatus("success");
        return;
      }

      if (response.status === 409) {
        setStatus("duplicate");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="border-y border-vow-border bg-vow-surface/35 scroll-mt-24">
      <div className="container-site py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="vow-label">Launching {site.launchDate}</p>
          <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.5rem)] leading-[.92]">
            Join the VOW waitlist.
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] leading-[1.8] text-vow-muted">
            Be the first to know when VOW launches. Get early access, special offers and direct support.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <label className="sr-only" htmlFor="vow-waitlist-email">Email address</label>
            <input
              id="vow-waitlist-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={status === "loading"}
              required
              autoComplete="email"
              className="vow-field mt-0 flex-1 sm:max-w-xs"
            />
            <input
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
              name="website"
              className="absolute -left-[9999px] h-px w-px opacity-0"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="vow-btn-primary whitespace-nowrap disabled:opacity-50"
            >
              {status === "loading" ? "Joining..." : "Join waitlist"}
            </button>
          </form>

          <div aria-live="polite" className="mt-4 min-h-6 text-sm">
            {status === "success" && (
              <p className="text-green-700">You’re on the list. We’ll see you at launch.</p>
            )}
            {status === "duplicate" && (
              <p className="text-vow-muted">That email is already on the list. You’re all set.</p>
            )}
            {status === "error" && (
              <p className="text-red-700">Something went wrong. Please try again in a moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
