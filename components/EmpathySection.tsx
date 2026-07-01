"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export default function EmpathySection() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section
      id="empathy"
      className="scroll-mt-28 bg-[#fafafa] px-6 py-36 md:scroll-mt-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-light leading-snug tracking-tight text-[#222222] md:text-4xl"
        >
          결정이 쉽지 않으셨을 겁니다.
        </motion.h2>

        <motion.div
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: reduceMotion ? 0 : 0.15 }}
          className="mx-auto mt-8 h-px w-12 bg-[#4a7c59]"
          aria-hidden
        />

        <motion.p
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: reduceMotion ? 0 : 0.22 }}
          className="mt-8 text-base leading-[1.9] text-[#666666] md:text-lg"
        >
          부모님을 요양원에 모시기로 했을 때,
          <br />그 마음이 결코 가볍지 않으셨을 것입니다.
          <br />
          <br />
          저희는 그 무게를 압니다.
          <br />
          그래서 더 정성껏, 더 가족처럼 모십니다.
        </motion.p>
      </div>
    </section>
  );
}
