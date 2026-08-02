import { Card } from "@/components/ui";

import type { ConstructorStanding } from "@/types/constructor";

interface ConstructorStatsProps {
  standing: ConstructorStanding;
}

export default function ConstructorStats({
  standing,
}: ConstructorStatsProps) {
  const stats = [
    {
      label: "Championship Position",
      value: `P${standing.position}`,
    },
    {
      label: "Championship Points",
      value: standing.points,
    },
    {
      label: "Race Wins",
      value: standing.wins,
    },
    {
      label: "Constructor",
      value: standing.Constructor.name,
    },
  ];

  return (
    <Card className="border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      <h2 className="text-3xl font-bold">
        Season Statistics
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {stat.label}
            </p>

            <p className="mt-4 text-5xl font-black transition-colors group-hover:text-red-400">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}