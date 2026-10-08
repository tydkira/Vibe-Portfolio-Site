# AGENTS.md — Vibe Portfolio Site

Guidance for AI agents (and humans) working on this repo.

## Project goals

1. Educate visitors on who Ty Dunn is and what he has done.
2. Convert visitors to subscribe to the movie newsletter (primary conversion goal).

## Tech stack (do not change without being asked)

| Area | Choice |
| --- | --- |
| Framework | Astro (static output) |
| UI frameworks | None — no React/Vue/Svelte unless truly required |
| Styling | Plain CSS + CSS variables in `src/styles/global.css` (no Tailwind) |
| Projects content | Astro content collection — Markdown files in `src/content/projects/` |
| Hosting target | Cloudflare Pages (free plan) — keep the build fully static |
| Version control | Git — prefer a commit after each major step when the user asks |

Build settings for Cloudflare Pages:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- No Cloudflare adapter required (`output: "static"` in `astro.config.mjs`)

## Development

Usual commands:

```sh
npm install
npm run dev       # http://localhost:4321/
npm run build
npm run preview
```

When starting the Astro dev server from an agent environment that supports it, background mode is preferred:

```
astro dev --background
```

Manage with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Full Astro docs: https://docs.astro.build

Useful guides:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)

## Site structure

```text
src/
  constants/site.ts          # SITE_NAME, SITE_TAGLINE, NEWSLETTER_FORM_ACTION
  styles/global.css          # Design tokens, base styles, @font-face
  layouts/BaseLayout.astro   # Shared shell: head, Header, main slot, Footer
  components/
    Header.astro
    Footer.astro             # Includes compact SignupForm
    SignupForm.astro         # Reusable newsletter form (no backend yet)
  content.config.ts          # Projects collection schema
  content/projects/*.md      # One Markdown file per project
  pages/
    index.astro              # Home
    about.astro
    newsletter.astro         # Full pitch page
    projects/index.astro
    projects/[id].astro      # Project detail from content collection
public/
  fonts/                     # Local Khand + Hind web fonts (+ OFL licenses)
  _headers                   # Cloudflare Pages security headers
```

Every page should use `BaseLayout` so header and footer stay consistent.

## Brand & design tokens

Edit colors/fonts in `src/styles/global.css` (`:root` variables). Current brand:

| Token | Value | Use |
| --- | --- | --- |
| Background | `#355E3B` | Page / hero atmosphere |
| Header / heading text | `#e8a30e` | Logo, `h1`–`h3`, accents |
| Body text | `#e3d054` | Paragraphs and muted body copy |

Related CSS variables:

- `--color-bg`, `--color-bg-deep`, `--color-surface`
- `--color-heading`, `--color-ink`, `--color-ink-muted`
- `--color-accent`, `--color-accent-hover`, `--color-border`

### Typography

Local Fontshare fonts (not Google Fonts):

| Role | Font | Files |
| --- | --- | --- |
| Headings / logo | **Khand Bold** (`Khand-Bold`) | `public/fonts/Khand-Bold.woff2` (+ `.woff`) |
| Body | **Hind Regular** (`Hind-Regular`) | `public/fonts/Hind-Regular.woff2` (+ `.woff`) |

- `@font-face` rules and `--font-display` / `--font-body` live in `src/styles/global.css`.
- Licenses: `public/fonts/licenses/`.
- All `h1`, `h2`, `h3` use `text-transform: uppercase`.

### Design preferences for this site

- Keep code clean, readable, and commented for a beginner owner.
- Prefer one clear composition per section; avoid generic “AI dashboard” clutter.
- Newsletter conversion should stay easy to find (Home, Newsletter page, Footer).
- Do not invent a backend or fake successful form submission.

## Pages

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Intro, featured projects, signup |
| `/about` | `src/pages/about.astro` | Bio / story |
| `/projects` | `src/pages/projects/index.astro` | All projects |
| `/projects/[id]` | `src/pages/projects/[id].astro` | Single project |
| `/newsletter` | `src/pages/newsletter.astro` | Full newsletter pitch + signup |

### Newsletter page order (keep this)

1. Headline  
2. What the newsletter is  
3. How often it is sent  
4. What readers get  
5. Placeholder “sample issue” section  
6. Signup form  

## Newsletter signup

- One reusable component: `src/components/SignupForm.astro`
- Used in **three places**: Home, Newsletter page, and Footer (every page)
- Standard HTML `<form method="post">` — no server code
- Action comes from a single constant in `src/constants/site.ts`:

```ts
export const NEWSLETTER_FORM_ACTION = "#TODO_CONNECT_PROVIDER";
```

When connecting Beehiiv / Kit / Substack / Buttondown later:

1. Replace `NEWSLETTER_FORM_ACTION` with the provider endpoint.
2. Add any required hidden fields inside `SignupForm.astro` per provider docs.
3. Keep accessible label, `type="email"`, `required`, focus, and error states.

## Projects content collection

Defined in `src/content.config.ts`. Schema fields:

- `title` (string)
- `description` (string)
- `pubDate` (date)
- `url` (optional URL)
- `tags` (string array, default `[]`)
- `draft` (boolean, default `false`)

**To add a project:** create a new `.md` file in `src/content/projects/` with frontmatter + Markdown body. No page template changes needed.

Example frontmatter:

```md
---
title: My Cool App
description: One sentence about what it is.
pubDate: 2026-04-01
tags:
  - Astro
url: https://example.com
draft: false
---
```

## Site identity constants

Edit `src/constants/site.ts` for:

- `SITE_NAME`
- `SITE_TAGLINE`
- `NEWSLETTER_FORM_ACTION`

Then update page copy in `about.astro`, `index.astro`, and `newsletter.astro` as needed.

## Agent working notes

- Prefer editing existing CSS variables over scattering one-off colors.
- Keep the build static and Cloudflare Pages–compatible.
- Do not add Tailwind or a UI framework unless the user explicitly asks.
- When the user asks for commits after major steps, make focused commits with clear messages.
- Explain non-obvious changes in plain language for a beginner owner.
