import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkBreaks]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
