// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://leslieheintz.com', // Update with your actual domain
  output: 'static',
  compressHTML: true,
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
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
