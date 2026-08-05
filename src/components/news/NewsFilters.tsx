"use client";

import clsx from "clsx";

interface Props {
  sources: string[];
  active: string;
  onChange: (source: string) => void;
}

export default function NewsFilters({
  sources,
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">

      <button
        onClick={() => onChange("All")}
        className={clsx(
          "rounded-full border px-5 py-2 transition",
          active === "All"
            ? "border-red-500 bg-red-500/20 text-red-400"
            : "border-white/10 text-zinc-400 hover:border-white/20"
        )}
      >
        All
      </button>

      {sources.map((source) => (
        <button
          key={source}
          onClick={() => onChange(source)}
          className={clsx(
            "rounded-full border px-5 py-2 transition",
            active === source
              ? "border-red-500 bg-red-500/20 text-red-400"
              : "border-white/10 text-zinc-400 hover:border-white/20"
          )}
        >
          {source}
        </button>
      ))}

    </div>
  );
}