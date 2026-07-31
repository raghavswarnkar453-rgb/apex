import { Card } from "@/components/ui";
import type { DriverStanding } from "@/types/driver";

interface DriverStatsProps {
  standing: DriverStanding;
}

export default function DriverStats({
  standing,
}: DriverStatsProps) {
  const stats = [
    {
      label: "Championship Position",
      value: standing.position,
    },
    {
      label: "Points",
      value: standing.points,
    },
    {
      label: "Wins",
      value: standing.wins,
    },
    {
      label: "Constructor",
      value:
        standing.Constructors[0]?.name ?? "--",
    },
  ];

  return (
    <Card className="p-8">
      <h2 className="text-3xl font-bold">
        Season Statistics
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {stat.label}
            </p>

            <p className="mt-4 text-4xl font-bold">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}