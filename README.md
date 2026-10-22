# Ninja Hashmi — Frontend Developer Portfolio

Single-page React portfolio built with Vite, Tailwind CSS v4, and accessibility in mind.

**Repo:** https://github.com/Ninja-web-com/ninja-hashmi-portfolio  
**Author:** Ninja Hashmi · Karachi, Pakistan

---

## Tech stack

- React 19 + Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- lucide-react (UI icons) + inline SVGs (brand icons)
- No router, no TypeScript, no animation libraries

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repo.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy.

After deploy, replace `[SITE_URL]` in:

- `index.html` (canonical, Open Graph, Twitter)
- `public/robots.txt`
- `public/sitemap.xml`

with your real Vercel domain (e.g. `https://your-project.vercel.app`), then redeploy.

### Contact form on Vercel

Netlify Forms does **not** work on Vercel.  
The form currently falls back to the visible **mailto** link.

Optional later: wire the form to [Formspree](https://formspree.io) (free tier).

## Customization guide

| What | Where |
|------|--------|
| Name, email, links, hero line, about copy | `src/data/site.js` |
| Projects (add / edit / reorder) | `src/data/projects.js` |
| Skills tags | `src/data/skills.js` |
| Process steps | `src/data/process.js` |
| Colors / accent | `src/index.css` (`@theme` and `.dark`) |
| Profile photo | Replace placeholder in `About.jsx` |
| Project screenshots | Replace dashed boxes in `Projects.jsx` |
| Favicon | `public/favicon.svg` |

All draft copy is marked `// DRAFT: review` in the data files.

## Accessibility

- Semantic landmarks, one `h1`, logical heading order
- Skip link
- Visible focus styles
- Mobile menu: `aria-expanded`, Escape to close, focus return
- `scroll-margin-top` on sections for sticky header
- `prefers-reduced-motion` respected
- Form labels, validation, and `aria-live` status region

## Contrast notes

Accent base: `#e07c2a` (warm orange).
working from multiple account

| Pair | Ratio (approx) | Pass? |
|------|----------------|-------|
| `#c45a12` text on white | ~5.2:1 | AA text ✓ |
| White text on `#c45a12` | ~5.2:1 | AA text ✓ |
| `#e07c2a` UI on white | ~3.1:1 | UI components ✓ (3:1) |
| Dark mode accent `#f0a05a` on near-black | >4.5:1 | AA text ✓ |

Primary buttons use the darker accent so text meets 4.5:1.

## License

Personal portfolio — free to fork for learning.
