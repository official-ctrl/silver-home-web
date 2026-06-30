import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d4f38] px-6 py-16 text-[#e8f0ea] md:px-10 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="text-xl font-semibold tracking-tight text-white">
            불곡산숲실버홈
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#cfe0d4]">
            자연이 품은 두 번째 집. 소중한 가족을 위한 프리미엄 요양 공간입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm md:flex md:gap-16">
          <div>
            <p className="font-medium text-white">바로가기</p>
            <ul className="mt-3 space-y-2 text-[#cfe0d4]">
              <li>
                <Link href="/about" className="hover:text-white">
                  시설 소개
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white">
                  프로그램
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  상담 신청
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">문의</p>
            <ul className="mt-3 space-y-2 text-[#cfe0d4]">
              <li>031-000-0000</li>
              <li>경기도 광주시 불곡산로 00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-[#9fb8a6]">
        © {new Date().getFullYear()} 불곡산숲실버홈. All rights reserved.
      </div>
    </footer>
  );
}
