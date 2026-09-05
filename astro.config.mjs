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
      // lastmod on every entry, from the build time. The sitemap shipped without
      // it, so a crawler had no signal about what had changed and recrawled on
      // its own schedule (2026-09-03).
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'he',
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
  // Hebrew moved from /he/* to the root on 2026-09-05, so every old Hebrew URL
  // needs somewhere to land. English moved the other way, from the root to
  // /en/*, and those URLs cannot be redirected: the old English /about is now
  // the Hebrew /about. hreflang carries the relationship instead, which is why
  // Base emits a full cluster on every page.
  redirects: {
    '/technology': '/how-it-works',
    '/nl/technology': '/nl/how-it-works',
    '/he': '/',
    '/he/about': '/about',
    '/he/ai-tools': '/ai-tools',
    '/he/ai-tools/cv-upgrade': '/ai-tools/cv-upgrade',
    '/he/ai-tools/target-companies': '/ai-tools/target-companies',
    '/he/book': '/book',
    '/he/career-advice': '/career-advice',
    '/he/contact': '/contact',
    '/he/for-companies': '/for-companies',
    '/he/hiring-insights': '/hiring-insights',
    '/he/how-it-works': '/how-it-works',
    '/he/opportunities': '/opportunities',
    '/he/portal-example': '/portal-example',
    '/he/pricing': '/pricing',
    '/he/resources': '/resources',
    '/he/summer-plan': '/summer-plan',
    '/he/technology': '/how-it-works',
  },
  i18n: {
    defaultLocale: 'he',
    locales: ['en', 'nl', 'he'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
