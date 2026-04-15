"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

function PillarCard({
  number, title, description, accent, index,
}: {
  number: string; title: string; description: string; accent: string; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: index * 0.15 }}
      className="relative group"
    >
      <div className="border border-gold/10 bg-navy-light/40 p-8 lg:p-10 h-full hover:border-gold/25 transition-colors duration-500">
        <div className="font-display text-6xl font-300 text-gold/10 leading-none mb-6 group-hover:text-gold/20 transition-colors duration-500">
          {number}
        </div>
        <div className="h-px w-10 bg-gold/50 mb-6" />
        <h3 className="font-display text-2xl lg:text-3xl font-500 text-cream mb-5">
          {title}
        </h3>
        <p className="text-cream/55 font-body text-base leading-relaxed mb-6">
          {description}
        </p>
        <p className="text-gold/70 font-display italic text-lg">
          {accent}
        </p>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  const { t } = useLanguage();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  const pillars = [
    { number: t.pillars.n1, title: t.pillars.t1, description: t.pillars.d1, accent: t.pillars.a1 },
    { number: t.pillars.n2, title: t.pillars.t2, description: t.pillars.d2, accent: t.pillars.a2 },
    { number: t.pillars.n3, title: t.pillars.t3, description: t.pillars.d3, accent: t.pillars.a3 },
  ];

  return (
    <section className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
              {t.pillars.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-display-lg text-cream">
            {t.pillars.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.number} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
