"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/constants/navItems";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({
  isOpen,
  closeMenu,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="absolute left-0 top-full w-full border-b border-white/10 bg-[#090909]/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-lg font-medium text-zinc-300 transition-colors duration-300 hover:bg-white/5 hover:text-[var(--primary)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}