"use client";

import clsx from "clsx";

type Status =
  | "all"
  | "next"
  | "upcoming"
  | "completed";

interface Props {
  value: Status;
  onChange: (value: Status) => void;
}

const options: {
  label: string;
  value: Status;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Next",
    value: "next",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

export default function RaceStatusFilter({
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() =>
            onChange(option.value)
          }
          className={clsx(
            "rounded-full border px-5 py-2 text-sm transition",
            value === option.value
              ? "border-red-500 bg-red-500/20 text-red-400"
              : "border-white/10 text-zinc-400 hover:border-white/20"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}