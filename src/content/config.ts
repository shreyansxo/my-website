import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    video: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    liveURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

export const collections = { blog, projects };
