import { Trophy } from "lucide-react";

import { Card } from "@/components/ui";

interface Driver {
  name: string;
  points: number;
}

interface Props {
  drivers: Driver[];
}

export default function TopDrivers({
  drivers,
}: Props) {
  return (
    <Card className="overflow-hidden p-0">

      {/* Header */}

      <div className="border-b border-white/10 bg-white/[0.03] px-8 py-6">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-yellow-400">
            <Trophy size={24} />
          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Championship
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Top Drivers
            </h2>

          </div>

        </div>

      </div>

      {/* Leaderboard */}

      <div className="space-y-4 p-8">

        {drivers.map((driver, index) => {
          const badgeColor =
            index === 0
              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
              : index === 1
              ? "bg-sky-500/20 text-sky-400 border-sky-500/30"
              : index === 2
              ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
              : "bg-white/5 text-zinc-300 border-white/10";

          return (
            <div
              key={driver.name}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.05]"
            >

              <div className="flex items-center gap-5">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border font-bold ${badgeColor}`}
                >
                  {index + 1}
                </div>

                <div>

                  <h3 className="font-semibold transition-colors duration-300 group-hover:text-red-400">
                    {driver.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Championship Position
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Points
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {driver.points}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </Card>
  );
}