import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import WhoWeServe from "@/components/WhoWeServe";
import Specialisations from "@/components/Specialisations";
import Approach from "@/components/Approach";
import About from "@/components/About";
import InsightsPreview from "@/components/InsightsPreview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { getAllInsights } from "@/lib/insights";

export default function Home() {
  const insights = getAllInsights();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <WhoWeServe />
        <Specialisations />
        <Approach />
        <About />
        <InsightsPreview insights={insights} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
