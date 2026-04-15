"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactCTA() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-[#0A1520]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/8 blur-[100px] rounded-full" />
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
              {t.cta.eyebrow}
            </span>
            <div className="h-px w-8 bg-gold/60" />
          </div>

          <h2 className="font-display text-display-lg text-cream mb-6">
            {t.cta.heading}
          </h2>

          <p className="text-cream/50 font-body text-lg leading-relaxed max-w-xl mx-auto mb-12">
            {t.cta.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=company"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-navy font-body font-600 text-sm tracking-wide hover:bg-gold-light transition-all duration-300"
            >
              {t.cta.primary}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`mailto:${t.cta.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/15 text-cream/60 font-body text-sm tracking-wide hover:border-cream/30 hover:text-cream transition-all duration-300"
            >
              {t.cta.email}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
