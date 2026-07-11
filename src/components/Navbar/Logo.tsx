import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="APEX Home"
      className="group flex items-center gap-3"
    >
      {/* Racing Stripe */}
      <div className="h-10 w-1 rounded-full bg-[var(--primary)] transition-all duration-300 group-hover:h-12" />

      <div className="flex flex-col leading-none">
        <h1 className="text-3xl font-black tracking-[0.28em]">
          <span className="text-white transition-colors duration-300 group-hover:text-zinc-300">
            A
          </span>

          <span className="text-[var(--primary)]">
            PEX
          </span>
        </h1>

        <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
          Formula One Dashboard
        </span>
      </div>
    </Link>
  );
}