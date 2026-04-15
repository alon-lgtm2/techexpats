"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

function StepItem({
  number, title, description, stepLabel, index,
}: {
  number: string; title: string; description: string; stepLabel: string; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="relative ps-12 pb-12 border-s border-gold/15 last:border-transparent last:pb-0"
    >
      <div className="absolute -start-[1px] top-0 flex items-center">
        <div className="w-2 h-2 rounded-full bg-gold" />
      </div>
      <div className="text-xs tracking-[0.2em] text-gold/50 font-body uppercase mb-4">
        {stepLabel} {number}
      </div>
      <h3 className="font-display text-2xl lg:text-3xl text-cream font-500 mb-4">
        {title}
      </h3>
      <p className="text-cream/50 font-body leading-relaxed text-base">
        {description}
      </p>
    </motion.div>
  );
}

export default function Approach() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    { number: "01", title: t.approach.s1title, description: t.approach.s1body },
    { number: "02", title: t.approach.s2title, description: t.approach.s2body },
    { number: "03", title: t.approach.s3title, description: t.approach.s3body },
  ];

  return (
    <section id="approach" className="section-padding bg-[#0D1F35] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-gold/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold/60" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
                {t.approach.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-display-lg text-cream mb-8">
              {t.approach.heading}
            </h2>
            <p className="text-cream/50 font-body leading-relaxed text-base mb-10">
              {t.approach.body}
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 max-w-[60px] bg-gold/30" />
              <p className="font-display italic text-gold/70 text-lg">
                {t.approach.tagline}
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <StepItem
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                stepLabel={t.approach.step}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
