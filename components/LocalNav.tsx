"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  { id: "care", label: "케어 서비스" },
  { id: "stats", label: "시설 현황" },
  { id: "philosophy", label: "철학" },
  { id: "contact", label: "상담 문의" },
];

const HERO_THRESHOLD = 0.7;

export default function LocalNav() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>(TABS[0].id);
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * HERO_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = tabRefs.current[activeId];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeId, visible]);

  return (
    <nav
      aria-label="섹션 바로가기"
      className={`fixed top-16 z-40 w-full border-b border-black/5 bg-white/80 backdrop-blur-md transition-all duration-300 md:top-20 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between gap-4 px-4 md:justify-center md:gap-8 md:px-10">
        <div className="relative flex items-center gap-5 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              href={`#${tab.id}`}
              className={`shrink-0 text-[13px] font-medium tracking-tight transition-colors ${
                activeId === tab.id
                  ? "text-[#222222]"
                  : "text-[#666666] hover:text-[#222222]"
              }`}
            >
              {tab.label}
            </a>
          ))}
          <span
            aria-hidden
            className="absolute -bottom-[14px] h-[1.5px] bg-[#4a7c59] transition-all duration-300"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </div>

        <a
          href="/contact"
          className="ml-2 shrink-0 rounded-full bg-[#4a7c59] px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#3d6649] md:ml-4"
        >
          상담 예약하기
        </a>
      </div>
    </nav>
  );
}
