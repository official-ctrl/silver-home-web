"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export default function CTASection() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[#1c2b21] px-6 py-32 text-center md:scroll-mt-32 md:px-10"
    >
      <motion.div
        initial={variants.hidden}
        whileInView={variants.visible}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          소중한 분을 위한
          <br />첫걸음을 함께하겠습니다.
        </h2>
        <a
          href="/contact"
          className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[#1c2b21] transition-colors hover:bg-[#e8f0ea]"
        >
          상담 예약하기
        </a>
      </motion.div>
    </section>
  );
}
