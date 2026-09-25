import { useState, type FormEvent } from "react";

const SUPABASE_URL = "https://vqsrdausvmfjayffxiuh.supabase.co";
const SUPABASE_KEY = "sb_publishable_M6qmsILtc2ORJ_3tSe5OQg_Fv6RaTib";
const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/vow-website-chat`;

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Quiet anti-spam honeypot. Real users never see or fill this field.
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
    <div>
      <form onSubmit={submit} className="space-y-4">
        <label className="flex items-start gap-3 text-sm leading-6 text-vow-muted">
          <input required type="checkbox" name="consent" className="mt-1 size-4 accent-current" />
          <span>I agree to receive VOW launch updates by email. I can unsubscribe at any time.</span>
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="waitlist-email">Email address</label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "loading"}
          placeholder="you@example.com"
          className="vow-field !mt-0 min-h-12 flex-1 border border-vow-border bg-vow-bg px-4 py-3"
        />
        <input
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
          name="website"
          className="absolute -left-[9999px] h-px w-px opacity-0"
        />
        <button type="submit" disabled={status === "loading"} className="vow-btn-primary min-h-12 px-6 disabled:cursor-wait disabled:opacity-50">
          {status === "loading" ? "Joining..." : "Get early access"}
          <span aria-hidden>→</span>
        </button>
        </div>
      </form>

      <p className="mt-4 text-xs leading-6 text-vow-muted">
        Join the VOW launch list. We’ll email you when early access opens.
      </p>

      <div aria-live="polite" className="mt-4 min-h-6 text-sm">
        {status === "success" && (
          <p className="font-medium">You’re on the list. We’ll see you at launch.</p>
        )}
        {status === "duplicate" && (
          <p className="font-medium">That email is already on the list. You’re all set.</p>
        )}
        {status === "error" && (
          <p className="text-vow-muted">We couldn’t add you right now. Please try again in a moment.</p>
        )}
      </div>
    </div>
  );
}
