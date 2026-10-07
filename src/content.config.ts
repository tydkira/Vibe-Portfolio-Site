/**
 * Content collections config.
 *
 * Astro reads this file to know what kinds of Markdown content we have.
 * Right now we only have a "projects" collection — add a new project by
 * creating a new .md file in src/content/projects/.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	// Load every Markdown file inside src/content/projects/
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Publish date — used for sorting (newest first)
		pubDate: z.coerce.date(),
		// Optional link to a live demo or repo
		url: z.string().url().optional(),
		// Short labels like "Astro", "Design", etc.
		tags: z.array(z.string()).default([]),
		// Set to false to hide a project without deleting the file
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects };
