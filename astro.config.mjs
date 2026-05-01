// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://untether-group.github.io',
  base: '/ttmotorcycleschool-web',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
  ],
  build: {
    format: 'directory',
  },
});