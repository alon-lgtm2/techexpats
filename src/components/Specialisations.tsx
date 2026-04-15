"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specialisations = [
  {
    title: "Cybersecurity",
    description: "Offensive and defensive security, threat intelligence, SOC leadership, and cyber sales professionals with operational backgrounds.",
    tags: ["Threat Intelligence", "SecOps", "Pen Testing", "CISO", "Cyber Sales"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5a11.955 11.955 0 01-2.598 3.75A11.959 11.959 0 013.598 18 11.955 11.955 0 003 13.5a11.955 11.955 0 01-2.598-3.75A11.959 11.959 0 013.598 6z" />
      </svg>
    ),
  },
  {
    title: "Software Engineering",
    description: "Backend, frontend, and full-stack engineers from seed-stage to enterprise. We specialise in senior and principal-level placements.",
    tags: ["Backend", "Frontend", "Platform", "Staff Eng", "Principal"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Data & AI",
    description: "Data scientists, ML engineers, and AI researchers - particularly those working on applied intelligence in complex, regulated environments.",
    tags: ["ML Engineering", "Data Science", "AI Research", "LLM Ops", "Analytics"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Leadership & C-Suite",
    description: "CTOs, VPs of Engineering, and General Managers who can build teams, navigate ambiguity, and lead in high-pressure technical environments.",
    tags: ["CTO", "VP Engineering", "CPO", "Engineering Manager", "GM"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Sales & Business Development",
    description: "Enterprise sales leaders and BizDev professionals who understand complex technical products - especially in cyber, intelligence, and govtech.",
    tags: ["Enterprise Sales", "BizDev", "Govtech", "Sales Director", "GTM"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Product & Strategy",
    description: "Product managers and strategists who operate at the intersection of technology, market intelligence, and organisational decision-making.",
    tags: ["CPO", "Product Manager", "Strategy", "GTM", "Growth"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
];

export default function Specialisations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specialisations" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold/60" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
                Expertise
              </span>
            </div>
            <h2 className="font-display text-display-lg text-cream">
              Where we operate.
            </h2>
          </div>
          <p className="text-cream/45 font-body text-base max-w-md leading-relaxed">
            We cover the full spectrum of tech roles - with particular depth in domains
            where the right background isn&apos;t just preferred, it&apos;s essential.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialisations.map((spec, i) => (
            <SpecCard key={spec.title} spec={spec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecCard({ spec, index }: { spec: typeof specialisations[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="group border border-cream/6 bg-navy-light/20 p-7 hover:border-gold/20 hover:bg-navy-light/40 transition-all duration-400"
    >
      {/* Icon */}
      <div className="text-gold/60 group-hover:text-gold transition-colors duration-300 mb-5">
        {spec.icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-500 text-cream mb-3">
        {spec.title}
      </h3>

      {/* Description */}
      <p className="text-cream/45 font-body text-sm leading-relaxed mb-5">
        {spec.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {spec.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] tracking-wide uppercase font-body text-gold/50 border border-gold/15 px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
