export const site = {
  name: "VOW",
  tagline: "Turn goals into plans, sessions and follow-through.",
  operator: "Joshua Nathan Kasanga",
  launchStatus: "Coming Soon",
  privacyEmail: "vowglobalapp@gmail.com",
  supportEmail: "vowglobalapp@gmail.com",
  copyrightName: "VOW",
  policy: { effectiveDate: "25 September 2026", lastUpdated: "25 September 2026" },
  legalNotice: "This document is product documentation and should receive qualified legal review before public launch. It is not legal advice.",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/legal", label: "Legal" },
  { to: "/support", label: "Support" },
  { to: "/founder", label: "Founder" },
] as const;
