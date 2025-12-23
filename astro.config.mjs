// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://leslieheintz.com', // Update with your actual domain
  output: 'static',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => 
        !page.includes('/404') &&
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  
  image: {
    domains: [],
    remotePatterns: [],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  
  prefetch: {
    defaultStrategy: 'hover',
  },
  
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
