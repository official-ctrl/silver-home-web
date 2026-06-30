"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

type TourItem = {
  title: string;
  description: string;
  imageSrc: string;
};

const TOUR_ITEMS: TourItem[] = [
  {
    title: "로비",
    description:
      "편안한 휴식과 만남의 장소로, 따뜻하고 편안한 마음을 전하는 공간입니다.",
    imageSrc: "/images/about/tour-lobby.png",
  },
  {
    title: "프로그램실",
    description: "다양한 프로그램과 생활 지원 및 행사가 이루어지는 공간입니다.",
    imageSrc: "/images/about/tour-program.png",
  },
  {
    title: "생활공간",
    description:
      "어르신들이 편안하게 일상을 보내실 수 있도록 세심하게 마련된 공간입니다.",
    imageSrc: "/images/about/tour-living1.png",
  },
];

export default function TourGallery() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section className="bg-[#fafafa] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={variants.hidden}
          whileInView={variants.visible}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl font-semibold tracking-tight text-[#222222] md:text-4xl"
        >
          시설 둘러보기
        </motion.h2>

        <div className="mt-16 flex flex-col gap-20">
          {TOUR_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={variants.hidden}
              whileInView={variants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.1 }}
              className={`flex flex-col items-center gap-8 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-sm md:h-96 md:w-1/2">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-medium tracking-tight text-[#222222] md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
