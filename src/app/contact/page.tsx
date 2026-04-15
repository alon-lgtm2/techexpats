"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function ContactForm() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") || "company";
  const [formType, setFormType] = useState<"company" | "candidate">(defaultType as "company" | "candidate");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdydjjb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
              {t.contact.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-display-lg text-cream mb-5">
            {t.contact.heading}
          </h1>
          <p className="text-cream/50 font-body leading-relaxed">
            {t.contact.body}
          </p>
        </motion.div>

        {/* Type toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-0 mb-10 border border-gold/15 w-fit"
        >
          {(["company", "candidate"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFormType(tab)}
              className={`px-6 py-3 text-sm font-body tracking-wide transition-all duration-300 ${
                formType === tab
                  ? "bg-gold text-navy font-600"
                  : "text-cream/50 hover:text-cream"
              }`}
            >
              {tab === "company" ? t.contact.tabCompany : t.contact.tabCandidate}
            </button>
          ))}
        </motion.div>

        {/* Form */}
        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <input type="hidden" name="type" value={formType} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label={t.contact.fName} name="name" required />
              <Field label={t.contact.fEmail} name="email" type="email" required />
            </div>

            {formType === "company" ? (
              <>
                <Field label={t.contact.fCompany} name="company" required />
                <Field label={t.contact.fRole} name="role" required placeholder={t.contact.fRolePh} />
                <Field
                  label={t.contact.fChallenge}
                  name="challenge"
                  multiline
                  placeholder={t.contact.fChallengePh}
                />
                <Field label={t.contact.fTimeline} name="timeline" placeholder={t.contact.fTimelinePh} />
              </>
            ) : (
              <>
                <Field label={t.contact.fCurrentRole} name="current_role" />
                <Field label={t.contact.fBackground} name="background" multiline placeholder={t.contact.fBackgroundPh} />
                <Field label={t.contact.fLocation} name="location" placeholder={t.contact.fLocationPh} />
              </>
            )}

            <Field
              label={t.contact.fMessage}
              name="message"
              multiline
              placeholder={t.contact.fMessagePh}
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={sending}
                className="px-8 py-4 bg-gold text-navy font-body font-600 text-sm tracking-wide hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? t.contact.sending : t.contact.submit}
              </button>
              <p className="text-cream/30 text-xs font-body mt-4">
                {t.contact.disclaimer}
              </p>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-gold/20 bg-gold/5 p-10 text-center"
          >
            <div className="text-gold text-4xl mb-5 font-display">{t.contact.successHeading}</div>
            <p className="text-cream/60 font-body leading-relaxed">
              {t.contact.successBody}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-navy pt-32" />}>
        <ContactForm />
      </Suspense>
      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  multiline = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  placeholder?: string;
}) {
  const baseClass =
    "w-full bg-transparent border border-cream/10 text-cream font-body text-sm px-4 py-3 placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors duration-200";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs tracking-[0.15em] uppercase font-body text-cream/40">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}
