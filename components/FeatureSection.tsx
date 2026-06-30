"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export default function FeatureSection() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section className="bg-[#fafafa] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-sm font-medium uppercase tracking-wide text-[#4a7c59]">
            Forest Walk
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#222222] md:text-4xl">
            불곡산 숲길을
            <br />
            매일 걷는 일상
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#666666]">
            맑은 공기와 사계절의 변화를 곁에 두고, 어르신들은 매일 아침 숲길을
            산책합니다. 자연 속에서 몸과 마음의 평온을 되찾는 것 — 저희가
            가장 중요하게 생각하는 돌봄의 시작입니다.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#222222]">
                500m
              </p>
              <p className="mt-1 text-sm text-[#666666]">전용 산책로</p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#222222]">
                4계절
              </p>
              <p className="mt-1 text-sm text-[#666666]">변화하는 풍경</p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#222222]">
                1:1
              </p>
              <p className="mt-1 text-sm text-[#666666]">동행 케어</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: reduceMotion ? 0 : 0.15 }}
          className="relative h-80 overflow-hidden rounded-2xl shadow-sm md:h-[28rem]"
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
      </div>
    </section>
  );
}
