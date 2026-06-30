import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/AboutStory";
import TourGallery from "@/components/TourGallery";
import AboutInfo from "@/components/AboutInfo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "시설 소개 | 불곡산숲실버홈",
  description:
    "분당·광주 불곡산 앞에 위치한 불곡산숲실버홈의 시설을 소개합니다. 로비, 프로그램실, 생활공간을 둘러보세요.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="About Us"
          title="시설 소개"
          description="자연이 품은 두 번째 집, 불곡산숲실버홈의 공간을 소개합니다."
          imageSrc="/images/about/hero.jpg"
        />
        <AboutStory />
        <TourGallery />
        <AboutInfo />
      </main>
      <Footer />
    </>
  );
}
