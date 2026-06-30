import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "자연친화 프로그램 | 불곡산숲실버홈",
  description: "불곡산숲실버홈의 자연친화 프로그램을 소개합니다.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Programs"
          title="자연친화 프로그램"
          description="숲이 주는 안정감 속에서 진행되는 불곡산숲실버홈의 프로그램을 소개합니다."
        />
        <section className="flex flex-1 items-center justify-center px-6 py-32 text-center">
          <p className="text-lg text-[#666666]">콘텐츠 준비 중입니다.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
