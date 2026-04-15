"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const timeline = [
    { year: t.about.y1, event: t.about.e1 },
    { year: t.about.y2, event: t.about.e2 },
    { year: t.about.y3, event: t.about.e3 },
    { year: t.about.y4, event: t.about.e4 },
  ];

  return (
    <section id="about" className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gold/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold/60" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
                {t.about.eyebrow}
              </span>
            </div>

            <h2 className="font-display text-display-lg text-cream mb-8">
              {t.about.heading1}<br />
              <span className="italic text-gold/80">{t.about.heading2}</span>
            </h2>

            <div className="flex flex-col gap-5 mb-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-5">
                  <span className="font-display text-gold/60 text-sm font-500 shrink-0 mt-0.5 w-12">
                    {item.year}
                  </span>
                  <div className="h-px w-4 bg-gold/30 mt-2.5 shrink-0" />
                  <p className="text-cream/50 font-body text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {["Amsterdam", "Harvard Business School", "Hebrew University", "Israeli Intelligence Corps", "United Hatzalah"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] tracking-wide uppercase font-body text-cream/35 border border-cream/10 px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column: bio + quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="border-s-2 border-gold/40 ps-8 mb-10">
              <p className="font-display text-2xl lg:text-3xl text-cream/80 italic leading-snug">
                {t.about.quote}
              </p>
            </div>

            <div className="space-y-5 text-cream/55 font-body leading-relaxed text-base">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>
                {t.about.bio3a}
                <span className="text-cream/80">{t.about.bio3network}</span>
                {t.about.bio3b}
              </p>
              <p>{t.about.bio4}</p>
            </div>

            <div className="mt-8 pt-8 border-t border-cream/10 flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/alongildoni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-body text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {t.about.linkedin}
              </a>
              <Link
                href="/contact"
                className="text-cream/40 hover:text-cream font-body text-sm transition-colors duration-200"
              >
                {t.about.getInTouch} →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
