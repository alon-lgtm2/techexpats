"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n";
import FlagUK from "./flags/FlagUK";
import FlagNL from "./flags/FlagNL";
import FlagIL from "./flags/FlagIL";

const languages: { code: Lang; Flag: React.FC<{ className?: string }>; label: string }[] = [
  { code: "en", Flag: FlagUK, label: "EN" },
  { code: "nl", Flag: FlagNL, label: "NL" },
  { code: "he", Flag: FlagIL, label: "HE" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#specialisations", label: t.nav.expertise },
    { href: "#approach", label: t.nav.approach },
    { href: "/insights", label: t.nav.insights },
    { href: "/opportunities", label: t.nav.opportunities },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-600 tracking-wide text-cream group-hover:text-gold transition-colors duration-300">
            TechExpats
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold/70 font-body font-300 mt-0.5">
            Elite Tech Recruitment
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-cream/70 hover:text-cream transition-colors duration-200 relative group font-body"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right: language switcher + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language flags */}
          <div className="flex items-center gap-1.5">
            {languages.map(({ code, Flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-label={label}
                className={`flex items-center gap-1.5 text-xs font-body tracking-wider transition-all duration-200 px-2 py-1 rounded ${
                  lang === code
                    ? "border border-gold/50 bg-gold/8"
                    : "border border-transparent hover:border-cream/20"
                }`}
              >
                <Flag className="w-5 h-3.5 rounded-[2px] shadow-sm" />
                <span className={lang === code ? "text-gold" : "text-cream/40 hover:text-cream/70"}>
                  {label}
                </span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-body font-500 tracking-wide border border-gold/60 text-gold hover:bg-gold hover:text-navy transition-all duration-300 rounded-sm"
          >
            {t.nav.startSearch}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-cream/80 hover:text-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream/70 hover:text-cream font-body text-base transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-gold/10">
            {languages.map(({ code, Flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`flex items-center gap-1.5 text-xs font-body tracking-wider transition-all px-2 py-1.5 rounded border ${
                  lang === code
                    ? "text-gold border-gold/40 bg-gold/5"
                    : "text-cream/40 border-transparent"
                }`}
              >
                <Flag className="w-5 h-3.5 rounded-[2px]" />
                <span>{label}</span>
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-2 text-center px-5 py-3 text-sm font-body font-500 border border-gold/60 text-gold hover:bg-gold hover:text-navy transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.startSearch}
          </Link>
        </div>
      </div>
    </header>
  );
}
