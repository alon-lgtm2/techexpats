import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Searches — TechExpats",
  description: "TechExpats operates a small, selective portfolio of active searches at any given time.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold/60" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
                Open Searches
              </span>
            </div>
            <h1 className="font-display text-display-lg text-cream mb-5">
              Current mandates.
            </h1>
            <p className="text-cream/50 font-body text-lg max-w-2xl leading-relaxed">
              TechExpats works on a deliberately small portfolio of searches at any time —
              ensuring each receives our full focus and the weight of our network.
              Active searches are published selectively and with strict confidentiality.
            </p>
          </div>

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
                  in cybersecurity, engineering, data, or technology leadership — particularly with
                  experience in European or Israeli markets — we encourage you to submit your profile.
                  We maintain a trusted pool of candidates and make introductions when the right opportunity emerges.
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder for future searches */}
          <div className="border-t border-cream/8">
            <div className="py-20 text-center">
              <p className="font-display text-2xl text-cream/25 italic mb-3">
                No public listings at this time.
              </p>
              <p className="text-cream/30 font-body text-sm">
                We are currently conducting searches on a confidential basis.
              </p>
            </div>
            <div className="border-b border-cream/8" />
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
