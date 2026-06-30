"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, Trees, Home } from "lucide-react";
import { fadeUpVariants } from "@/lib/motion";

const VALUES = [
  {
    icon: HeartPulse,
    title: "프리미엄 케어",
    description: "전문 간호인력의 1:1 밀착 케어로 안심할 수 있는 일상.",
  },
  {
    icon: Trees,
    title: "자연 친화 환경",
    description: "불곡산 숲을 곁에 둔 산책로와 사계절의 풍경.",
  },
  {
    icon: Home,
    title: "호텔급 인테리어",
    description: "따뜻하면서도 절제된, 집과 같은 공간 디자인.",
  },
];

export default function ValuesGrid() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section
      id="values"
      className="scroll-mt-28 bg-white px-6 py-28 md:scroll-mt-32 md:px-10 md:py-36"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3 md:gap-10">
        {VALUES.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={title}
            initial={variants.hidden}
            whileInView={variants.visible}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: reduceMotion ? 0 : index * 0.1 }}
            className="border-t border-black/10 pt-8 text-center md:text-left"
          >
            <Icon className="mx-auto text-[#4a7c59] md:mx-0" size={28} strokeWidth={1.5} />
            <h3 className="mt-5 text-xl font-medium tracking-tight text-[#222222]">
              {title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#666666]">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
