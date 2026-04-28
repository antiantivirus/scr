import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
