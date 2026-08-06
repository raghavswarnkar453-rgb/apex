import { ReactNode } from "react";
import clsx from "clsx";

type Variant =
  | "primary"
  | "success"
  | "neutral"
  | "warning"
  | "danger"
  | "info";

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
        "rounded-full border px-4 py-1.5",
        "text-xs font-bold uppercase tracking-[0.2em]",

        variant === "primary" &&
          "border-red-500/30 bg-red-500/10 text-red-400",

        variant === "success" &&
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",

        variant === "neutral" &&
          "border-white/10 bg-white/5 text-zinc-300",

        variant === "warning" &&
          "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",

        variant === "danger" &&
          "border-rose-500/30 bg-rose-500/10 text-rose-400",

        variant === "info" &&
          "border-sky-500/30 bg-sky-500/10 text-sky-400",

        className
      )}
    >
      {children}
    </span>
  );
}