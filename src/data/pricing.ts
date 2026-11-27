import type { Lang } from "../i18n";

export const coachingPrices = {
  diagnosis: 190,
  working: 740,
  interview: 590,
};

const locales = { he: "he-IL", en: "en-IE", nl: "nl-NL" };

export function withDutchVat(net: number) {
  return Math.round(net * 121) / 100;
}

export function formatEuro(amount: number, lang: Lang) {
  const digits = Number.isInteger(amount) ? 0 : 2;
  return new Intl.NumberFormat(locales[lang], {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount);
}
