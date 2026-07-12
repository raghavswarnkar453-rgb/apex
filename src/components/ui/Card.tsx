import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl",
        "border border-white/10",
        "bg-gradient-to-br from-white/[0.05] to-white/[0.02]",
        "backdrop-blur-2xl",
        "shadow-[0_20px_60px_rgba(0,0,0,.45)]",

        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_30px_80px_rgba(225,6,0,.15)]",

        className
      )}
    >
      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      {/* glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />

      {children}
    </div>
  );
}