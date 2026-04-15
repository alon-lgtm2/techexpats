import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OpportunitiesHeader from "@/components/OpportunitiesHeader";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Searches - TechExpats",
  description: "TechExpats operates a small, selective portfolio of active searches at any given time.",
};

const mandates = [
  {
    sector: "Cyber-Intelligence",
    title: "Head of European Expansion",
    location: "Amsterdam",
    seniority: "Executive",
    discretion: "Confidential",
    teaser:
      "Scaling European commercial footprint for a growth-stage cyber-intelligence firm serving national security customers. Intelligence-community fluency essential; executive track record selling to governments preferred.",
  },
  {
    sector: "National Security Tech",
    title: "Director of Government Business Development",
    location: "The Hague",
    seniority: "Senior Leadership",
    discretion: "Stealth Client",
    teaser:
      "Owning EU and NATO-adjacent public sector capture for a mission-critical platform. Established network across Dutch MoD, NCTV, Europol, and EU defence agencies non-negotiable.",
  },
  {
    sector: "Offensive R&D",
    title: "Principal Security Researcher",
    location: "Amsterdam · Hybrid",
    seniority: "Principal IC",
    discretion: "Confidential",
    teaser:
      "Senior individual contributor role at a dual-use cyber company with Israeli origins and a European base. Published CVEs, advanced exploitation track record, or signals-intelligence technical pedigree.",
  },
  {
    sector: "Threat Intelligence",
    title: "VP Sales, EMEA Public Sector",
    location: "The Hague",
    seniority: "Executive",
    discretion: "Confidential",
    teaser:
      "Leading European public sector revenue for a threat intelligence platform already deployed by allied governments. Candidates must bring direct relationships with senior buyers across EU defence, intelligence, and law enforcement.",
  },
  {
    sector: "Dual-Use Cyber",
    title: "Senior Product Manager, National Security Platform",
    location: "Eindhoven · Amsterdam",
    seniority: "Senior",
    discretion: "Confidential",
    teaser:
      "Driving roadmap for a platform deployed by government customers across Europe and allied jurisdictions. Background bridging intelligence tradecraft and commercial product development.",
  },
];

export default function OpportunitiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <OpportunitiesHeader />

          {/* Notice */}
          <div className="border border-gold/15 bg-gold/3 p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-gold/50 mt-0.5 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-cream/70 font-body text-sm leading-relaxed">
                  Most of our active searches are not publicly listed. If you are a senior professional
                  in cybersecurity, engineering, data, or technology leadership - we encourage you to
                  submit your profile. We maintain a trusted pool of candidates and make introductions
                  when the right opportunity emerges.
                </p>
              </div>
            </div>
          </div>

          {/* Mandate cards */}
          <div className="border-t border-cream/8 pt-12 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mandates.map((m) => (
                <div
                  key={m.title}
                  className="group flex flex-col h-full border border-cream/6 bg-navy-light/20 p-7 hover:border-gold/20 hover:bg-navy-light/40 transition-all duration-400"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] tracking-wide uppercase font-body text-gold/50 border border-gold/15 px-2 py-0.5">
                      {m.sector}
                    </span>
                    <span className="text-cream/25 font-body text-xs tracking-widest uppercase">
                      {m.discretion}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-500 text-cream group-hover:text-gold/90 transition-colors duration-300 mb-3">
                    {m.title}
                  </h3>

                  <div className="flex items-center gap-2 text-cream/50 font-body text-xs mb-4">
                    <span>{m.location}</span>
                    <span className="text-cream/20">·</span>
                    <span>{m.seniority}</span>
                  </div>

                  <p className="text-cream/55 font-body text-sm leading-relaxed mb-6 flex-1">
                    {m.teaser}
                  </p>

                  <Link
                    href="/contact?type=candidate"
                    className="inline-flex items-center gap-2 text-gold/50 group-hover:text-gold font-body text-sm transition-colors duration-300"
                  >
                    Enquire in confidence
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gold/15 p-8">
              <h3 className="font-display text-xl text-cream mb-3 font-500">
                For Companies
              </h3>
              <p className="text-cream/45 font-body text-sm leading-relaxed mb-6">
                Brief us on a search. We will assess whether it is a fit for our network
                and current capacity, and respond within 24 hours.
              </p>
              <Link
                href="/contact?type=company"
                className="inline-flex items-center gap-2 text-gold font-body text-sm hover:gap-3 transition-all duration-300"
              >
                Submit a brief
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="border border-cream/8 p-8">
              <h3 className="font-display text-xl text-cream mb-3 font-500">
                For Candidates
              </h3>
              <p className="text-cream/45 font-body text-sm leading-relaxed mb-6">
                Share your background. If you are the kind of professional we work with,
                we will be in touch when the right opportunity arises.
              </p>
              <Link
                href="/contact?type=candidate"
                className="inline-flex items-center gap-2 text-cream/40 hover:text-cream font-body text-sm transition-all duration-300"
              >
                Submit your profile
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
