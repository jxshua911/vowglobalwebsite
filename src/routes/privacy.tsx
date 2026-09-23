import { createFileRoute, redirect } from "@tanstack/react-router";

// Alias: /privacy permanently redirects to the canonical /privacy-policy URL.
export const Route = createFileRoute("/privacy")({
  beforeLoad: () => {
    throw redirect({ to: "/privacy-policy", statusCode: 301 });
  },
});
