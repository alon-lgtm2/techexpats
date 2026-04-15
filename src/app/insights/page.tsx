import { getAllInsights } from "@/lib/insights";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsHeader from "@/components/InsightsHeader";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights - TechExpats",
  description: "Perspectives on tech recruitment, the talent markets we operate in, and what makes exceptional hiring different.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <InsightsHeader />

          {/* Articles */}
          <div className="flex flex-col gap-0">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block border-t border-cream/8 py-10 hover:border-gold/20 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="text-cream/25 font-body text-sm">
                      {new Date(insight.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                      })}
                    </div>
                    <div className="text-gold/50 font-body text-xs tracking-wide uppercase mt-1">
                      {insight.category}
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h2 className="font-display text-2xl lg:text-3xl text-cream group-hover:text-gold/90 transition-colors duration-300 mb-3 font-500">
                      {insight.title}
                    </h2>
                    <p className="text-cream/45 font-body text-base leading-relaxed">
                      {insight.excerpt}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-start">
                    <div className="flex items-center gap-2 text-gold/50 group-hover:text-gold transition-colors duration-300 text-sm font-body">
                      <span>{insight.readTime}</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="border-t border-cream/8" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
