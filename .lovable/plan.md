# Complete bilingual language switching and page cleanup

## What will change
- Make English and Kiswahili complete, mutually exclusive language modes across every public page and shared element, including navigation, footer, forms, cookie controls, assistant, legal pages, errors, and accessibility labels.
- Default first-time visitors by browser language and regional signals, while preserving an explicit EN/SW choice for future visits.
- Keep the existing routes, layout, hero artwork, sections, interactions, fonts, and visual direction intact.
- Use the uploaded VOW logo only for the “VOW — Product · Mobile app” project image on the Work page.
- Replace the remaining Work page images with deliberate placeholders until their real images are supplied.
- Normalize inconsistent heading tracking, labels, text sizes, and spacing without rebuilding or restructuring pages.

## Technical details
- Consolidate locale detection, persistence, document language updates, and translation access in the existing localization module with hydration-safe defaults.
- Move complete English/Kiswahili copy into typed page dictionaries and localized legal-content exports so no page can combine languages.
- Reset locale-dependent assistant state when the language changes and localize generated email fields/status text.
- Upload the provided logo through the project asset flow and reference its asset pointer in the Work page.
- Verify both languages across desktop and mobile, check the Work logo and placeholders, and confirm the build and browser console are clean.
