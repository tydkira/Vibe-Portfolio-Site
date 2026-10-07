# Personal Portfolio + Movie Newsletter

A simple static portfolio built with [Astro](https://astro.build).  
Goals: introduce who you are, show your work, and get visitors to subscribe to your movie newsletter.

## Tech

- **Astro** (static HTML output — Cloudflare Pages friendly)
- **Plain CSS** with CSS variables (no Tailwind)
- **Content collections** — projects are Markdown files
- **No UI framework** (no React/Vue) unless you add one later

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Home — intro, featured projects, signup |
| `/about` | Your story |
| `/projects` | All projects from Markdown |
| `/newsletter` | Full pitch + signup |

## Local development

```sh
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

```sh
npm run build    # output goes to dist/
npm run preview  # preview the production build locally
```

## Adding a project

1. Create a new file in `src/content/projects/`, e.g. `my-cool-app.md`
2. Fill in the frontmatter:

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

Write the longer project story here in Markdown.
```

3. Save — it shows up on `/projects` automatically after refresh/rebuild.

## Connecting the newsletter form

There is **no backend yet**. The shared `<SignupForm />` posts to a placeholder.

1. Open `src/constants/site.ts`
2. Replace `NEWSLETTER_FORM_ACTION` with your provider’s form endpoint
   (Beehiiv, Kit, Substack, Buttondown, etc.)
3. If the provider needs extra hidden fields, add them inside
   `src/components/SignupForm.astro`

The form is used on the Home page, the Newsletter page, and in the footer on every page.

## Deploy to Cloudflare Pages (free)

1. Push this repo to GitHub (or another Git host Cloudflare supports)
2. In Cloudflare Pages: **Create project** → connect the repo
3. Build settings:
   - **Framework preset:** Astro (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy

No Cloudflare adapter is required — this site is fully static.

## Customize your identity

Edit `src/constants/site.ts` for your name and tagline, then update the copy on:

- `src/pages/about.astro`
- `src/pages/index.astro`
- `src/pages/newsletter.astro`
