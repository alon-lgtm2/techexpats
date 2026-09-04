import en from "./en.json";
import nl from "./nl.json";
import he from "./he.json";

export type Lang = "en" | "nl" | "he";
export const LANGS: Lang[] = ["en", "nl", "he"];
export const DEFAULT_LANG: Lang = "en";

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

/** Alon's WhatsApp number (international format, no +). */
export const WHATSAPP_NUMBER = "31644295691";

const WHATSAPP_TEXT: Record<Lang, string> = {
  he: "היי אלון, אשמח לדבר. אני מחפש/ת",
  en: "Hi Alon, I'd love to talk. I'm looking for",
  nl: "Hoi Alon, ik wil graag praten. Ik ben op zoek naar",
};

/** A wa.me link with a friendly, language-appropriate pre-filled opener. */
/**
 * The one paid consultation hour ("שעת ייעוץ", 60 minutes, 190 euro).
 * Calendly collects the fee, so this is the only booking door on the site.
 * Changing the event on Calendly does NOT change the copy: the duration and
 * the price are written out in en/nl/he.json and on the Hebrew pricing page,
 * so grep for the number before assuming this line is the whole story.
 */
export const BOOKING_URL = "https://calendly.com/agildoni/new-meeting";

export function whatsappUrl(lang: Lang): string {
  const text = WHATSAPP_TEXT[lang] ?? WHATSAPP_TEXT.en;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
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
