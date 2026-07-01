"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

const STATS = [
  { value: "30", unit: "년", label: "돌봄 경험" },
  { value: "49", unit: "인", label: "소규모 가족형 운영" },
  { value: "24", unit: "시간", label: "상주 케어" },
  { value: "500", unit: "m", label: "전용 산책로" },
];

export default function StorySection() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section
      id="stats"
      className="scroll-mt-28 bg-white px-6 py-28 md:scroll-mt-32 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.6 }}
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#4a7c59]"
        >
          Numbers
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4 md:gap-0 md:divide-x md:divide-black/8">
          {STATS.map(({ value, unit, label }, index) => (
            <motion.div
              key={label}
              initial={variants.hidden}
              whileInView={variants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
              className="md:px-12 md:first:pl-0 md:last:pr-0"
            >
              <p className="text-6xl font-bold leading-none tracking-tight text-[#222222] md:text-7xl lg:text-8xl">
                {value}
                <span className="ml-1 text-2xl font-medium text-[#4a7c59] md:text-3xl">
                  {unit}
                </span>
              </p>
              <p className="mt-4 text-sm tracking-wide text-[#888888]">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
