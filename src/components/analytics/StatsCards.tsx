import {
  Activity,
  Flag,
  Trophy,
  Users,
} from "lucide-react";

import { Card } from "@/components/ui";

interface Props {
  totalDrivers: number;
  totalConstructors: number;
  totalRaces: number;
  totalPoints: number;
}

export default function StatsCards({
  totalDrivers,
  totalConstructors,
  totalRaces,
  totalPoints,
}: Props) {
  const stats = [
    {
      label: "Drivers",
      value: totalDrivers,
      icon: <Users size={26} />,
      color: "#3B82F6",
      subtitle: "Championship Grid",
    },
    {
      label: "Constructors",
      value: totalConstructors,
      icon: <Flag size={26} />,
      color: "#EF4444",
      subtitle: "Competing Teams",
    },
    {
      label: "Races",
      value: totalRaces,
      icon: <Activity size={26} />,
      color: "#22C55E",
      subtitle: "Season Calendar",
    },
    {
      label: "Points",
      value: totalPoints,
      icon: <Trophy size={26} />,
      color: "#F59E0B",
      subtitle: "Championship Total",
    },
  ];

  return (
    <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          hover
          className="group overflow-hidden border border-white/10 bg-white/[0.03] p-0 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_35px_rgba(239,68,68,0.18)]"
        >
          {/* Top Accent */}

          <div
            className="h-1 w-full"
            style={{
              backgroundColor: stat.color,
            }}
          />

          <div className="p-7">

            <div className="flex items-center justify-between">

              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
                style={{
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                LIVE
              </span>

            </div>

            <p className="mt-7 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {stat.label}
            </p>

            <h2 className="mt-3 text-5xl font-black">
              {stat.value}
            </h2>

            <p className="mt-3 text-sm text-zinc-400">
              {stat.subtitle}
            </p>

          </div>

        </Card>
      ))}
    </div>
  );
}