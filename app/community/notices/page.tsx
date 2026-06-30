import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "공지사항 | 불곡산숲실버홈",
  description: "불곡산숲실버홈의 새로운 소식을 안내해드립니다.",
};

export default function NoticesPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Notices"
          title="공지사항"
          description="불곡산숲실버홈의 새로운 소식을 안내해드립니다."
        />
        <section className="flex flex-1 items-center justify-center px-6 py-32 text-center">
          <p className="text-lg text-[#666666]">콘텐츠 준비 중입니다.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
