/**
 * Analytics configuration.
 *
 * The site shipped with no analytics at all from launch (2026-06-29) until
 * 2026-09-04. There was no way to answer "how many people saw the price and
 * did not book", which is the only question the pricing page exists to answer.
 *
 * CLOUDFLARE WEB ANALYTICS is the default, for four reasons: it is free, it
 * sets no cookies and stores no personal data (so this site needs no consent
 * banner under the Dutch implementation of the ePrivacy rules), techexpats.nl
 * is already an active zone on Alon's Cloudflare account, and tracedlives.com
 * is already measured the same way, so both sites read alike.
 *
 * The beacon token is NOT a secret. It is served inside the HTML of every page
 * and anyone can read it, which is why it lives here in git rather than in
 * _system/secrets_store.py. Rule 19 is about live credentials; this is not one.
 *
 * TO TURN IT ON, one of two ways, and never both or every visit counts twice:
 *   a) Paste the beacon token below. Cloudflare dashboard, Analytics & Logs,
 *      Web Analytics, Add a site, techexpats.nl, "manual installation". Then
 *      commit and push; Render rebuilds and it is live.
 *   b) Or, since the zone is proxied by Cloudflare, choose "automatic
 *      installation" instead and Cloudflare injects the beacon itself. Nothing
 *      to deploy, but leave the token below empty if you do that.
 *
 * GA4 is supported and off. It answers questions Cloudflare cannot (which
 * channel a booking came from, multi-step funnels), and it costs a consent
 * banner to do it lawfully here. Set GA4_ID only alongside that banner.
 */

/** Cloudflare Web Analytics beacon token. Public by design. Empty = off. */
export const CF_BEACON_TOKEN: string =
  import.meta.env.PUBLIC_CF_BEACON_TOKEN ?? "";

/** GA4 measurement id, e.g. "G-XXXXXXXXXX". Empty = off. Needs a consent banner. */
export const GA4_ID: string = import.meta.env.PUBLIC_GA4_ID ?? "";

/**
 * THE FUNNEL, and how to read it without any custom event tracking.
 *
 * Every call to action on the site lands on /book first, by design (Alon,
 * 2026-09-02): the meeting is explained before the calendar appears. That
 * makes the funnel three plain page views plus Calendly's own numbers:
 *
 *   1. any page          how many arrived
 *   2. /book, /he/book   how many wanted the consultation hour enough to click
 *   3. /he/pricing       how many went looking at what everything costs
 *   4. Calendly          how many actually booked and paid
 *
 * Cloudflare Web Analytics has no custom-event API on the free plan, so do not
 * go looking for a "clicked the button" number. Steps 2 and 3 are the intent
 * signal and they are already measured. Only GA4 would add more, and only for
 * the price of the banner.
 */
