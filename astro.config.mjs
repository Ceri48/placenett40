// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.exemple.com', // IMPORTANT pour sitemap/canonicals
    integrations: [sitemap()],
    trailingSlash: 'always',
});
