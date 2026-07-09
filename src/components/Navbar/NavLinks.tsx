"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navItems } from "@/constants/navItems";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "relative text-sm font-medium transition-all duration-300",
              isActive
                ? "text-[var(--primary)]"
                : "text-zinc-300 hover:text-white"
            )}
          >
            {item.label}

            {isActive && (
              <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[var(--primary)]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}