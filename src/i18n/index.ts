import en from "./en.json";
import nl from "./nl.json";
import he from "./he.json";

export type Lang = "en" | "nl" | "he";
export const LANGS: Lang[] = ["en", "nl", "he"];
export const DEFAULT_LANG: Lang = "he";

export const LANG_LABELS: Record<Lang, string> = { en: "EN", nl: "NL", he: "HE" };
export const LANG_NAMES: Record<Lang, string> = { en: "English", nl: "Nederlands", he: "עברית" };

const dicts: Record<Lang, any> = { en, nl, he };

/** Deep-merge a locale dict over English so any missing key falls back to EN. */
function mergeOverEn(localized: any): any {
  const out: any = structuredClone(en);
  for (const section of Object.keys(localized || {})) {
    out[section] = { ...(out[section] || {}), ...(localized[section] || {}) };
  }
  return out;
}

const merged: Record<Lang, any> = {
  en,
  nl: mergeOverEn(nl),
  he: mergeOverEn(he),
};

/** Get the translation dictionary for a language (with EN fallback baked in). */
export function getT(lang: Lang) {
  return merged[lang] ?? en;
}

export function isRTL(lang: Lang): boolean {
  return lang === "he";
}

/** Prefix a root-relative path with the locale (default locale stays at root). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return clean;
  return `/${lang}${clean === "/" ? "" : clean}`;
}

/** Detect the active language from a URL pathname. */
export function langFromPath(pathname: string): Lang {
  const seg = pathname.split("/").filter(Boolean)[0];
  return (LANGS as string[]).includes(seg) ? (seg as Lang) : DEFAULT_LANG;
}
