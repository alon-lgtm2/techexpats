import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface InsightMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export interface Insight extends InsightMeta {
  content: string;
}

const contentDir = path.join(process.cwd(), "content/insights");

export function getAllInsights(): InsightMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const insights = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return data as InsightMeta;
  });

  return insights.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getInsightBySlug(slug: string): Insight | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return { ...(data as InsightMeta), content };
}
