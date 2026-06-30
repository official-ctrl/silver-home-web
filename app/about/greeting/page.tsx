import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "대표 인사말 | 불곡산숲실버홈",
  description: "불곡산숲실버홈 대표의 인사말입니다.",
};

export default function GreetingPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Greeting"
          title="대표 인사말"
          description="소중한 가족을 모시는 마음으로 불곡산숲실버홈을 운영하고 있습니다."
        />
        <section className="flex flex-1 items-center justify-center px-6 py-32 text-center">
          <p className="text-lg text-[#666666]">콘텐츠 준비 중입니다.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
