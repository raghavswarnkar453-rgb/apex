import type { Race } from "@/types/race";

import RaceCard from "./RaceCard";

interface RaceGridProps {
  races: Race[];
  nextRaceRound?: string;
}

export default function RaceGrid({
  races,
  nextRaceRound,
}: RaceGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {races.map((race) => (
        <RaceCard
          key={race.round}
          race={race}
          isNextRace={
            race.round === nextRaceRound
          }
        />
      ))}

    </div>
  );
}
