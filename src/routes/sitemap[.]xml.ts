import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

const paths = ["/", "/about-vow", "/connect", "/legal", "/founder", "/terms-and-services", "/privacy-policy", "/eula", "/copyright"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = SITE_URL || new URL(request.url).origin;
        const body = `<?xml version="1.0" encoding="UTF-8"?>\\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n${paths
          .map((path) => `  <url><loc>${origin}${path}</loc></url>`)
          .join("\\n")}\\n</urlset>\\n`;
        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
