"use client";

import { Search } from "lucide-react";

interface RaceFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RaceFilter({
  value,
  onChange,
}: RaceFilterProps) {
  return (
    <div className="relative mb-10">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search Grand Prix, circuit or country..."
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-12 pr-4 text-white outline-none transition focus:border-red-500/40"
      />

    </div>
  );
}