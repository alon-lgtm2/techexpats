// =============================================================================
//  STRUCTURED DATA (schema.org), one source for every page that carries it.
//
//  Until 2026-10-20 the same two blocks were pasted into the three home pages,
//  with every URL pointing at the Hebrew pages on the bare domain (which 301s
//  to www). Now each language gets its own URLs, and the about and pricing
//  pages carry the blocks too, so Google can connect the person, the business
//  and the prices in English and Dutch as well as Hebrew.
//
//  The pricing page and its offers share the same price data.
// =============================================================================
import { localizePath, type Lang } from "../i18n";

import { coachingPrices, withDutchVat } from "./pricing";

const SITE = "https://www.techexpats.nl";
const url = (path: string, lang: Lang) => SITE + localizePath(path, lang).replace(/\/?$/, "/");

const ORG_ID = SITE + "/#business";
const PERSON_ID = SITE + "/#alon";

const DESC: Record<Lang, string> = {
  en: "Career coaching and job search coaching for expats and internationals in the Netherlands, and headhunting for the companies hiring them. Amsterdam, since 2018.",
  nl: "Loopbaancoaching en begeleiding bij het zoeken naar werk voor expats en internationals in Nederland, en headhunting voor de bedrijven die hen willen aannemen. Amsterdam, sinds 2018.",
  he: "ליווי קריירה וחיפוש עבודה בהולנד, והשמה בכירה לחברות שמגייסות. אמסטרדם, מאז 2018.",
};

export function business(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "TechExpats",
    url: url("/", lang),
    description: DESC[lang],
    image: SITE + "/og-default.jpg",
    areaServed: [{ "@type": "Country", name: "Netherlands" }, { "@type": "Place", name: "Europe" }],
    address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" },
    founder: { "@id": PERSON_ID },
    knowsLanguage: ["en", "nl", "he"],
    priceRange: "EUR 190 to 2590",
    sameAs: ["https://israelis.nl"],
  };
}

export function person(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Alon Gildoni",
    url: url("/about", lang),
    image: SITE + "/alon-portrait.jpg",
    jobTitle: lang === "nl" ? "Loopbaancoach en headhunter" : "Career coach and headhunter",
    worksFor: { "@id": ORG_ID },
    homeLocation: { "@type": "Place", name: "Amsterdam, Netherlands" },
    knowsLanguage: ["en", "nl", "he"],
    knowsAbout: [
      "Dutch job market",
      "job search in the Netherlands",
      "hiring in the Netherlands",
      "highly skilled migrant permit",
      "the 30% ruling",
      "career coaching for expats",
      "technical recruitment",
    ],
  };
}

const OFFER_NAMES: Record<Lang, Record<keyof typeof coachingPrices, string>> = {
  en: {
    diagnosis: "Diagnosis and roadmap",
    working: "Working session",
    interview: "Mock interview",
  },
  nl: {
    diagnosis: "Diagnose en routekaart",
    working: "Werksessie",
    interview: "Proefsollicitatie",
  },
  he: {
    diagnosis: "אבחון ומפה",
    working: "ישיבת עבודה",
    interview: "סימולציית ראיון",
  },
};

export function pricing(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: lang === "nl" ? "Loopbaancoaching in Nederland" : lang === "he" ? "ליווי קריירה בהולנד" : "Career coaching in the Netherlands",
    serviceType: "Career coaching",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Netherlands" },
    url: url("/pricing", lang),
    offers: (Object.keys(coachingPrices) as (keyof typeof coachingPrices)[]).map((key) => {
      const price = withDutchVat(coachingPrices[key]).toFixed(2);
      return {
        "@type": "Offer",
        name: OFFER_NAMES[lang][key],
        price,
        priceCurrency: "EUR",
        priceSpecification: { "@type": "PriceSpecification", price, priceCurrency: "EUR", valueAddedTaxIncluded: true },
        url: url("/pricing", lang),
      };
    }),
  };
}
