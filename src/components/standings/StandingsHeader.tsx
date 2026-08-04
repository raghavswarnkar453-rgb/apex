import { Badge } from "@/components/ui";

export default function StandingsHeader() {
  return (
    <div className="mb-16">

      <Badge variant="primary">
        FIA WORLD CHAMPIONSHIP
      </Badge>

      <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
        Championship Standings
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
        Follow the latest Driver and Constructor Championship standings.
        Compare points, victories, and season performance throughout the
        Formula One World Championship.
      </p>

    </div>
  );
}