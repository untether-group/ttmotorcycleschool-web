// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://untether-group.github.io',
  base: '/ttmotorcycleschool-web', // remove the base line entirely if you want to deploy to root domain
  trailingSlash: 'always',
  integrations: [
    sitemap(),
  ],
  build: {
    format: 'directory',
  },
});