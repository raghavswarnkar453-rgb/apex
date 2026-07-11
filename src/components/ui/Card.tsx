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
        "relative overflow-hidden rounded-[18px]",
        "border border-white/10",
        "bg-white/[0.03]",
        "backdrop-blur-xl",
        "shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      {/* Telemetry Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/60 to-transparent" />

      {children}
    </div>
  );
}