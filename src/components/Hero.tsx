"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0D1F35] pointer-events-none" />

      {/* Subtle radial light from top-right */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(201,160,80,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,80,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80 font-body">
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="font-display text-display-xl text-cream mb-6 leading-[1.05]"
          >
            {t.hero.headline1}
            <br />
            <span className="text-gold-shimmer italic">{t.hero.headline2}</span>
            <br />
            {t.hero.headline3}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="text-cream/60 font-body text-lg leading-relaxed max-w-2xl mb-10"
          >
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact?type=company"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-gold text-navy font-body font-600 text-sm tracking-wide hover:bg-gold-light transition-all duration-300"
            >
              {t.hero.ctaCompany}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact?type=candidate"
              className="inline-flex items-center gap-3 px-7 py-4 border border-cream/20 text-cream/80 font-body font-400 text-sm tracking-wide hover:border-gold/50 hover:text-cream transition-all duration-300"
            >
              {t.hero.ctaCandidate}
            </Link>
          </motion.div>

          {/* Credentials bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="mt-16 pt-8 border-t border-cream/10 flex flex-wrap gap-8 items-center"
          >
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
              { value: t.hero.stat4Value, label: t.hero.stat4Label },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-xl text-gold font-600">{stat.value}</span>
                <span className="text-cream/35 text-xs tracking-wide font-body uppercase mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-gold/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
