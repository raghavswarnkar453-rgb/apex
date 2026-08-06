import Link from "next/link";
import Image from "next/image";
import { getCircuitMetadata } from "@/lib/circuit";
import {
  Badge,
  Card,
} from "@/components/ui";

import { getCountryCode } from "@/lib/country";

import type { Race } from "@/types/race";

interface RaceCardProps {
  race: Race;
  isNextRace?: boolean;
}

export default function RaceCard({
  race,
  isNextRace = false,
}: RaceCardProps) {
  const countryCode = getCountryCode(
    race.Circuit.Location.country
  );
  const metadata = getCircuitMetadata(
  race.Circuit.circuitId
);
  const raceDate = new Date(
  `${race.date}T${race.time ?? "00:00:00Z"}`
);

const now = new Date();

const status =
  isNextRace
    ? "NEXT"
    : raceDate < now
      ? "COMPLETED"
      : "UPCOMING";

  return (
    <Link href={`/race/${race.round}`}>
      <Card
        hover
        className="group h-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_35px_rgba(239,68,68,0.18)]"
      >
        <div className="flex items-center justify-between">
          <Badge
            variant={
              isNextRace
                ? "primary"
                : "neutral"
            }
          >
            Round {race.round}
          </Badge>

          <Badge
                variant={
  status === "NEXT"
    ? "danger"
    : status === "COMPLETED"
    ? "success"
    : "info"
}
            >
           {status}
         </Badge>
        </div>

       <div className="mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <Image
            src={`/flags/${countryCode}.svg`}
            alt={race.Circuit.Location.country}
            width={28}
            height={20}
            className="rounded"
          />

          <span className="text-zinc-400">
            {race.Circuit.Location.country}
          </span>
        </div>

        <h2 className="mt-6 text-[1.65rem] leading-tight font-bold transition-colors group-hover:text-red-400">
          {race.raceName}
        </h2>

        <p className="mt-2 text-zinc-400">
          {race.Circuit.circuitName}
        </p>

        <p className="mt-1 text-sm text-zinc-500">
          {race.Circuit.Location.locality}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">

  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
      Track Length
    </p>

    <p className="mt-2 font-semibold">
      {metadata?.length ?? "-"}
    </p>
  </div>

  <div className="text-right">
    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
      DRS Zones
    </p>

    <p className="mt-2 font-semibold">
      {metadata?.drsZones ?? "-"}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
      Direction
    </p>

    <p className="mt-2 font-semibold">
      {metadata?.direction ?? "-"}
    </p>
  </div>

  <div className="text-right">
    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
      Race Date
    </p>

    <p className="mt-2 font-semibold">
      {new Date(
        race.date
      ).toLocaleDateString("en-GB")}
    </p>
  </div>

</div>
      </Card>
    </Link>
  );
}