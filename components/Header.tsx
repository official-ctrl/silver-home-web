"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import MegaMenu from "@/components/MegaMenu";

export type NavCategory = {
  label: string;
  items: { href: string; label: string }[];
};

const NAV_CATEGORIES: NavCategory[] = [
  {
    label: "실버홈 소개",
    items: [
      { href: "/about/greeting", label: "대표 인사말" },
      { href: "/about", label: "시설 둘러보기" },
      { href: "/about/directions", label: "오시는 길" },
    ],
  },
  {
    label: "실버홈 서비스",
    items: [
      { href: "/programs", label: "자연친화 프로그램" },
      { href: "/services", label: "실버홈 서비스" },
      { href: "/services/admission", label: "입소안내" },
    ],
  },
  {
    label: "커뮤니티",
    items: [
      { href: "/community/notices", label: "공지사항" },
      { href: "/community/today", label: "오늘의 실버홈" },
    ],
  },
];

const CLOSE_DELAY_MS = 150;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openMobileCategory, setOpenMobileCategory] = useState<number | null>(
    null
  );
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openCategoryNow = (index: number) => {
    clearCloseTimer();
    setOpenCategory(index);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenCategory(null), CLOSE_DELAY_MS);
  };

  const closeNow = useCallback(() => {
    clearCloseTimer();
    setOpenCategory(null);
  }, []);

  useEffect(() => {
    if (openCategory === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNow();
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeNow();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCategory, closeNow]);

  useEffect(() => clearCloseTimer, []);

  const isHeaderSolid = scrolled || openCategory !== null;
  const isMenuOpen = openCategory !== null;

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenMobileCategory(null);
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        isMenuOpen
          ? "border-gray-100 bg-white"
          : isHeaderSolid
            ? "border-gray-100/50 bg-white/95 backdrop-blur-sm"
            : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link href="/" className="relative flex shrink-0 items-center">
          {/* 솔리드 헤더(스크롤/메뉴 열림): 다크그린 로고 이미지 */}
          <Image
            src="/images/logo.png"
            alt="불곡산숲실버홈"
            width={1062}
            height={992}
            priority
            className={`h-12 w-auto transition-opacity duration-300 md:h-14 ${
              isHeaderSolid ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* 투명 헤더(최상단): 흰색 텍스트 워드마크 */}
          <span
            className={`absolute whitespace-nowrap text-lg font-semibold tracking-tight text-white transition-opacity duration-300 md:text-xl ${
              isHeaderSolid ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            불곡산숲실버홈
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_CATEGORIES.map((category, index) => (
            <button
              key={category.label}
              type="button"
              aria-expanded={openCategory === index}
              aria-haspopup="menu"
              onMouseEnter={() => openCategoryNow(index)}
              onClick={() =>
                setOpenCategory((current) => (current === index ? null : index))
              }
              className={`text-sm font-medium tracking-tight transition-colors hover:text-[#4a7c59] ${
                isHeaderSolid ? "text-[#222222]" : "text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
          <Link
            href="/login"
            className={`text-sm font-medium tracking-tight transition-colors hover:text-[#4a7c59] ${
              isHeaderSolid ? "text-[#222222]" : "text-white"
            }`}
          >
            보호자 로그인
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[#4a7c59] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3d6649]"
          >
            상담 예약하기
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex h-12 w-12 items-center justify-center rounded-full md:hidden ${
            isHeaderSolid ? "text-[#222222]" : "text-white"
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MegaMenu
        category={openCategory !== null ? NAV_CATEGORIES[openCategory] : null}
        onLinkClick={closeNow}
      />

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          {NAV_CATEGORIES.map((category, index) => {
            const isExpanded = openMobileCategory === index;
            return (
              <div key={category.label}>
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setOpenMobileCategory((current) =>
                      current === index ? null : index
                    )
                  }
                  className="flex h-12 w-full items-center justify-between text-base font-medium text-[#222222]"
                >
                  {category.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="flex flex-col gap-1 pb-2 pl-4">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex h-11 items-center text-sm font-medium text-[#666666]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/login"
            onClick={closeMobileMenu}
            className="flex h-12 items-center text-base font-medium text-[#222222]"
          >
            보호자 로그인
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-[#4a7c59] text-base font-medium text-white"
          >
            상담 예약하기
          </Link>
        </nav>
      )}
    </header>
  );
}
