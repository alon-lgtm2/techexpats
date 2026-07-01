// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://techexpats.nl',
  // Output to ./out so the existing Render service (configured for the Next.js
  // static export, which also published ./out) serves this build unchanged.
  outDir: './out',
  integrations: [mdx()],
  redirects: {
    '/technology': '/how-it-works',
    '/he/technology': '/he/how-it-works',
    '/nl/technology': '/nl/how-it-works',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'he'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
