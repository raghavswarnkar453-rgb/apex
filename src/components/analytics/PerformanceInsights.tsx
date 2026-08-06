import {
  Activity,
  BarChart3,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { Card } from "@/components/ui";

interface Props {
  averagePoints: number;
  highestPoints: number;
  lowestPoints: number;
  totalDrivers: number;
}

export default function PerformanceInsights({
  averagePoints,
  highestPoints,
  lowestPoints,
  totalDrivers,
}: Props) {
  const insights = [
    {
      label: "Average Points",
      value: averagePoints.toFixed(1),
      icon: <BarChart3 size={24} />,
      color: "#3B82F6",
      subtitle: "Across Championship",
    },
    {
      label: "Highest Points",
      value: highestPoints,
      icon: <TrendingUp size={24} />,
      color: "#22C55E",
      subtitle: "Current Best Score",
    },
    {
      label: "Lowest Points",
      value: lowestPoints,
      icon: <TrendingDown size={24} />,
      color: "#EF4444",
      subtitle: "Current Lowest Score",
    },
    {
      label: "Drivers Analysed",
      value: totalDrivers,
      icon: <Activity size={24} />,
      color: "#F59E0B",
      subtitle: "Season Dataset",
    },
  ];

  return (
    <Card className="overflow-hidden p-0">

      {/* Header */}

      <div className="border-b border-white/10 bg-white/[0.03] px-8 py-6">

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Championship Metrics
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Performance Insights
        </h2>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-4">

        {insights.map((item) => (
          <div
            key={item.label}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.05]"
          >

            <div
              className="h-1 w-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <div className="p-6">

              <div className="flex items-center justify-between">

                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  LIVE
                </span>

              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
                {item.label}
              </p>

              <h3
                className="mt-3 text-4xl font-black"
                style={{
                  color: item.color,
                }}
              >
                {item.value}
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                {item.subtitle}
              </p>

            </div>

          </div>
        ))}

      </div>

    </Card>
  );
}