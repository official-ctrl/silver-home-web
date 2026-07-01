"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

const TRUST_CARDS = [
  {
    num: "01",
    title: "24시간 케어",
    desc: "숙련된 요양보호사가 밤낮 곁에 함께합니다",
  },
  {
    num: "02",
    title: "균형 잡힌 식사",
    desc: "어르신 건강에 맞춘 맞춤 영양식을 제공합니다",
  },
  {
    num: "03",
    title: "일상 프로그램",
    desc: "신체·인지·정서 프로그램으로 활기찬 하루를 만듭니다",
  },
  {
    num: "04",
    title: "가족과의 소통",
    desc: "정기 상담과 현황 공유로 보호자가 안심합니다",
  },
];

export default function ValuesGrid() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section
      id="care"
      className="scroll-mt-28 bg-white px-6 py-28 md:scroll-mt-32 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.6 }}
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#4a7c59]"
        >
          Care
        </motion.p>
        <motion.h2
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: reduceMotion ? 0 : 0.08 }}
          className="mt-4 text-3xl font-semibold tracking-tight text-[#222222] md:text-4xl"
        >
          어르신의 하루를 채우는
          <br />
          네 가지 약속
        </motion.h2>

        <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          {TRUST_CARDS.map(({ num, title, desc }, index) => (
            <motion.div
              key={num}
              initial={variants.hidden}
              whileInView={variants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
              className="border-t-2 border-[#4a7c59] pt-7"
            >
              <p className="text-[11px] tracking-widest text-[#aaa]">{num}</p>
              <h3 className="mt-4 text-lg font-medium tracking-tight text-[#222222]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
