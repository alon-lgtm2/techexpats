import { LANGS, DEFAULT_LANG, localizePath, type Lang } from "./index";

/**
 * Every static page in the build, as a route path.
 *
 * This exists so hreflang can be emitted automatically without ever advertising
 * a URL that 404s. Several pages deliberately exist in one locale only: the AI
 * tools are Hebrew, the six-week plan is Hebrew and unlisted. Announcing
 * /nl/ai-tools as the Dutch alternate of a page that was never built is worse
 * than emitting no hreflang at all, because a 404 in an hreflang cluster
 * discredits the whole cluster.
 *
 * Vite resolves this glob at build time, so the list cannot drift from reality.
 */
const files = import.meta.glob("/src/pages/**/*.astro");

function fileToRoute(file: string): string | null {
  let p = file.replace("/src/pages", "").replace(/\.astro$/, "");
  if (p.includes("[")) return null; // dynamic routes are handled by their own page
  if (p.endsWith("/index")) p = p.slice(0, -"/index".length);
  if (p === "/index" || p === "") return "/";
  return p + "/";
}

export const ROUTES: ReadonlySet<string> = new Set(
  Object.keys(files)
    .map(fileToRoute)
    .filter((r): r is string => r !== null),
);

/** Strip a leading locale segment, returning the path as the default locale sees it. */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if ((LANGS as string[]).includes(parts[0])) parts.shift();
  return parts.length ? `/${parts.join("/")}/` : "/";
}

/**
 * The locale alternates for a pathname, containing only routes that were
 * actually built. Returns undefined when the page has no sibling in any other
 * locale, so Base emits nothing rather than a cluster of one.
 */
export function alternatesFor(pathname: string): Partial<Record<Lang, string>> | undefined {
  const base = stripLocale(pathname);
  const out: Partial<Record<Lang, string>> = {};
  for (const lang of LANGS) {
    const candidate = lang === DEFAULT_LANG ? base : localizePath(base, lang);
    const normalised = candidate.endsWith("/") ? candidate : candidate + "/";
    if (ROUTES.has(normalised)) out[lang] = normalised;
  }
  return Object.keys(out).length > 1 ? out : undefined;
}
