"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "nl", label: "NL", flag: "🇳🇱" },
  { code: "he", label: "HE", flag: "🇮🇱" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#specialisations", label: "Expertise" },
  { href: "#approach", label: "Our Approach" },
  { href: "/insights", label: "Insights" },
  { href: "/opportunities", label: "Opportunities" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <div className="flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setActiveLang(lang.code)}
                className={`flex items-center gap-1 text-xs font-body tracking-wider transition-all duration-200 px-2 py-1 rounded ${
                  activeLang === lang.code
                    ? "text-gold border border-gold/40 bg-gold/5"
                    : "text-cream/40 hover:text-cream/70 border border-transparent"
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-body font-500 tracking-wide border border-gold/60 text-gold hover:bg-gold hover:text-navy transition-all duration-300 rounded-sm"
          >
            Start a Search
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
          <div className="flex items-center gap-3 pt-2 border-t border-gold/10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setActiveLang(lang.code)}
                className={`flex items-center gap-1 text-xs font-body tracking-wider transition-all px-2 py-1 rounded border ${
                  activeLang === lang.code
                    ? "text-gold border-gold/40 bg-gold/5"
                    : "text-cream/40 border-transparent"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-2 text-center px-5 py-3 text-sm font-body font-500 border border-gold/60 text-gold hover:bg-gold hover:text-navy transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Start a Search
          </Link>
        </div>
      </div>
    </header>
  );
}
