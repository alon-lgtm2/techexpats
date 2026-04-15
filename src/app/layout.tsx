import type { Metadata } from "next";
import { Playfair_Display, Inter, Heebo } from "next/font/google";
import "./globals.css";

const cormorant = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechExpats — The Right Person Exists. We Know Them.",
  description:
    "TechExpats is a boutique tech recruitment agency specialising in elite talent at the intersection of the Israeli tech ecosystem and European markets. Trusted since 2018.",
  keywords: [
    "tech recruitment",
    "boutique recruiter",
    "Israeli tech",
    "expat talent",
    "cybersecurity recruitment",
    "Amsterdam",
    "Netherlands",
    "Europe",
  ],
  openGraph: {
    title: "TechExpats — The Right Person Exists. We Know Them.",
    description: "Boutique tech recruitment. Elite access. Trusted since 2018.",
    url: "https://techexpats.nl",
    siteName: "TechExpats",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${heebo.variable}`}
    >
      <body className="font-body antialiased bg-navy text-cream">
        {children}
      </body>
    </html>
  );
}
