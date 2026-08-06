import {
  Activity,
  Flag,
  Trophy,
} from "lucide-react";

import { Card } from "@/components/ui";

interface SeasonOverviewProps {
  leader: string;
  leaderPoints: number;
  constructor: string;
  constructorPoints: number;
  completedRaces: number;
  totalRaces: number;
}

export default function SeasonOverview({
  leader,
  leaderPoints,
  constructor,
  constructorPoints,
  completedRaces,
  totalRaces,
}: SeasonOverviewProps) {
  const progress =
    Math.round(
      (completedRaces / totalRaces) * 100
    );

  return (
    <div className="mb-12 grid gap-6 lg:grid-cols-3">

      {/* Driver Leader */}

      <Card
        hover
        className="overflow-hidden p-0"
      >
        <div className="h-1 w-full bg-yellow-500" />

        <div className="p-7">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-yellow-400">
              <Trophy size={24} />
            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Championship Leader
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {leader}
              </h2>

            </div>

          </div>

          <p className="mt-6 text-2xl font-bold text-yellow-400">
            {leaderPoints} pts
          </p>

        </div>

      </Card>

      {/* Constructor Leader */}

      <Card
        hover
        className="overflow-hidden p-0"
      >
        <div className="h-1 w-full bg-red-500" />

        <div className="p-7">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-red-400">
              <Flag size={24} />
            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Leading Constructor
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {constructor}
              </h2>

            </div>

          </div>

          <p className="mt-6 text-2xl font-bold text-red-400">
            {constructorPoints} pts
          </p>

        </div>

      </Card>

      {/* Season Progress */}

      <Card
        hover
        className="overflow-hidden p-0"
      >
        <div className="h-1 w-full bg-emerald-500" />

        <div className="p-7">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-emerald-400">
              <Activity size={24} />
            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Season Progress
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {completedRaces}/{totalRaces}
              </h2>

            </div>

          </div>

          <div className="mt-6">

            <div className="mb-3 flex items-center justify-between">

              <span className="text-sm text-zinc-400">
                Championship Progress
              </span>

              <span className="font-semibold text-emerald-400">
                {progress}%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">

              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </div>

      </Card>

    </div>
  );
}