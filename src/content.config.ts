import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content' }),
  schema: z.object({
    archive:    z.string().optional(),
    newsletter: z.string().optional(),
    footer:     z.string().optional()
  })
});

export const collections = { home };
