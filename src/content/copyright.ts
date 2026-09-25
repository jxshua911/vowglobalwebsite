import { site } from "./site";
import { p, ul, type LegalSection } from "./legal-types";

export const copyrightIntro = `The VOW application, website, branding, text, graphics and software are owned by ${site.operator}. This page explains how VOW's materials may be used and how to report suspected copyright infringement.`;

export const copyrightSections: LegalSection[] = [
  {
    id: "ownership",
    heading: "1. Ownership",
    blocks: [
      p(`© VOW 2026. All rights reserved. The VOW name, logo, app interface, website content and underlying software are protected by copyright and other intellectual property laws.`),
      p("Content you create within VOW remains yours, as described in the Terms."),
    ],
  },
  {
    id: "permitted-use",
    heading: "2. Permitted Use",
    blocks: [
      p("You may view and use VOW's website and app for personal, non-commercial purposes. You may not reproduce, redistribute, modify or create derivative works from VOW's materials without prior written permission, except as permitted by applicable law."),
    ],
  },
  {
    id: "reporting-infringement",
    heading: "3. Reporting Copyright Infringement",
    blocks: [
      p("VOW respects the intellectual property rights of others. If you believe that content available through VOW infringes your copyright, please send a notice to the contact below that includes:"),
      ul([
        "Identification of the copyrighted work you claim has been infringed.",
        "Identification of the material you claim is infringing, with enough detail for us to locate it (for example, a description or screenshot).",
        "Your name, postal address and email address.",
        "A statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent or the law.",
        "A statement, made under penalty of perjury where applicable, that the information in your notice is accurate and that you are the copyright owner or authorised to act on the owner's behalf.",
        "Your physical or electronic signature.",
      ]),
      p(`Send notices to: ${site.privacyEmail} with the subject line "Copyright Notice".`),
    ],
  },
  {
    id: "counter-notice",
    heading: "4. Counter-Notice",
    blocks: [
      p("If material you posted was removed following a notice and you believe the removal was a mistake or misidentification, you may send a counter-notice to the same address including identification of the removed material, your contact details, a statement of good-faith belief that the material was removed in error, and your signature. Where applicable law requires, VOW may forward counter-notices to the original complainant."),
    ],
  },
  {
    id: "repeat-infringers",
    heading: "5. Repeat Infringers",
    blocks: [
      p("VOW may, in appropriate circumstances, suspend or terminate the accounts of users who repeatedly infringe the intellectual property rights of others."),
    ],
  },
  {
    id: "trademarks",
    heading: "6. Trademarks",
    blocks: [
      p("VOW and the VOW logo are trademarks or trade names used by the operator. Third-party names referenced on this site, such as Google, Google Play and Strava, belong to their respective owners and are referenced for identification only."),
    ],
  },
  {
    id: "contact",
    heading: "7. Contact",
    blocks: [
      ul([
        `Copyright and privacy: ${site.privacyEmail}`,
      ]),
    ],
  },
];
