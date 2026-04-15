"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function WhoWeServe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#0D1F35]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
              Who We Serve
            </span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-display-lg text-cream">
            Two sides of the same rare equation.
          </h2>
        </motion.div>

        {/* Two panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Companies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="group relative border border-gold/15 bg-navy/50 p-10 lg:p-12 hover:border-gold/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-2xl rounded-full" />

            <div className="mb-6 inline-flex items-center gap-2">
              <div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <span className="text-xs tracking-[0.25em] uppercase text-gold/70 font-body">
                For Companies
              </span>
            </div>

            <h3 className="font-display text-3xl lg:text-4xl text-cream mb-5 font-500">
              The hire you can&apos;t afford to get wrong.
            </h3>

            <p className="text-cream/55 font-body leading-relaxed mb-8">
              You have a role that requires more than a standard search. The profile is rare,
              the stakes are high, and conventional recruiters have already failed you.
              We work with a select number of companies at any time — giving each search
              the focus it deserves.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Hard-to-fill senior and specialist roles",
                "Cyber, intelligence-adjacent, and deep tech",
                "Israel-based companies expanding into Europe",
                "Confidential and time-sensitive searches",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-cream/60 font-body text-sm">
                  <span className="text-gold mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact?type=company"
              className="inline-flex items-center gap-2 text-gold font-body text-sm tracking-wide group-hover:gap-3 transition-all duration-300"
            >
              Brief us on your search
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* For Talent */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="group relative border border-cream/8 bg-navy/30 p-10 lg:p-12 hover:border-cream/15 transition-colors duration-500"
          >
            <div className="mb-6 inline-flex items-center gap-2">
              <div className="w-8 h-8 border border-cream/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-cream/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <span className="text-xs tracking-[0.25em] uppercase text-cream/40 font-body">
                For Talent
              </span>
            </div>

            <h3 className="font-display text-3xl lg:text-4xl text-cream mb-5 font-500">
              The move worth making.
            </h3>

            <p className="text-cream/55 font-body leading-relaxed mb-8">
              You&apos;re not looking for just another job. You&apos;re looking for the right opportunity —
              one that matches your background, your ambitions, and the specific kind of challenge
              you&apos;re built for. We don&apos;t flood your inbox. We reach out when there&apos;s a genuine fit.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Senior tech, cyber, and leadership professionals",
                "Israeli professionals based in or relocating to Europe",
                "Those with rare backgrounds that standard boards don't surface",
                "Passive candidates — we approach, not the other way round",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-cream/60 font-body text-sm">
                  <span className="text-cream/30 mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact?type=candidate"
              className="inline-flex items-center gap-2 text-cream/50 hover:text-cream font-body text-sm tracking-wide transition-all duration-300"
            >
              Submit your profile
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
