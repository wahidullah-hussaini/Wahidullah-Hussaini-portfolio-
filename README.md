# Wahidullah Hussaini — Portfolio

A multi-page React portfolio built around the **"Digital Homeland"** concept:
a deep night sky, layered mountains, faint constellations and a blueprint grid,
with warm amber light as the single accent colour. Dark mode is the default.

> **Status: Stages 1–2 are written (foundation + full home page).**
> The code has **not** been installed, built or opened in a browser yet,
> because the workspace it was written in cannot reach the npm registry.
> See "What has and has not been checked" below. Your first run is the real test.

## Requirements

- **Node.js 20.19 or newer** (Vite 7 needs it). Check with `node -v`.
- npm (comes with Node).

## Setup (first time)

```bash
npm install
npm run verify:icons   # checks every react-icons import really exists
npm run dev            # open the address it prints, usually http://localhost:5173
```

Other commands:

```bash
npm run build     # production build into /dist
npm run preview   # serve the production build locally
```

If `npm install` fails with `ECONNRESET`, that is a network problem, not a code
problem. Retry with: `npm install --fetch-retries=6 --fetch-retry-mintimeout=20000`

### If `npm install` complains about versions

The versions in `package.json` were chosen from memory, not verified against the
registry. If npm reports a conflict, send me the exact message. As a fallback:

```bash
npm install react react-dom react-router-dom motion react-icons
npm install -D vite @vitejs/plugin-react tailwindcss @tailwindcss/vite
```

## Stack

| Purpose | Package | Note |
| --- | --- | --- |
| Build tool | `vite` + `@vitejs/plugin-react` | |
| UI | `react`, `react-dom` | React 19 |
| Styling | `tailwindcss` + `@tailwindcss/vite` | **Tailwind v4** (Vite plugin, no `tailwind.config.js`) |
| Routing | `react-router-dom` | v7, imported from `react-router-dom` |
| Animation | `motion` | imported from `motion/react` |
| Icons | `react-icons` | `/lu` interface, `/si` tech logos, `/fa` fallback |

Planned additions (not installed yet): React Hook Form, Zod and a toast
library (contact form); Vitest (tests).

## Icons

All icons come from `react-icons`. No icon URLs, images or emojis.
Technology logos are mapped in `src/components/skills/techIcons.js`.
HTML5, CSS3 and Java come from `react-icons/fa` (stable names across versions);
LinkedIn also comes from `fa` because the `si` set has no LinkedIn logo.

Icon names can differ between `react-icons` versions. **Run
`npm run verify:icons` after installing.** It prints `OK` or `MISSING` for every
icon import in `src/`. If one is missing, replace it with a valid name from the
same set and run the script again.

## Your photographs

Put your own photos in `public/images/` (the file names and sizes are in
`public/images/README.md`). Until a file exists, the site shows a clearly marked
"Add photo" placeholder. **No stock or AI photos are used.**

| File | Where it appears |
| --- | --- |
| `public/images/profile/profile.jpg` | Home page portrait |
| `public/images/profile/about.jpg` | About page (built in a later stage) |
| `public/images/gallery/gallery-01.jpg` ... | Gallery and home gallery strip |
| `public/images/projects/...` | Project screenshots |
| `public/images/certificates/...` | Certificate scans |

After adding a gallery photo, describe it in `src/data/gallery.js`
(the `alt` text is read aloud by screen readers).

## Folder structure

```
public/
  images/               your photos (see images/README.md)
  favicon.svg, _redirects
scripts/verify-icons.mjs  icon import checker
src/
  main.jsx              starts React, Router and reduced-motion support
  App.jsx               theme -> layout -> routes
  routes/AppRoutes.jsx  every page address, lazy loading, page transitions
  layouts/MainLayout.jsx  sky background + navbar + page + footer
  components/
    home/               one file per home-page section
    animation/          StarField, MountainSilhouette, ConstellationGraphic, Reveal, PageTransition
    common/             Button, Container, SmartImage, SectionHeading, SocialLinks, ...
    skills/             SkillBar, techIcons
    navigation/         Navbar, ThemeToggle
    layout/             Footer
  context/ThemeContext.jsx  dark/light theme + saved choice
  data/                 YOUR content: site.js, skills.js, learning.js, projects.js, gallery.js
  lib/                  links.js (safe contact links), motion.js, skills.js
  hooks/                useDocumentTitle
  pages/                one file per route
  styles/index.css      colour tokens, fonts, base styles
```

## How to change things

- **Name, intro, tagline, contact details, résumé**: `src/data/site.js`.
  Values that start with `YOUR_` are placeholders and are never shown as links.
  A contact icon appears only after you replace its placeholder with a valid value.
  WhatsApp needs digits only with the country code, for example `93700000000`.
- **Skill levels**: change the numbers in `src/data/skills.js`.
- **Learning roadmap**: `src/data/learning.js` (move a step forward only when it is true).
- **Projects**: `src/data/projects.js`. It is empty on purpose; the file explains the format.
- **Colours**: the variables at the top of `src/styles/index.css`
  (separate sets for dark and light). The accent colour is `--accent`.
- **Navigation links**: `navLinks` in `src/data/site.js`.
- **Résumé**: put a PDF in `public/documents/`, then set
  `resumePath: "/documents/your-file.pdf"` in `site.js`. The button appears automatically.

## Deployment (SPA routing)

Pages like `/projects/my-site` must work when opened directly. Both configs are included:

- **Vercel**: `vercel.json` rewrites every path to `index.html`.
- **Netlify**: `public/_redirects` does the same.

Build command `npm run build`, output folder `dist`. Full steps, including
environment variables for the contact form, come in a later stage.

## What has and has not been checked

Checked in the workspace where the code was written:

- All 54 `.js`/`.jsx`/`.mjs` files parse without syntax errors.
- All 34 icon imports exist in `react-icons` 5.7.0 (the copy installed there).
- Every page component renders to HTML without a runtime error, using the real
  React and react-icons with **stand-in** versions of `motion` and
  `react-router-dom`. This catches bad imports and props. It does **not** test
  animation, routing or any browser behaviour.
- The contact-link builder returns nothing for placeholders or invalid values.

**Not** checked (nothing was installed, built or opened in a browser):

- `npm install`, `npm run dev`, `npm run build`
- How anything looks, on any screen size, in either theme
- Whether the animations actually play (hero entrance, scroll reveals, skill bars,
  route transitions) and whether they feel right
- Colour contrast ratios, keyboard behaviour, mobile menu in practice
- That the pinned package versions resolve together

Send me any error text or screenshot from your first run.

## Known limitations

- The home page is complete; the other pages are still honest placeholders
  (see `CHECKLIST.md`).
- This is a client-rendered React app. Search engines and link previews may not
  see page-specific content as reliably as with server rendering or prerendering.
