"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export default function PhilosophySection() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section
      id="philosophy"
      className="scroll-mt-28 bg-white px-6 py-40 md:scroll-mt-32 md:px-10"
    >
      <motion.p
        initial={variants.hidden}
        whileInView={variants.visible}
        viewport={{ once: true, amount: 0.6 }}
        className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-snug tracking-tight text-[#222222] md:text-5xl"
      >
        우리의 인생이 아름다운 이야기가 되기를.
        <br />
        <span className="text-[#666666]">노년기는, 더욱 그러하기를.</span>
      </motion.p>
    </section>
  );
}
