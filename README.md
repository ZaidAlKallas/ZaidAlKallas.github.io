# Zaid Al Kallas — Portfolio

A modern, bilingual (English / Arabic) portfolio for a Full-Stack .NET Developer, built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

Deployed as a **fully static site** to **GitHub Pages**.

---

## Tech Stack

- **Next.js 16** (static export — `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide Icons** + custom inline brand SVG icons (GitHub / LinkedIn)
- No backend, no database, no CMS.

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg          ← YOUR PROFILE PHOTO GOES HERE
│   │   └── projects/            ← project images (optional)
│   ├── files/
│   │   └── Zaid-Al-Kallas-CV.pdf ← YOUR CV GOES HERE
│   ├── CNAME                    ← custom domain (see below)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── globals.css          ← theme variables, fonts, base styles
│   │   ├── layout.tsx           ← root layout, SEO metadata, providers
│   │   └── page.tsx             ← assembles all sections
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── icons.tsx
│   ├── data/                    ← ✅ EDIT CONTENT HERE
│   │   ├── site.ts              ← name, email, GitHub, LinkedIn, CV, image
│   │   ├── translations.ts      ← all UI text (English + Arabic)
│   │   ├── experience.ts        ← experience entries
│   │   ├── education.ts         ← education entries
│   │   ├── skills.ts            ← skill categories
│   │   └── projects.ts          ← project metadata
│   ├── lib/
│   │   ├── theme.tsx            ← dark/light mode provider
│   │   └── language.tsx         ← en/ar + RTL provider
│   └── types/index.ts
├── .github/workflows/deploy.yml ← GitHub Actions → GitHub Pages
└── next.config.ts               ← static export config
```

---

## Installation (Windows 11)

Prerequisites: **Node.js 20+** and **npm**.

```bash
# 1. Install dependencies
npm install

# 2. Run locally (development)
npm run dev

# 3. Production build (static output to /out)
npm run build

# 4. Optionally preview the production build
npx serve out
```

Open http://localhost:3000 to view the site locally.

---

## Content Editing Guide (everything lives in `src/data/`)

| What | Where |
|------|-------|
| **Name / Title** | `src/data/site.ts` |
| **Email** | `src/data/site.ts` → `email` |
| **GitHub URL** | `src/data/site.ts` → `github` |
| **LinkedIn URL** | `src/data/site.ts` → `linkedin` |
| **CV path** | `src/data/site.ts` → `cvPath` |
| **Profile image** | `src/data/site.ts` → `profileImage` (default `/images/profile.jpg`) |
| **Custom domain** | `src/data/site.ts` → `canonicalUrl` AND `public/CNAME` |
| **Experience** | `src/data/experience.ts` |
| **Education** | `src/data/education.ts` |
| **Skills** | `src/data/skills.ts` |
| **Projects** | `src/data/projects.ts` |
| **All UI text (EN/AR)** | `src/data/translations.ts` |

---

## Profile Image

Replace the placeholder by dropping your photo at:

```
public/images/profile.jpg
```

Use any aspect ratio — the layout keeps it square-cropped via `object-cover`. Until you add the file, a subtle user-silhouette placeholder is shown automatically.

## CV / Resume

Drop your PDF at:

```
public/files/Zaid-Al-Kallas-CV.pdf
```

The "Download CV" button in the hero links to this path.

---

## GitHub Pages Deployment

This repo includes `.github/workflows/deploy.yml`. To use it:

1. Push everything to a **GitHub repository** (e.g. `ZaidAlKallas/ZaidAlKallas.github.io`).
2. In the repo settings → **Pages** → Source: select **GitHub Actions**.
3. Push to `main` (or run the workflow manually) — it builds and deploys automatically.

Notes:
- The site is a **static export** (`next.config.ts` → `output: "export"`), so no Node server runs on Pages.
- Absolute asset paths `/images/...` work at both the Pages root and your custom domain root.
- A `.nojekyll` file prevents GitHub from ignoring `_next/` folders.

### If your Pages site is served from a sub-path (repo-named URL like `user.github.io/repo/`)

Add a `basePath` to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/repo-name",
  images: { unoptimized: true },
  trailingSlash: true,
};
```

> The recommended setup is a dedicated repo named `username.github.io` (or a custom domain) so the site is served from the root and no `basePath` is needed.

---

## Custom Domain

1. **Create `/public/CNAME`** with your domain — it already exists with:
   ```
   zaidalkallas.me
   ```
   (Change this line to your actual domain if different.)

2. In **GitHub Pages settings**, enter the same custom domain. GitHub will verify and create the DNS records for you.

3. At your DNS provider add:
   - **A records** → the 4 GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) — or a CNAME to `username.github.io`.
   - Wait for propagation (minutes to hours).

4. Set `canonicalUrl` in `src/data/site.ts` to your domain for SEO.

---

## Arabic / English (i18n + RTL)

- Default language is **English**.
- Click the globe button in the nav to toggle **Arabic / English**.
- Setting Arabic:
  - Sets `<html dir="rtl">` and `<html lang="ar">`.
  - Switches all UI text to Arabic via `src/data/translations.ts`.
  - Applies the Arabic font (IBM Plex Sans Arabic) via CSS `[dir="rtl"] body`.
- Selection is saved in `localStorage` and restored on reload.
- All section content (experience, education, skills, projects) reads from `data` files that each carry both `en` and `ar` fields.

## Dark / Light Mode

- Respects the user's **system preference on first visit**.
- Toggle via the sun/moon button in the nav (keyboard-friendly).
- Saved in `localStorage` (`theme`).
- A tiny inline script in `layout.tsx` sets the correct class **before first paint** to avoid flash.
- Both modes use accessible color tokens defined in `globals.css`.

---

## SEO & Accessibility

- `layout.tsx` defines title, meta description, Open Graph, Twitter card, canonical URL, and robots.
- `public/robots.txt` and `public/sitemap.xml` are provided.
- Semantic HTML, heading hierarchy, visible focus states, ARIA labels, and `prefers-reduced-motion` support are implemented.

---

## Contact Form

The contact form is **UI-ready** and currently just simulates a successful send. It does **not** expose any secrets.

To wire it to a real provider (e.g. Formspree, EmailJS, a Netlify function, or a serverless endpoint), edit the `handleSubmit` in `src/components/Contact.tsx`. Keep API keys **server-side only** — never hardcode secrets in client code.

---

## Production Build

```bash
npm run build
```

Output is written to `./out`.
