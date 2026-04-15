"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
                The Firm
              </span>
            </div>

            <h2 className="font-display text-display-lg text-cream mb-8">
              Built on trust.<br />
              <span className="italic text-gold/80">Since 2018.</span>
            </h2>

            {/* Timeline markers */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                { year: "2018", event: "Founded the Israeli Tech Network in the Netherlands" },
                { year: "2020", event: "Began placing senior tech professionals across Europe" },
                { year: "2022", event: "Expanded focus to cyber and intelligence-adjacent roles" },
                { year: "2024", event: "Recognised as a trusted connector across the Israel–EU corridor" },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-5">
                  <span className="font-display text-gold/60 text-sm font-500 shrink-0 mt-0.5 w-12">
                    {item.year}
                  </span>
                  <div className="h-px w-4 bg-gold/30 mt-2.5 shrink-0" />
                  <p className="text-cream/50 font-body text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>

            {/* Credential badges */}
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
            {/* Pull quote */}
            <div className="border-l-2 border-gold/40 pl-8 mb-10">
              <p className="font-display text-2xl lg:text-3xl text-cream/80 italic leading-snug">
                &ldquo;The right person for this role is not looking. They are working - at the
                intersection of technology, trust, and operational excellence. We know where to find them.&rdquo;
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-5 text-cream/55 font-body leading-relaxed text-base">
              <p>
                TechExpats was born from a simple observation: the most consequential hires
                in tech - the ones that change the trajectory of a company - require a recruiter
                with genuine access, not just a database subscription.
              </p>
              <p>
                Our founder, Alon Gildoni, is a tech executive with nearly two decades of
                experience building product organisations at scale. A former intelligence officer
                and Harvard Business School alumnus, he has spent his career at the intersection
                of technology, community, and trust.
              </p>
              <p>
                In 2018, Alon established the{" "}
                <span className="text-cream/80">Israeli Tech Network in the Netherlands</span> -
                one of Europe&apos;s most active communities connecting Israeli tech professionals
                with leading European companies. That network became the foundation of TechExpats.
              </p>
              <p>
                Today, TechExpats operates as a boutique firm - small by design,
                comprehensive by reputation, and trusted by the companies and professionals
                who require more than what a standard search can deliver.
              </p>
            </div>

            {/* LinkedIn link */}
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
                Alon Gildoni
              </a>
              <Link
                href="/contact"
                className="text-cream/40 hover:text-cream font-body text-sm transition-colors duration-200"
              >
                Get in touch →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
