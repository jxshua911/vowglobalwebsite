export const site = {
  name: "VOW",
  tagline: "Turn goals into plans, sessions and follow-through.",
  operator: "Joshua Nathan Kasanga",
  launchDate: "29 October 2026",
  privacyEmail: "vowglobalapp@gmail.com",
  supportEmail: "vowglobalapp@gmail.com",
  contactCc: "99joshuanathan@gmail.com",
  copyrightName: "VOW",
  policy: {
    effectiveDate: "29 October 2026",
    lastUpdated: "23 September 2026",
  },
  legalNotice:
    "This document is product documentation and should receive qualified legal review before public launch. It is not legal advice.",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/legal", label: "Legal" },
  { to: "/support", label: "Get in touch" },
] as const;
