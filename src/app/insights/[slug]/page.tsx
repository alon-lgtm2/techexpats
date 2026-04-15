import { getAllInsights, getInsightBySlug } from "@/lib/insights";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const insights = getAllInsights();
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = getInsightBySlug(params.slug);
  if (!insight) return {};
  return {
    title: `${insight.title} - TechExpats`,
    description: insight.excerpt,
  };
}

export default function InsightPage({ params }: Props) {
  const insight = getInsightBySlug(params.slug);
  if (!insight) notFound();

  // Simple markdown-to-HTML renderer (paragraphs, headings, bold)
  const html = renderMarkdown(insight.content);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {/* Back */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-cream/35 hover:text-cream font-body text-sm mb-12 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Insights
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-wide uppercase font-body text-gold/60">
              {insight.category}
            </span>
            <span className="text-cream/20">·</span>
            <span className="text-cream/30 font-body text-sm">
              {new Date(insight.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-cream/20">·</span>
            <span className="text-cream/30 font-body text-sm">{insight.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-display-lg text-cream mb-8 leading-tight">
            {insight.title}
          </h1>

          {/* Gold divider */}
          <div className="h-px w-16 bg-gold/40 mb-10" />

          {/* Content */}
          <div
            className="prose-techexpats"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Footer CTA */}
          <div className="mt-16 pt-10 border-t border-cream/10">
            <p className="font-display italic text-xl text-gold/70 mb-6">
              The right person exists. We know them.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold font-body text-sm hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Start a conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function renderMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl lg:text-3xl text-cream mt-12 mb-4 font-500">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl text-cream mt-8 mb-3 font-500">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-cream font-600">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^---$/gm, '<hr class="border-cream/10 my-8" />')
    .replace(/\n\n/g, '</p><p class="text-cream/55 font-body leading-relaxed text-base mb-5">')
    .replace(/^/, '<p class="text-cream/55 font-body leading-relaxed text-base mb-5">')
    .replace(/$/, '</p>');
}
