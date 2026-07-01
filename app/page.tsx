import Header from "@/components/Header";
import LocalNav from "@/components/LocalNav";
import HeroSection from "@/components/HeroSection";
import ValuesGrid from "@/components/ValuesGrid";
import EmpathySection from "@/components/EmpathySection";
import StorySection from "@/components/StorySection";
import PhilosophySection from "@/components/PhilosophySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <LocalNav />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <ValuesGrid />
        <EmpathySection />
        <StorySection />
        <PhilosophySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
