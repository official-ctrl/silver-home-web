"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* TODO: 실제 시설 전경/숲 영상으로 교체. 현재는 CSS 그라데이션 플레이스홀더 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(45,79,56,0.5) 0%, rgba(45,79,56,0.78) 100%), linear-gradient(135deg, #4a7c59 0%, #2d4f38 60%, #1c3526 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.p
          initial={variants.hidden}
          animate={variants.visible}
          className="text-xs font-medium uppercase tracking-[0.2em] text-[#e8f0ea]/90"
        >
          Bulgoksan Forest Silver Home
        </motion.p>

        <motion.h1
          initial={variants.hidden}
          animate={variants.visible}
          transition={{ delay: reduceMotion ? 0 : 0.12 }}
          className="mt-6 text-6xl font-semibold leading-[1.05] tracking-tight text-white md:text-8xl"
        >
          자연이 품은
          <br />
          두 번째 집
        </motion.h1>

        <motion.p
          initial={variants.hidden}
          animate={variants.visible}
          transition={{ delay: reduceMotion ? 0 : 0.24 }}
          className="mt-7 max-w-xl text-lg font-normal leading-relaxed text-[#e8f0ea]/90 md:text-xl"
        >
          불곡산 숲 한가운데, 소중한 가족을 위한 프리미엄 요양 공간입니다.
        </motion.p>

        <motion.div
          initial={variants.hidden}
          animate={variants.visible}
          transition={{ delay: reduceMotion ? 0 : 0.36 }}
          className="mt-9 flex items-center gap-8 text-base"
        >
          <a
            href="/contact"
            className="border-b border-white/40 pb-0.5 text-white transition-colors hover:border-white"
          >
            상담 예약하기 ›
          </a>
          <a
            href="/about"
            className="border-b border-white/40 pb-0.5 text-white transition-colors hover:border-white"
          >
            시설 둘러보기 ›
          </a>
        </motion.div>
      </div>
    </section>
  );
}
