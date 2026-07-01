import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "대표 인사말 | 불곡산숲실버홈",
  description:
    "숲속에서 가족처럼, 내 살던 곳 가까이. 불곡산숲실버홈 대표의 인사말입니다.",
};

const PARAGRAPHS = [
  "부모님을 잘 모시고 싶은 마음은 우리 모두 같을 것입니다. 그 진심을 담아, 30년간 몸이 불편하신 분들을 곁에서 모셔온 경험을 바탕으로 불곡산숲실버홈을 열었습니다.",
  "49인 규모의 적정한 시설에서, 숲속에서 가족처럼 그리고 내 살던 곳 가까이에서 부모님을 모시고자 합니다.",
  "이곳에 오신 모든 어르신이 건강하고 행복하게 지내실 수 있도록 정성을 다하겠습니다.",
  "우리의 인생은 아름다운 이야기로 남아야 한다고 생각합니다. 특히 노년의 시간이 더욱 아름다운 이야기로 남기를 기도하는 마음으로, 하루하루를 함께하겠습니다.",
  "맑은 공기를 지닌 불곡산 숲 바로 앞에 자리한 불곡산숲실버홈은, 정성을 다한 시설과 아름다운 자연 안에서 어르신을 모시는 소명을 다하고자 합니다.",
];

export default function GreetingPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Greeting"
          title="대표 인사말"
          description="숲속에서 가족처럼, 내 살던 곳 가까이"
        />

        <section className="mx-auto w-full max-w-3xl px-6 py-24 md:px-10 md:py-32">
          {/* 인사 헤드라인 */}
          <p className="text-sm font-medium uppercase tracking-wide text-[#4a7c59]">
            Welcome
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#222222] md:text-3xl">
            불곡산숲실버홈을 찾아 주신 여러분을 환영합니다.
          </h2>

          {/* 구분선 */}
          <div className="mt-8 h-px w-16 bg-[#4a7c59]" />

          {/* 본문 */}
          <div className="mt-8 space-y-6">
            {PARAGRAPHS.map((text, i) => (
              <p
                key={i}
                className="text-base leading-loose text-[#666666] md:text-lg"
              >
                {text}
              </p>
            ))}
          </div>

          {/* 서명 */}
          <div className="mt-16 border-t border-gray-100 pt-10">
            <p className="text-sm text-[#666666]">불곡산숲실버홈</p>
            <p className="mt-1 text-lg font-semibold text-[#222222]">
              대표 드림
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
