"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
            "linear-gradient(180deg, rgba(45,79,56,0.55) 0%, rgba(45,79,56,0.75) 100%), linear-gradient(135deg, #4a7c59 0%, #2d4f38 60%, #1c3526 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.p
          initial={variants.hidden}
          animate={variants.visible}
          className="text-sm font-medium uppercase tracking-wide text-[#e8f0ea]"
        >
          Bulgoksan Forest Silver Home
        </motion.p>

        <motion.h1
          initial={variants.hidden}
          animate={variants.visible}
          transition={{ delay: reduceMotion ? 0 : 0.15 }}
          className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl"
        >
          자연이 품은
          <br />두 번째 집
        </motion.h1>

        <motion.p
          initial={variants.hidden}
          animate={variants.visible}
          transition={{ delay: reduceMotion ? 0 : 0.3 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[#e8f0ea]"
        >
          불곡산 숲 한가운데, 소중한 가족을 위한 프리미엄 요양 공간입니다.
        </motion.p>

        <motion.a
          href="/contact"
          initial={variants.hidden}
          animate={variants.visible}
          transition={{ delay: reduceMotion ? 0 : 0.45 }}
          className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#2d4f38] transition-colors hover:bg-[#e8f0ea]"
        >
          상담 예약하기
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: reduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/80" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
