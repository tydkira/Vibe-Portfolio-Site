# Personal Portfolio + Movie Newsletter

A simple static site built with [Astro](https://astro.build).  
Goals: introduce who you are, share a movie-watching diary, and get visitors to subscribe to your movie newsletter.

## Tech

- **Astro** (static HTML output — Cloudflare Pages friendly)
- **Plain CSS** with CSS variables (no Tailwind)
- **Content collections** — diary entries are Markdown files
- **No UI framework** (no React/Vue) unless you add one later

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Home — intro, recent diary entries, signup |
| `/about` | Your story |
| `/diary` | Movie-watching diary from Markdown |
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

## Adding a diary entry

1. Create a new file in `src/content/diary/`, e.g. `past-lives.md`
2. Fill in the frontmatter:

```md
---
title: Quiet film, loud aftertaste
film: Past Lives
year: 2023
description: A small story about timing that stuck with me.
watchedDate: 2026-01-24
where: Home / streaming
tags:
  - Drama
  - First watch
draft: false
---

Write the longer watching notes here in Markdown.
```

3. Save — it shows up on `/diary` automatically after refresh/rebuild.

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
