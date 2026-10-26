# Hikaru Studio

React, TypeScript and Vite portfolio for Farnaz Hosseini.

## Develop and build

Use Node 20 or later. Run `npm ci`, `npm run dev`, and `npm run build`. The build output is `dist/`. The app expects to be served at the root of `https://studiohikaru.com/`.

Photography and video live under `public/`. Project metadata and media paths are maintained in `constants.ts`; check filename case when adding work. Public EmailJS identifiers are configured in `components/Contact.tsx`. Never put an EmailJS private key in browser code.

GitHub Actions deploys the `ai-studio` branch to GitHub Pages and runs a build check for pull requests. Confirm the custom domain and Pages source in repository settings before changing deployment branches.
