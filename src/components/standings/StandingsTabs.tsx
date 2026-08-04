"use client";

import clsx from "clsx";

export type StandingsTab =
  | "drivers"
  | "constructors";

interface Props {
  value: StandingsTab;
  onChange: (tab: StandingsTab) => void;
}

export default function StandingsTabs({
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-10 flex gap-3">

      <button
        onClick={() => onChange("drivers")}
        className={clsx(
          "rounded-full border px-6 py-3 transition",
          value === "drivers"
            ? "border-red-500 bg-red-500/20 text-red-400"
            : "border-white/10 text-zinc-400 hover:border-white/20"
        )}
      >
        Drivers
      </button>

      <button
        onClick={() =>
          onChange("constructors")
        }
        className={clsx(
          "rounded-full border px-6 py-3 transition",
          value === "constructors"
            ? "border-red-500 bg-red-500/20 text-red-400"
            : "border-white/10 text-zinc-400 hover:border-white/20"
        )}
      >
        Constructors
      </button>

    </div>
  );
}