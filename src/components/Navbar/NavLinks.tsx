"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

import { navItems } from "@/constants/navItems";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 md:flex">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "relative py-1 text-[15px] font-semibold transition-all duration-300 hover:scale-105",
              isActive
                ? "text-[var(--primary)]"
                : "text-zinc-300 hover:text-white"
            )}
          >
            {item.label}

            {isActive && (
              <motion.span
                layoutId="navbar-active"
                className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[var(--primary)]"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
