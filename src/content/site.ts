// Central, editable brand and contact facts for the VOW website.
export const site = {
  name: "VOW",
  tagline: "Plan with structure. Commit with intent. Track real progress.",
  operator: "Joshua Nathan Kasanga",
  launchDate: "29 October 2026",
  privacyEmail: "vowglobalapp@gmail.com",
  supportEmail: "99joshuanathan@gmail.com",
  address: ["29 Upendo Street", "United Republic of Tanzania"],
  policy: {
    effectiveDate: "29 October 2026",
    lastUpdated: "23 September 2026",
  },
  legalNotice:
    "This document is intended as product documentation and should receive qualified legal review before public launch. It is not legal advice.",
} as const;

export const navLinks = [
  { to: "/privacy-policy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/copyright", label: "Copyright" },
  { to: "/support", label: "Support" },
] as const;
