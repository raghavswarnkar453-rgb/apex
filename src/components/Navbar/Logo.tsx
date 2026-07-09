import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Go to Home"
    >
      {/* Racing Stripe */}
      <div className="h-8 w-1 rounded-full bg-[var(--primary)] transition-all duration-300 group-hover:h-10" />

      {/* Logo Text */}
      <h1 className="select-none text-3xl font-black tracking-[0.25em]">
        <span className="transition-colors duration-300 group-hover:text-zinc-300">
          A
        </span>

        <span className="text-[var(--primary)]">PEX</span>
      </h1>
    </Link>
  );
}
