import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Keep Lovable's existing TanStack Start configuration intact while targeting
// Netlify for the self-hosted production deployment.
export default defineConfig({
  nitro: { preset: "netlify" },
});
