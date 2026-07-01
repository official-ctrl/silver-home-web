"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_APPLE } from "@/lib/motion";

const TRUST_ITEMS = [
  "장기요양기관",
  "상담 예약 가능",
  "시설 방문 환영",
  "보호자 상담 상시 운영",
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeIn = (delay = 0) => ({
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.8, delay, ease: EASE_APPLE },
  });

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#fafafa]">
      {/* 헤더 하단 투명 상태에서 로고/텍스트가 보이도록 헤더 영역만 다크 처리 */}
      <div
        className="absolute inset-x-0 top-0 h-16 bg-[#2d4f38] md:h-20"
        aria-hidden
      />
      <div className="px-6 pt-16 md:px-10 md:pt-20">
      {/* 섹션 1 — Trust Bar */}
      <div className="border-b border-black/8 py-3 text-center">
        <p className="text-[11px] tracking-widest text-[#888] uppercase">
          {TRUST_ITEMS.join(" · ")}
        </p>
      </div>

      {/* 섹션 2+3 — Hero 2-column */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 md:min-h-[calc(100dvh-140px)] md:grid-cols-[1fr_0.9fr] md:py-0">
        {/* Left: Text */}
        <div className="flex flex-col">
          <motion.p
            {...fadeIn(0)}
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#4a7c59]"
          >
            Bulgoksan Forest Silver Home
          </motion.p>

          <motion.h1
            {...fadeIn(0.1)}
            className="mt-5 text-5xl font-semibold leading-[1.1] tracking-tight text-[#222222] md:text-6xl lg:text-7xl"
          >
            어르신의 하루를
            <br />
            존중합니다
          </motion.h1>

          <motion.p
            {...fadeIn(0.22)}
            className="mt-7 max-w-sm text-base leading-loose text-[#666666] md:text-lg"
          >
            전문 돌봄과 건강관리, 생활 프로그램으로
            <br />
            어르신의 일상을 함께합니다.
            <br />
            보호자와의 꾸준한 소통으로
            <br />
            가족이 안심할 수 있는 요양원입니다.
          </motion.p>

          <motion.div
            {...fadeIn(0.34)}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/contact"
              className="rounded-full bg-[#4a7c59] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3d6649]"
            >
              입소 상담 신청
            </Link>
            <Link
              href="/about"
              className="border-b border-[#222222]/30 pb-0.5 text-sm font-medium text-[#222222] transition-colors hover:border-[#222222]"
            >
              시설 둘러보기 →
            </Link>
          </motion.div>
        </div>

        {/* Right: Image (섹션 3) */}
        <motion.div
          {...fadeIn(0.18)}
          className="relative h-72 overflow-hidden rounded-3xl md:h-[72vh]"
        >
          <Image
            src="/images/about/hero.jpg"
            alt="불곡산숲실버홈 시설"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(160deg, transparent 60%, rgba(45,79,56,0.15) 100%)",
            }}
            aria-hidden
          />
        </motion.div>
      </div>
      </div>
    </section>
  );
}
