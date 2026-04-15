import Link from "next/link";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#specialisations", label: "Expertise" },
  { href: "#approach", label: "Our Approach" },
  { href: "/insights", label: "Insights" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
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
              Connecting exceptional tech professionals with the companies that need them most.
              Amsterdam-based. Globally networked. Trusted since 2018.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold/70 font-body mb-5">
              Navigation
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
              Get in Touch
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
                LinkedIn — Alon Gildoni
              </a>
              <span className="text-cream/30">Amsterdam, Netherlands</span>
            </div>

            {/* Language flags */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-base">🇬🇧</span>
              <span className="text-base">🇳🇱</span>
              <span className="text-base">🇮🇱</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-xs font-body tracking-wide">
            © TechExpats 2018–{new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-cream/25 hover:text-cream/50 text-xs font-body transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-cream/25 hover:text-cream/50 text-xs font-body transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
