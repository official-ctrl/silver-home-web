"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_APPLE } from "@/lib/motion";
import type { NavCategory } from "@/components/Header";

type MegaMenuProps = {
  category: NavCategory | null;
  onLinkClick: () => void;
};

export default function MegaMenu({ category, onLinkClick }: MegaMenuProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          role="menu"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{
            duration: reduceMotion ? 0 : 0.2,
            ease: EASE_APPLE,
          }}
          className="absolute inset-x-0 top-full w-full border-b border-gray-100 bg-white shadow-sm"
        >
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
            <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
              <div className="col-span-2 md:col-span-1">
                <p className="text-xs font-medium uppercase tracking-wide text-[#666666]">
                  {category.label}
                </p>
                <ul className="mt-5 space-y-4">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        role="menuitem"
                        onClick={onLinkClick}
                        className="text-base font-medium text-[#222222] transition-colors hover:text-[#4a7c59] md:text-lg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
