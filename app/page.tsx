import Header from "@/components/Header";
import LocalNav from "@/components/LocalNav";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import StorySection from "@/components/StorySection";
import ValuesGrid from "@/components/ValuesGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <LocalNav />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <PhilosophySection />
        <StorySection />
        <ValuesGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
