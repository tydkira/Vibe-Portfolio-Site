// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// output: 'static' (the default) builds plain HTML/CSS/JS files.
// That is exactly what Cloudflare Pages expects on the free plan —
// no server, no adapter, just upload the dist/ folder.
export default defineConfig({
	output: 'static',
	site: 'https://example.com', // TODO: replace with your real Cloudflare Pages URL
});
