"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import FlagUK from "./flags/FlagUK";
import FlagNL from "./flags/FlagNL";
import FlagIL from "./flags/FlagIL";
import type { Lang } from "@/i18n";

const languages: { code: Lang; Flag: React.FC<{ className?: string }> }[] = [
  { code: "en", Flag: FlagUK },
  { code: "nl", Flag: FlagNL },
  { code: "he", Flag: FlagIL },
];

export default function Footer() {
  const { t, lang, setLang } = useLanguage();

  const footerLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#specialisations", label: t.nav.expertise },
    { href: "#approach", label: t.nav.approach },
    { href: "/insights", label: t.nav.insights },
    { href: "/opportunities", label: t.nav.opportunities },
    { href: "/contact", label: t.contact.eyebrow },
  ];

  return (
    <footer className="bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="font-display text-2xl font-600 text-cream">TechExpats</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold/70 font-body mt-1">
                Elite Tech Recruitment
              </div>
            </div>
            <p className="text-muted text-sm font-body leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold/70 font-body mb-5">
              {t.footer.navHeading}
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-cream text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold/70 font-body mb-5">
              {t.footer.contactHeading}
            </h4>
            <div className="flex flex-col gap-3 text-sm font-body">
              <a
                href="mailto:alon@gildoni.com"
                className="text-cream/50 hover:text-gold transition-colors duration-200"
              >
                alon@gildoni.com
              </a>
              <a
                href="https://www.linkedin.com/in/alongildoni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors duration-200"
              >
                LinkedIn - Alon Gildoni
              </a>
              <span className="text-cream/30">{t.footer.location}</span>
            </div>

            {/* Language flags */}
            <div className="flex items-center gap-2 mt-6">
              {languages.map(({ code, Flag }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`p-1 rounded transition-all duration-200 ${
                    lang === code ? "ring-1 ring-gold/60" : "opacity-50 hover:opacity-80"
                  }`}
                  aria-label={code.toUpperCase()}
                >
                  <Flag className="w-6 h-4 rounded-[2px]" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-xs font-body tracking-wide">
            &copy; TechExpats 2018&ndash;{new Date().getFullYear()}. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-cream/25 hover:text-cream/50 text-xs font-body transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-cream/25 hover:text-cream/50 text-xs font-body transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
