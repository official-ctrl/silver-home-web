"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "시설 소개" },
  { href: "/programs", label: "프로그램" },
  { href: "/contact", label: "상담 신청" },
  { href: "/login", label: "보호자 로그인" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-gray-100/50 bg-white/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href="/"
          className={`text-lg font-semibold tracking-tight md:text-xl ${
            scrolled ? "text-[#222222]" : "text-white"
          }`}
        >
          불곡산숲실버홈
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-tight transition-colors hover:text-[#4a7c59] ${
                scrolled ? "text-[#222222]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
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
            scrolled ? "text-[#222222]" : "text-white"
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex h-12 items-center text-base font-medium text-[#222222]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-[#4a7c59] text-base font-medium text-white"
          >
            상담 예약하기
          </Link>
        </nav>
      )}
    </header>
  );
}
