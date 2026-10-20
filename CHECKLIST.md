# Project checklist

Legend: ✅ checked here · 🔶 written, not yet run in a browser · ⬜ not started

"Checked here" only means the checks listed in README.md ("What has and has not
been checked"). Nothing has been opened in a browser yet.

## Stage 1 — Audit and foundation

- 🔶 Vite + React + Tailwind v4 structure and config
- 🔶 Dark (default) and light "paper" themes, saved choice, no-flash bootstrap
- 🔶 Main layout, skip link, sky background (stars, grid, glow)
- 🔶 Responsive navbar: active link, mobile menu (Escape, aria), Contact button
- 🔶 Footer, back-to-top button
- 🔶 All routes + 404, lazy-loaded pages, SPA fallback for Vercel and Netlify
- 🔶 Smooth theme colour fade
- ✅ Fixed in the audit: hero entrance was switched off by `AnimatePresence initial={false}`
- ✅ Fixed in the audit: font variables now always emitted (`@theme static`)
- ✅ Fixed in the audit: icon checker works on Windows paths with spaces
- ✅ Syntax check, icon export check, server-render smoke test of every page

## Stage 2 — Home page and motion

- 🔶 Hero: name, role, headline, tagline, CTAs, portrait slot in an arch, mountains, scroll cue
- 🔶 Introduction (what I build / learning / drives me)
- 🔶 Featured projects (honest empty state until real projects are added)
- 🔶 Skills preview with your exact percentages, strength vs developing, readable text
- 🔶 Learning journey timeline
- 🔶 Education and mission with constellation graphic
- 🔶 Gallery preview with photo slots
- 🔶 Contact call to action (direct links only when real details are set)
- 🔶 Scroll reveals, staggered hero entrance, skill bars fill on scroll, reduced-motion support
- ⬜ **First real run in the browser (you): look, scroll, switch theme, resize, tell me what is wrong**

## Stage 3 — Projects

- ⬜ Projects page: search, category and technology filters, reset, empty state
- ⬜ Project detail pages, related projects, "Discuss a similar project"

## Stage 4 — About, skills, learning

- ⬜ About page with timeline and portrait
- ⬜ Full Skills page (all groups, hover details)
- ⬜ Learning page

## Stage 5 — Photos, books, certificates

- ⬜ Gallery page with viewer (keyboard and touch)
- ⬜ Books library
- ⬜ Certificates with detail dialog

## Stage 6 — Contact

- ⬜ Contact form (React Hook Form + Zod), honest demo mode, delivery options
- ⬜ WhatsApp / email / GitHub / LinkedIn / résumé wired to your real details

## Stage 7 — Quality review

- ⬜ All routes, themes, mobile layouts, keyboard, contrast, performance, console errors
- ⬜ Command palette, global search, SEO metadata, tests

## Stage 8 — Handover

- ⬜ Deployment guide and "how to edit" notes

## Content still needed from you

- Photos: `profile.jpg` (main portrait), `about.jpg`, gallery photos (`gallery-01.jpg`, ...)
- Email, WhatsApp number (digits with country code), GitHub URL, LinkedIn URL (optional)
- Résumé PDF
- Real projects (name, links, screenshots) — none have been invented
- Real certificates and books
- Milestone dates for the About timeline
- Gallery photo descriptions (for `src/data/gallery.js`)
