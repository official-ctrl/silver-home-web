import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "상담 신청 | 불곡산숲실버홈",
  description:
    "불곡산숲실버홈에 상담을 신청해보세요. 이름과 연락처, 희망 날짜를 남겨주시면 담당자가 안내해드립니다.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-[#FAFAFA]">
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-32 md:grid-cols-2 md:gap-20 md:px-10">
          <ContactInfo />
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
