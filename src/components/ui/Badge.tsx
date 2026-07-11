import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "success" | "neutral";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1",
        "text-xs font-semibold uppercase tracking-wider",
        "border transition-all duration-300",

        variant === "primary" &&
          "border-[var(--primary)]/40 bg-[var(--primary)]/10 text-[var(--primary)]",

        variant === "success" &&
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",

        variant === "neutral" &&
          "border-white/10 bg-white/5 text-zinc-300",

        className
      )}
    >
      {children}
    </span>
  );
}