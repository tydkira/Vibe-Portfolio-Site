/**
 * Content collections config.
 *
 * Astro reads this file to know what kinds of Markdown content we have.
 * Right now we have a "diary" collection — add a movie-watching entry by
 * creating a new .md file in src/content/diary/.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const diary = defineCollection({
	// Load every Markdown file inside src/content/diary/
	loader: glob({ pattern: "**/*.md", base: "./src/content/diary" }),
	schema: z.object({
		/** Short headline for the diary entry */
		title: z.string(),
		/** The film you watched */
		film: z.string(),
		/** One-line takeaway shown in lists */
		description: z.string(),
		/** When you watched it — used for sorting (newest first) */
		watchedDate: z.coerce.date(),
		/** Optional year the film was released */
		year: z.coerce.number().optional(),
		/** Optional place or format, e.g. "Alamo Drafthouse" or "Couch / Criterion" */
		where: z.string().optional(),
		/** Short labels like "Comedy", "Rewatch", "Theater" */
		tags: z.array(z.string()).default([]),
		/** Set to true to hide an entry without deleting the file */
		draft: z.boolean().default(false),
	}),
});

export const collections = { diary };
