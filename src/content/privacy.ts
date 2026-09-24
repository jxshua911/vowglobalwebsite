import { site } from "./site";
import { p, ul, type LegalSection } from "./legal-types";

export const privacyIntro = `VOW is operated by ${site.operator} in connection with the VOW application ("VOW", "we", "us"). This Privacy Policy explains what information VOW collects, how it is used, and the choices available to you.`;

export const privacySections: LegalSection[] = [
  {
    id: "information-we-collect",
    heading: "1. Information We Collect",
    blocks: [
      p("VOW collects the following categories of information, depending on how you use the app:"),
      ul([
        "Account information, such as your email address, authentication identifiers, display name and any profile information you supply.",
        "Goal and planning information, including goals, plans, milestones, sessions, reviews, journal and progress content, and related inputs you enter.",
        "Preferences and settings, including notification and app preferences.",
        "Usage and technical information reasonably needed to operate, secure and improve the service, such as device and platform information, app events and diagnostics where enabled.",
        "Information you voluntarily provide to connected features, such as calendar or fitness integrations.",
      ]),
    ],
  },
  {
    id: "ai-assisted-features",
    heading: "2. AI-Assisted Features",
    blocks: [
      p("VOW may process goal, planning, progress and related user inputs through VOW's AI infrastructure and relevant third-party AI service providers in order to provide AI-assisted functionality, such as generating suggested plans."),
      p("AI outputs are generated for planning and productivity support only. They are not professional medical, financial, legal or other regulated advice, and should not be relied on as such."),
    ],
  },
  {
    id: "fitness-and-exercise-information",
    heading: "3. Fitness and Exercise Information",
    blocks: [
      p("You may voluntarily enter exercise, training or fitness-related goals and progress. VOW is not a medical service and should not be used as a substitute for qualified professional care."),
      p("VOW does not needlessly request sensitive health information. Please only enter fitness-related information you are comfortable storing in the app."),
    ],
  },
  {
    id: "connected-services",
    heading: "4. Connected Services",
    blocks: [
      p("Where enabled by you, VOW can connect to services such as Google Calendar and Strava. These integrations are user-authorised and can be disconnected through the app or through the relevant service's own account controls."),
      p("VOW only accesses the information needed for the connected feature you have chosen to use."),
    ],
  },
  {
    id: "notifications",
    heading: "5. Notifications",
    blocks: [
      p("VOW may use notification permissions, session dates and times, and your notification preferences to deliver local reminders. Notifications can be controlled through the app and through your device settings."),
    ],
  },
  {
    id: "payments",
    heading: "6. Payments",
    blocks: [
      p("Subscriptions and purchases are processed through the applicable payment or distribution provider, including Google Play where applicable. VOW does not intentionally collect or store raw payment-card numbers."),
      p("VOW may receive subscription identifiers, entitlement and status information, and transaction-related metadata needed to provide Premium access and support."),
    ],
  },
  {
    id: "how-we-use-information",
    heading: "7. How We Use Information",
    blocks: [
      p("VOW uses information to:"),
      ul([
        "Authenticate users and secure accounts.",
        "Provide and personalise VOW.",
        "Generate AI-assisted plans and suggestions.",
        "Manage goals, milestones and sessions.",
        "Provide calendar and fitness integrations you have enabled.",
        "Send reminders you have requested.",
        "Provide Premium features.",
        "Prevent abuse and protect security.",
        "Diagnose issues and provide support.",
        "Comply with legal obligations.",
        "Maintain and improve the service.",
      ]),
    ],
  },
  {
    id: "cookies-and-analytics",
    heading: "8. Cookies and Analytics",
    blocks: [
      p("VOW uses essential cookies and similar storage mechanisms to keep the website working and to remember your cookie preference. These are necessary for core site functionality."),
      p("VOW may also use optional analytics cookies when you choose to accept them. Analytics is used to understand aggregate site usage and improve the website. Optional analytics is not loaded before consent is provided."),
      p("You can decline optional analytics or change your preference through the cookie controls presented on the website."),
    ],
  },
  {
    id: "sharing-and-service-providers",
    heading: "9. Sharing and Service Providers",
    blocks: [
      p("VOW may share or process data with infrastructure and service providers needed to operate the product, such as database and authentication infrastructure, AI providers, user-authorised integrations, and payment or distribution providers. These providers process information on VOW's behalf or as required to deliver the feature you have chosen to use."),
      p("VOW does not sell personal information."),
    ],
  },
  {
    id: "security",
    heading: "10. Security",
    blocks: [
      p("VOW uses reasonable technical and organisational safeguards, including encrypted connections, access controls, row-level data access controls where applicable, server-side entitlement checks, and controls intended to limit abuse and excessive AI usage."),
      p("No service can guarantee absolute security."),
    ],
  },
  {
    id: "retention-and-deletion",
    heading: "11. Retention and Deletion",
    blocks: [
      p("Information is retained for as long as reasonably necessary to provide the service, maintain security, resolve disputes, meet legal obligations and enforce agreements. When information is no longer required, it may be deleted or anonymised, subject to legitimate retention needs."),
    ],
  },
  {
    id: "account-deletion",
    heading: "12. Account Deletion",
    blocks: [
      p("You can request account deletion through the VOW app where the feature is available, or by contacting us using the details in the Contact section below."),
      p("Deletion is intended to remove your VOW account and associated user-owned app data, subject to limited retention required for security, fraud prevention, legal compliance or other legitimate purposes."),
    ],
  },
  {
    id: "user-choices-and-rights",
    heading: "13. User Choices and Rights",
    blocks: [
      p("Depending on applicable law, you may have rights to access, correct, delete or request a copy of your personal information. You can also withdraw optional integration permissions, disconnect connected services, and control notification preferences at any time."),
      p(`To exercise these rights, contact ${site.privacyEmail}.`),
    ],
  },
  {
    id: "international-processing",
    heading: "14. International Processing",
    blocks: [
      p("VOW and its service providers may process information in countries other than your country of residence. Appropriate safeguards will be used where required by applicable law."),
    ],
  },
  {
    id: "children-and-young-users",
    heading: "15. Children and Young Users",
    blocks: [
      p("VOW is not specifically designed for children. VOW does not intentionally bypass applicable age restrictions or parental-consent requirements. Where the service is used by a young person, applicable platform and legal requirements remain relevant."),
    ],
  },
  {
    id: "third-party-services",
    heading: "16. Third-Party Services",
    blocks: [
      p("Third-party services such as Google, Strava, Google Play and AI or infrastructure providers have their own terms and privacy policies. VOW does not control those services, and you should review their policies for information about how they handle your data."),
    ],
  },
  {
    id: "changes",
    heading: "17. Changes to This Policy",
    blocks: [
      p("This policy may be updated as VOW changes. The last-updated date at the top of this page will be revised when material changes are made."),
    ],
  },
  {
    id: "contact",
    heading: "18. Contact",
    blocks: [
      ul([
        `Privacy: ${site.privacyEmail}`,
        `Support: ${site.supportEmail}`,
      ]),
    ],
  },
];
