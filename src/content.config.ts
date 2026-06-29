import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const insights = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    excerpt: z.string(),
    category: z.string().optional(),
    readTime: z.string().optional(),
    lang: z.enum(["en", "nl", "he"]).default("en"),
    author: z.string().default("Alon Gildoni"),
    audience: z.enum(["individuals", "companies", "both"]).default("both"),
    image: z.string().optional(),
  }),
});

export const collections = { insights };
