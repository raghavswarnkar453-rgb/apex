import { Badge } from "@/components/ui";

interface SeasonHeaderProps {
  totalRaces: number;
}

export default function SeasonHeader({
  totalRaces,
}: SeasonHeaderProps) {
  return (
    <div className="mb-16">

      <Badge variant="primary">
        2026 FORMULA ONE SEASON
      </Badge>

      <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
        Race Calendar
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
        Explore every Grand Prix of the Formula One World Championship.
        Browse the complete race calendar, discover circuits around the
        world, and jump directly into each race weekend.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Total Races
          </p>

          <p className="mt-2 text-3xl font-bold">
            {totalRaces}
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Season
          </p>

          <p className="mt-2 text-3xl font-bold">
            2026
          </p>

        </div>

      </div>

    </div>
  );
}