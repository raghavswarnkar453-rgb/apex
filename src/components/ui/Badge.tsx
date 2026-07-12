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
        "inline-flex items-center gap-2",
        "rounded-full px-4 py-1.5",
        "text-xs font-bold uppercase tracking-[0.2em]",
        "border",

        variant === "primary" &&
          "border-red-500/30 bg-red-500/10 text-red-500",

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