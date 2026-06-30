"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export default function AboutStory() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section className="bg-white px-6 py-24 md:px-10 md:py-32">
      <motion.div
        initial={variants.hidden}
        whileInView={variants.visible}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-medium uppercase tracking-wide text-[#4a7c59]">
          Our Story
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#222222] md:text-4xl">
          왜 불곡산&apos;숲&apos;인가
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#666666]">
          불곡산숲실버홈은 분당·광주 불곡산 바로 앞에 위치하여, 어르신들이
          맑은 공기 속에서 산책을 즐길 수 있는 프리미엄 요양원입니다. 평화로운
          숲을 곁에 두고, 정성을 담아 어르신을 모시는 것이 저희의 소명입니다.
        </p>
      </motion.div>
    </section>
  );
}
