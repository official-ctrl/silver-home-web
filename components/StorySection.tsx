"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

const SPECS = [
  { value: "500m", label: "전용 산책로" },
  { value: "4계절", label: "변화하는 풍경" },
  { value: "1:1", label: "동행 케어" },
];

export default function StorySection() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section className="bg-[#fafafa] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4a7c59]">
            Forest Walk
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-[#222222] md:text-6xl">
            불곡산 숲길을
            <br />
            매일 걷는 일상
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#666666]">
            맑은 공기와 사계절의 변화를 곁에 두고, 어르신들은 매일 아침
            숲길을 산책합니다. 자연 속에서 몸과 마음의 평온을 되찾는 것 —
            저희가 가장 중요하게 생각하는 돌봄의 시작입니다.
          </p>
        </motion.div>

        <motion.div
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: reduceMotion ? 0 : 0.15 }}
          className="relative mt-16 h-80 w-full overflow-hidden rounded-3xl md:h-[32rem]"
        >
          {/* TODO: 실제 숲길 산책 사진으로 교체 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #e8f0ea 0%, #a8c9b3 50%, #4a7c59 100%)",
            }}
            aria-hidden
          />
        </motion.div>

        <motion.div
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: reduceMotion ? 0 : 0.25 }}
          className="mt-16 grid grid-cols-3 divide-x divide-black/10 border-t border-black/10 pt-10"
        >
          {SPECS.map((spec) => (
            <div key={spec.label} className="px-4 text-center">
              <p className="text-2xl font-semibold tracking-tight text-[#222222] md:text-4xl">
                {spec.value}
              </p>
              <p className="mt-2 text-sm text-[#666666]">{spec.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
