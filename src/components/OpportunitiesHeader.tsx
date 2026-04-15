"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function OpportunitiesHeader() {
  const { t } = useLanguage();
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-8 bg-gold/60" />
        <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
          {t.opps.eyebrow}
        </span>
      </div>
      <h1 className="font-display text-display-lg text-cream mb-5">
        {t.opps.heading}
      </h1>
      <p className="text-cream/50 font-body text-lg max-w-2xl leading-relaxed">
        {t.opps.body}
      </p>
    </div>
  );
}
