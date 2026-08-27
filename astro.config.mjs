// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://techexpats.nl',
  // Output to ./out so the existing Render service (configured for the Next.js
  // static export, which also published ./out) serves this build unchanged.
  outDir: './out',
  integrations: [
    mdx(),
    // The site shipped without a sitemap or a robots.txt from launch until
    // 2026-08-27, so seventy pages were discoverable only by crawling links.
    // The i18n block makes the sitemap carry the same hreflang clusters the
    // pages carry, which is what stops three translations of one page reading
    // as three competing duplicates.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', nl: 'nl', he: 'he' },
      },
      // Unlisted pages stay out of the index. /designs is the internal
      // four-way theme switcher and /portal-example is a demo.
      filter: (page) =>
        !page.includes('/designs') &&
        !page.includes('/portal-example') &&
        !page.includes('/summer-plan'),
    }),
  ],
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
