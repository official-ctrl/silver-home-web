import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "실버홈 서비스 | 불곡산숲실버홈",
  description: "불곡산숲실버홈이 제공하는 돌봄 서비스를 소개합니다.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Services"
          title="실버홈 서비스"
          description="어르신 한 분 한 분을 위한 불곡산숲실버홈의 돌봄 서비스를 소개합니다."
        />
        <section className="flex flex-1 items-center justify-center px-6 py-32 text-center">
          <p className="text-lg text-[#666666]">콘텐츠 준비 중입니다.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
