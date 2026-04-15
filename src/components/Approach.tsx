"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Understand the Mission",
    description:
      "We begin with a deep briefing - not just the job description, but the real problem to be solved. What has the company tried before? Why did it fail? What does success actually look like in twelve months? This is where we earn the right to represent you.",
  },
  {
    number: "02",
    title: "Access the Network",
    description:
      "The best candidates are rarely looking. We reach into a trusted network built over years - professionals who won't respond to a LinkedIn message but will take a call from us. Our approach is personal, discreet, and direct.",
  },
  {
    number: "03",
    title: "Deliver the Match",
    description:
      "We present a small shortlist - never a stack of CVs. Each candidate has been vetted against your specific requirements, spoken with directly, and assessed for cultural and operational fit. You spend your time deciding, not filtering.",
  },
];

export default function Approach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="approach" className="section-padding bg-[#0D1F35] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gold/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading */}
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
                How We Work
              </span>
            </div>
            <h2 className="font-display text-display-lg text-cream mb-8">
              A process built for searches that matter.
            </h2>
            <p className="text-cream/50 font-body leading-relaxed text-base mb-10">
              We do not run volume. At any given time, TechExpats works on a carefully
              selected portfolio of searches - ensuring every client receives the
              full weight of our attention and network.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 max-w-[60px] bg-gold/30" />
              <p className="font-display italic text-gold/70 text-lg">
                Boutique by design.
              </p>
            </div>
          </motion.div>

          {/* Right: steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="relative pl-12 pb-12 border-l border-gold/15 last:border-transparent last:pb-0"
    >
      {/* Step number dot */}
      <div className="absolute -left-[1px] top-0 flex items-center">
        <div className="w-2 h-2 rounded-full bg-gold" />
      </div>

      {/* Number */}
      <div className="text-xs tracking-[0.2em] text-gold/50 font-body uppercase mb-4">
        Step {step.number}
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl lg:text-3xl text-cream font-500 mb-4">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-cream/50 font-body leading-relaxed text-base">
        {step.description}
      </p>
    </motion.div>
  );
}
