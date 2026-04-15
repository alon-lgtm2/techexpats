"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageEffect() {
  const { lang } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  return null;
}
