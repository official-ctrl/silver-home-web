import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "입소안내 | 불곡산숲실버홈",
  description: "불곡산숲실버홈 입소 절차와 안내사항을 확인하세요.",
};

export default function AdmissionPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Admission"
          title="입소안내"
          description="불곡산숲실버홈 입소를 준비 중이신 가족분들을 위한 안내입니다."
        />
        <section className="flex flex-1 items-center justify-center px-6 py-32 text-center">
          <p className="text-lg text-[#666666]">콘텐츠 준비 중입니다.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
