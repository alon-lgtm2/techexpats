import en from "./en";
import nl from "./nl";
import he from "./he";

export type Lang = "en" | "nl" | "he";

export const translations = { en, nl, he } as const;

export type T = typeof en;

export { en, nl, he };
