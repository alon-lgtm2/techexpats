"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "The Network",
    description:
      "Since 2018, we have cultivated one of Europe's most trusted communities of Israeli tech professionals. Our network spans engineers, operators, and leaders - many with backgrounds that simply cannot be found through conventional search.",
    accent: "Rare access. Real relationships.",
  },
  {
    number: "02",
    title: "The Precision",
    description:
      "We do not fill roles. We solve problems. Every search begins with understanding the mission behind the hire - the context, the culture, the unstated requirements. We then apply a methodology that goes beyond the CV.",
    accent: "Vetted beyond credentials.",
  },
  {
    number: "03",
    title: "The Discretion",
    description:
      "Our clients operate in sensitive markets. We understand that the wrong hire - or the wrong conversation - carries real cost. TechExpats operates with the confidentiality and care that high-stakes searches demand.",
    accent: "Trusted. Always.",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
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
      {/* Card */}
      <div className="border border-gold/10 bg-navy-light/40 p-8 lg:p-10 h-full hover:border-gold/25 transition-colors duration-500">
        {/* Number */}
        <div className="font-display text-6xl font-300 text-gold/10 leading-none mb-6 group-hover:text-gold/20 transition-colors duration-500">
          {pillar.number}
        </div>

        {/* Gold line */}
        <div className="h-px w-10 bg-gold/50 mb-6" />

        {/* Title */}
        <h3 className="font-display text-2xl lg:text-3xl font-500 text-cream mb-5">
          {pillar.title}
        </h3>

        {/* Description */}
        <p className="text-cream/55 font-body text-base leading-relaxed mb-6">
          {pillar.description}
        </p>

        {/* Accent */}
        <p className="text-gold/70 font-display italic text-lg">
          {pillar.accent}
        </p>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
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
              Why TechExpats
            </span>
          </div>
          <h2 className="font-display text-display-lg text-cream">
            Three things that set us apart.
          </h2>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
