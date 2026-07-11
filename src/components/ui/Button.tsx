import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center justify-center rounded-[14px]",
        "px-6 py-3",
        "font-semibold",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60",

        variant === "primary" &&
          "bg-[var(--primary)] text-white hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(225,6,0,.35)]",

        variant === "secondary" &&
          "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-[var(--primary)] hover:bg-white/10",

        variant === "ghost" &&
          "text-zinc-300 hover:text-white hover:bg-white/5",

        className
      )}
    >
      {children}
    </button>
  );
}