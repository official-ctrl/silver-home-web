"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { fadeUpVariants } from "@/lib/motion";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "주소",
    value: "경기 광주시 오포읍 상태길81번길 58-2",
  },
  { icon: Phone, label: "입소 문의 및 상담전화", value: "031-717-3480" },
  { icon: Mail, label: "이메일 문의", value: "bfs1004@naver.com" },
  { icon: Clock, label: "면회 및 상담가능 시간", value: "08:00 ~ 17:00" },
];

export default function AboutInfo() {
  const reduceMotion = useReducedMotion();
  const variants = fadeUpVariants(!!reduceMotion);

  return (
    <section className="bg-[#e8f0ea] px-6 py-20 md:px-10">
      <motion.div
        initial={variants.hidden}
        whileInView={variants.visible}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2"
      >
        {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#4a7c59]">
              <Icon size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#666666]">{label}</p>
              <p className="mt-1 text-lg font-medium text-[#222222]">
                {value}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
