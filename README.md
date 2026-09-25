# VOW Public Site

Build a polished production-ready public website for VOW, a goal-planning and accountability app by Joshua Nathan Kasanga.

PRIMARY PURPOSE:
This site will serve as VOW's official public web presence and, critically, host the stable Privacy Policy URL that will be submitted to Google Play. It must be suitable for a future custom domain. Do NOT use Notion or any external document embed.

BRAND / PRODUCT:
- Product name: VOW
- Positioning: structured goal planning, accountability, and progress tracking.
- Founder: Joshua Nathan Kasanga
- Planned public launch: 29 October 2026
- Contact/privacy email: vowglobalapp@gmail.com
- Support email: 99joshuanathan@gmail.com

PAGES:
1. Home — concise, premium, modern VOW introduction with clear links to Privacy, Terms/EULA, Copyright/DMCA and Support.
2. Privacy Policy — full, readable privacy policy suitable for Google Play. Effective date: 29 October 2026; last updated: 25 September 2026. Cover account information, goals/plans/milestones/sessions/reviews/journal content, preferences/settings, usage/technical data, AI-assisted features, voluntarily provided fitness/exercise information, Google Calendar connection, Strava connection where enabled, local notifications, Google Play/subscription information, service providers, security, retention/deletion, account deletion, user choices/rights, international processing, children/young users, third-party services, changes, and contact. Do not claim data practices that are not necessary; phrase provider details accurately and conservatively.
3. Terms / EULA — product terms appropriate for an app, clearly labelled as product terms and not legal advice.
4. Copyright / DMCA — VOW copyright and infringement reporting procedure.
5. Support / Contact — support and privacy contact details.

DESIGN:
- Premium technology/product aesthetic, not generic AI SaaS.
- Strong typography, generous whitespace, subtle blue/indigo accent system, restrained gradients, responsive mobile-first layout.
- VOW should feel like a real consumer app brand.
- Accessible contrast, keyboard navigation, semantic HTML, fast loading.
- Sticky/simple navigation and polished footer.
- No fake testimonials, fake user counts, fake reviews, fake app-store badges, or invented company claims.
- Include a visible "Privacy Policy" link in the footer on every page.
- Add SEO title/description and Open Graph metadata.
- Add a robots.txt and sitemap if appropriate.
- Client-side routing must work on direct refresh.
- Add a public route exactly at /privacy-policy.
- Also support /privacy as an alias if easy.
- Avoid collecting form submissions for now; mailto links are fine.
- This is a public legal/product website, not the VOW mobile app itself.

PRIVACY POLICY CONTENT:
Use this as the source of truth, with careful wording:
VOW Privacy Policy
Effective date: 29 October 2026
Last updated: 23 September 2026

VOW is operated by Joshua Nathan Kasanga in connection with the VOW application.

1. Information We Collect
- Account information such as email address, authentication identifiers, display name and profile information supplied by the user.
- Goal and planning information including goals, plans, milestones, sessions, reviews, journal/progress content and related inputs.
- Preferences and settings including notification and app preferences.
- Usage and technical information reasonably needed to operate, secure and improve the service, such as device/platform information, app events and diagnostics where enabled.
- Information a user voluntarily provides to connected features such as calendar or fitness integrations.

2. AI-Assisted Features
VOW may process goal, planning, progress and related user inputs through VOW's AI infrastructure and relevant third-party AI service providers to provide AI-assisted functionality. AI outputs are generated for planning/productivity support and are not professional medical, financial, legal or other regulated advice.

3. Fitness and Exercise Information
Users may voluntarily enter exercise, training or fitness-related goals and progress. VOW is not a medical service and should not be used as a substitute for qualified professional care. VOW does not needlessly request sensitive health information.

4. Connected Services
Where enabled by the user, VOW can connect to services such as Google Calendar and Strava. These integrations are user-authorised and can be disconnected through the app or relevant service controls. VOW only accesses information needed for the connected feature.

5. Notifications
VOW may use notification permissions, session dates/times and notification preferences to deliver local reminders. Notifications can be controlled through the app and device settings.

6. Payments
Subscriptions and purchases are processed through the applicable payment/distribution provider, including Google Play where applicable. VOW does not intentionally collect or store raw payment-card numbers. VOW may receive subscription identifiers, entitlement/status information and transaction-related metadata needed to provide Premium access and support.

7. How We Use Information
To authenticate users; provide and personalise VOW; generate AI-assisted plans; manage goals and sessions; provide calendar/fitness integrations; send requested reminders; provide Premium features; prevent abuse and protect security; diagnose issues; provide support; comply with legal obligations; and maintain/improve the service.

8. Sharing and Service Providers
VOW may share/process data with infrastructure and service providers needed to operate the product, such as database/authentication infrastructure, AI providers, user-authorised integrations and payment/distribution providers. VOW does not sell personal information.

9. Security
VOW uses reasonable technical and organisational safeguards, including encrypted connections, access controls, row-level data access controls where applicable, server-side entitlement checks and controls intended to limit abuse and excessive AI usage. No service can guarantee absolute security.

10. Retention and Deletion
Information is retained for as long as reasonably necessary to provide the service, maintain security, resolve disputes, meet legal obligations and enforce agreements. When information is no longer required, it may be deleted or anonymised subject to legitimate retention needs.

11. Account Deletion
Users can request/account-delete through the VOW app where the feature is available. Deletion is intended to remove the user's VOW account and associated user-owned app data, subject to limited retention required for security, fraud prevention, legal compliance or other legitimate purposes.

12. User Choices and Rights
Depending on applicable law, users may have rights to access, correct, delete or request a copy of personal information, withdraw optional integration permissions, disconnect connected services and control notification preferences.

13. International Processing
VOW and its service providers may process information in countries other than the user's country of residence. Appropriate safeguards will be used where required by applicable law.

14. Children and Young Users
VOW does not intentionally bypass applicable age restrictions or parental-consent requirements. Where the service is used by a young person, applicable platform and legal requirements remain relevant. Do not state that VOW is specifically designed for children unless verified.

15. Third-Party Services
Third-party services such as Google, Strava, Google Play and AI/infrastructure providers have their own terms and privacy policies. Users should review those policies for those services.

16. Changes
This policy may be updated as VOW changes. The last-updated date will be revised when material changes are made.

17. Contact
Privacy: vowglobalapp@gmail.com
Support: 99joshuanathan@gmail.com
VOW / Joshua Nathan Kasanga
29 Upendo Street
United Republic of Tanzania

IMPORTANT:
- Do not include a fabricated company registration number, physical office beyond the address above, phone number, legal entity name beyond what is supplied, DPO, data protection officer, certifications, or regulatory claims.
- Add a clear "This policy is intended as product documentation and should receive qualified legal review before public launch" note in a subtle legal notice, not as a substitute for the policy.
- Do not use Notion.
- Keep all copy editable in source code.
- Build the complete site now; do not stop at a mockup.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b2b47835-bf88-4f11-a21f-2c91eb9134cf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
