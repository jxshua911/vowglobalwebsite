export const SITE_URL = import.meta.env['VITE_SITE_URL']?.replace(/\/$/, "") || "";
export const OG_IMAGE = import.meta.env['VITE_OG_IMAGE'] || "/og-image.png";

type PageSeo = { path: string; title: string; description: string; type?: string };

/** Per-page head metadata: title, description, canonical, Open Graph and X card. */
export function pageHead({ path, title, description, type = "website" }: PageSeo) {
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "/" : path}` : (path === "/" ? "/" : path);
  const ogImage = SITE_URL && OG_IMAGE.startsWith("/") ? `${SITE_URL}${OG_IMAGE}` : OG_IMAGE;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "VOW wordmark" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
