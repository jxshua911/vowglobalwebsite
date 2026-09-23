import { site } from "./site";
import { p, ul, type LegalSection } from "./legal-types";

export const termsIntro = `These Terms of Use and End User Licence Agreement ("Terms") govern your use of the VOW application and related services provided by ${site.operator} ("VOW", "we", "us"). By creating an account or using VOW, you agree to these Terms.`;

export const termsSections: LegalSection[] = [
  {
    id: "licence",
    heading: "1. Licence to Use VOW",
    blocks: [
      p("Subject to these Terms, VOW grants you a limited, personal, non-exclusive, non-transferable and revocable licence to install and use the VOW app on a device you own or control, for your own personal, non-commercial purposes."),
      p("You may not copy, modify, distribute, sell, lease, reverse engineer or attempt to extract the source code of VOW, except where applicable law expressly permits."),
    ],
  },
  {
    id: "eligibility-and-accounts",
    heading: "2. Eligibility and Accounts",
    blocks: [
      p("You must meet the minimum age required by applicable law and by the platform you download VOW from. You are responsible for maintaining the security of your account credentials and for activity that occurs under your account."),
      p("Please provide accurate information and keep it up to date. VOW may suspend or close accounts that violate these Terms."),
    ],
  },
  {
    id: "acceptable-use",
    heading: "3. Acceptable Use",
    blocks: [
      p("You agree not to:"),
      ul([
        "Use VOW for any unlawful purpose or in breach of applicable laws.",
        "Attempt to gain unauthorised access to VOW, other accounts, or connected systems.",
        "Interfere with the operation or security of the service, including through automated abuse or excessive use of AI features.",
        "Upload content that is unlawful, harmful, infringing, or that you do not have the right to share.",
        "Misrepresent your identity or affiliation.",
      ]),
    ],
  },
  {
    id: "your-content",
    heading: "4. Your Content",
    blocks: [
      p("You retain ownership of the goals, plans, journal entries and other content you create in VOW (\"Your Content\"). You grant VOW a limited licence to host, process and display Your Content solely as needed to provide, secure and improve the service, including AI-assisted features you choose to use."),
      p("You are responsible for Your Content and for ensuring you have the rights to enter it into VOW."),
    ],
  },
  {
    id: "subscriptions-and-purchases",
    heading: "5. Subscriptions and Purchases",
    blocks: [
      p("Some VOW features may require a paid subscription (\"Premium\"). Subscriptions are purchased and billed through the applicable distribution platform, such as Google Play, and are subject to that platform's terms, pricing, renewal and refund rules."),
      p("Subscriptions may renew automatically unless cancelled through the platform's subscription settings before the end of the current period. VOW does not process payment-card details directly."),
    ],
  },
  {
    id: "ai-assisted-features",
    heading: "6. AI-Assisted Features",
    blocks: [
      p("VOW may generate plans, suggestions and summaries using AI. AI output can be inaccurate or incomplete. You are responsible for reviewing and deciding whether to act on any AI-generated content."),
      p("AI output is provided for planning and productivity support only and is not professional medical, financial, legal or other regulated advice."),
    ],
  },
  {
    id: "health-and-fitness",
    heading: "7. Health and Fitness Disclaimer",
    blocks: [
      p("VOW is not a medical or fitness professional service. Any exercise or training goals you track in VOW are your own responsibility. Consult a qualified professional before starting or changing an exercise programme."),
    ],
  },
  {
    id: "third-party-services",
    heading: "8. Third-Party Services",
    blocks: [
      p("VOW can optionally connect to third-party services such as Google Calendar and Strava. Your use of those services is governed by their own terms and privacy policies. VOW is not responsible for third-party services, their availability, or changes they make."),
    ],
  },
  {
    id: "intellectual-property",
    heading: "9. Intellectual Property",
    blocks: [
      p(`VOW, including its software, design, branding, text and graphics, is owned by ${site.operator} and protected by applicable intellectual property laws. Except for the licence granted above, no rights are granted to you.`),
    ],
  },
  {
    id: "termination",
    heading: "10. Termination",
    blocks: [
      p("You may stop using VOW at any time and may delete your account through the app where available. VOW may suspend or terminate access if you breach these Terms or where reasonably necessary to protect the service or other users. Sections that by their nature should survive termination will survive."),
    ],
  },
  {
    id: "disclaimers",
    heading: "11. Disclaimers",
    blocks: [
      p("VOW is provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, VOW disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose and non-infringement. VOW does not guarantee that the service will be uninterrupted, error-free or that you will achieve any particular goal or result."),
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "12. Limitation of Liability",
    blocks: [
      p("To the fullest extent permitted by applicable law, VOW and its operator will not be liable for any indirect, incidental, special, consequential or punitive damages, or for loss of data, profits or goodwill, arising out of or related to your use of VOW. Nothing in these Terms limits liability that cannot be limited under applicable law."),
    ],
  },
  {
    id: "changes-to-terms",
    heading: "13. Changes to These Terms",
    blocks: [
      p("VOW may update these Terms from time to time. The last-updated date will be revised when material changes are made. Continued use of VOW after changes take effect constitutes acceptance of the updated Terms."),
    ],
  },
  {
    id: "contact",
    heading: "14. Contact",
    blocks: [
      ul([
        `Support: ${site.supportEmail}`,
        `Privacy: ${site.privacyEmail}`,
        `VOW / ${site.operator}, ${site.address.join(", ")}`,
      ]),
    ],
  },
];
