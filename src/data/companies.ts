// =============================================================================
//  ISRAELI COMPANIES — NL / EU directory (curated starter set)
// -----------------------------------------------------------------------------
//  A starting, curated selection of well-known Israeli-founded companies with
//  international / European footprint, used as the backbone of a target-company
//  search. This is NOT exhaustive and is meant to grow.
//
//  IMPORTANT (accuracy): presence notes are general. Always confirm current
//  openings AND visa-sponsorship status directly. A company can only sponsor a
//  highly-skilled-migrant visa if it is an IND "recognised sponsor" — verify on
//  https://ind.nl/en/public-register-recognised-sponsors
//
//  TO EXPAND (Alon): drop a spreadsheet in public/data/ and we can replace this
//  seed with the full list, or paste rows and we extend this file.
// =============================================================================

export type Sector =
  | "Cybersecurity"
  | "Fintech"
  | "SaaS / Productivity"
  | "Adtech / Marketing"
  | "E-commerce"
  | "Data / AI"
  | "Insurtech"
  | "DevOps"
  | "Mobility";

export interface Company {
  name: string;
  sector: Sector;
  note: string;        // short, general descriptor (no unverified office claims)
  url: string;
}

export const companies: Company[] = [
  { name: "Wix", sector: "SaaS / Productivity", note: "Website & web app platform", url: "https://www.wix.com" },
  { name: "monday.com", sector: "SaaS / Productivity", note: "Work management platform", url: "https://monday.com" },
  { name: "Lemonade", sector: "Insurtech", note: "AI-driven insurance, European operations", url: "https://www.lemonade.com" },
  { name: "Payoneer", sector: "Fintech", note: "Cross-border payments", url: "https://www.payoneer.com" },
  { name: "Melio", sector: "Fintech", note: "B2B payments", url: "https://www.meliopayments.com" },
  { name: "Check Point", sector: "Cybersecurity", note: "Network & cloud security", url: "https://www.checkpoint.com" },
  { name: "Cellebrite", sector: "Cybersecurity", note: "Digital intelligence", url: "https://www.cellebrite.com" },
  { name: "JFrog", sector: "DevOps", note: "Software supply chain / DevOps", url: "https://jfrog.com" },
  { name: "Fiverr", sector: "E-commerce", note: "Freelance services marketplace", url: "https://www.fiverr.com" },
  { name: "Riskified", sector: "E-commerce", note: "E-commerce fraud prevention", url: "https://www.riskified.com" },
  { name: "Yotpo", sector: "Adtech / Marketing", note: "E-commerce marketing platform", url: "https://www.yotpo.com" },
  { name: "Taboola", sector: "Adtech / Marketing", note: "Content recommendation", url: "https://www.taboola.com" },
  { name: "Outbrain", sector: "Adtech / Marketing", note: "Content discovery", url: "https://www.outbrain.com" },
  { name: "Similarweb", sector: "Data / AI", note: "Digital market intelligence", url: "https://www.similarweb.com" },
  { name: "Lightricks", sector: "Data / AI", note: "AI creative apps", url: "https://www.lightricks.com" },
  { name: "WalkMe", sector: "SaaS / Productivity", note: "Digital adoption platform", url: "https://www.walkme.com" },
  { name: "Gong", sector: "Data / AI", note: "Revenue intelligence", url: "https://www.gong.io" },
  { name: "Via", sector: "Mobility", note: "Transit technology", url: "https://ridewithvia.com" },
];

export const sectors: Sector[] = [
  "Cybersecurity", "Fintech", "SaaS / Productivity", "Adtech / Marketing",
  "E-commerce", "Data / AI", "Insurtech", "DevOps", "Mobility",
];
