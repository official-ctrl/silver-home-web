import { MapPin, Phone, Clock } from "lucide-react";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "주소",
    value: "경기도 광주시 불곡산로 00",
  },
  {
    icon: Phone,
    label: "전화",
    value: "031-000-0000",
  },
  {
    icon: Clock,
    label: "상담 가능 시간",
    value: "평일 09:00 - 18:00 (주말/공휴일 휴무)",
  },
];

export default function ContactInfo() {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-wide text-[#4a7c59]">
        Contact
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#222222] md:text-4xl">
        상담 신청
      </h2>
      <p className="mt-5 max-w-md text-base leading-relaxed text-[#666666]">
        소중한 가족을 위한 첫걸음, 언제든 편하게 문의해주세요. 입력해주신
        연락처로 담당자가 안내해드립니다.
      </p>

      <ul className="mt-10 space-y-6">
        {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f0ea] text-[#4a7c59]">
              <Icon size={20} aria-hidden />
            </span>
            <div>
              <p className="text-sm font-medium text-[#666666]">{label}</p>
              <p className="mt-1 text-base font-medium text-[#222222]">
                {value}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
