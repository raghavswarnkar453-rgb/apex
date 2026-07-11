"use client";

import { motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function MenuButton({
  isOpen,
  toggle,
}: MenuButtonProps) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Navigation"
      className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-colors hover:border-[var(--primary)] md:hidden"
    >
      <div className="relative h-5 w-6">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          className="absolute left-0 top-0 h-0.5 w-6 rounded-full bg-white"
        />

        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          className="absolute left-0 top-2 h-0.5 w-6 rounded-full bg-white"
        />

        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          className="absolute left-0 top-4 h-0.5 w-6 rounded-full bg-white"
        />
      </div>
    </button>
  );
}