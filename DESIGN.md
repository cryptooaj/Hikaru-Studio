# Hikaru Studio UI system

Reference: https://studiohikaru.com/ — inspected 2026-10-26 with Firecrawl at desktop 1440 × 900 and mobile 390 × 844, after JavaScript rendered. Source evidence included page HTML, text, branding extraction and the Android screenshot supplied in this conversation. Firecrawl returned screenshot URLs, but their pixels were not directly inspected in this workspace; visual assertions below are supported by HTML/CSS and the supplied Android screenshot.

## Existing brand

- Inter for headings and body. Desktop hero title reaches 128px; mobile hero title is 48px in the captured render.
- Primary action red `#DC2626`. Dark background `#09090B`; light background uses Tailwind zinc-50. Primary text is near-white on dark and near-black on light.
- Primary buttons have square corners; cards and inputs use modest rounding. Keep this distinction.
- Use existing studio photography. Never substitute stock media or change the source files without a content decision.

## Layout and components

- Home flows Hero → Selected works → About → Services → Contact. Mobile hero stacks copy before artwork; desktop places them side by side.
- Headings use a compact label, a clear title and short supporting copy. Maintain one h1 in the hero, with h2 section titles.
- Gallery category controls scroll horizontally on narrow screens, show the project count, and expose pressed state. Cards keep a 4:5 photo ratio and visible keyboard focus.
- Services use four concise cards with short examples, followed by a direct contact link. Contact remains available in the navigation and after the gallery.
- Preserve legible text and touch targets at narrow widths. Use the existing red for clear actions, and keep supporting text at zinc-300 or darker text on light surfaces.

## Media references

Hero feature: `/commerical photography/Black Bag.JPG`; portfolio media is defined in `constants.ts`. Portrait and contact images are `/farnaz-about.JPG` and `/farnaz-contact.JPG`. Paths reflect existing filenames, including their original spelling.

## Verification still needed

Compare rendered desktop and phone screenshots after deployment, including light and dark themes, category changes and the open project dialog. The design capture alone does not measure performance or prove all interaction states.
