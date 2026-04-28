import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  markdown: {
    remarkPlugins: [remarkBreaks]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
