"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import type { InsightMeta } from "@/lib/insights";

export default function InsightsPreview({ insights }: { insights: InsightMeta[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold/60" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
                Insights
              </span>
            </div>
            <h2 className="font-display text-display-lg text-cream">
              Perspectives.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold font-body text-sm tracking-wide transition-colors duration-200 pb-1"
          >
            All articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.slice(0, 3).map((insight, i) => (
            <motion.div
              key={insight.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              <Link
                href={`/insights/${insight.slug}`}
                className="group flex flex-col h-full border border-cream/6 bg-navy-light/20 p-7 hover:border-gold/20 hover:bg-navy-light/40 transition-all duration-400"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] tracking-wide uppercase font-body text-gold/50 border border-gold/15 px-2 py-0.5">
                    {insight.category}
                  </span>
                  <span className="text-cream/25 font-body text-xs">
                    {new Date(insight.date).getFullYear()}
                  </span>
                </div>

                <h3 className="font-display text-xl font-500 text-cream group-hover:text-gold/90 transition-colors duration-300 mb-3 flex-1">
                  {insight.title}
                </h3>

                <p className="text-cream/40 font-body text-sm leading-relaxed mb-6">
                  {insight.excerpt}
                </p>

                <div className="flex items-center gap-2 text-gold/40 group-hover:text-gold/70 transition-colors duration-300 text-sm font-body">
                  <span>Read</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
