import Link from "next/link";
import Image from "next/image";

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

  return (
    <Link href={`/race/${race.round}`}>
      <Card
        hover
        className="group h-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30"
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

          {isNextRace && (
            <Badge variant="success">
              NEXT
            </Badge>
          )}
        </div>

        <div className="mt-8 flex items-center gap-3">
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

        <h2 className="mt-6 text-2xl font-bold transition-colors group-hover:text-red-400">
          {race.raceName}
        </h2>

        <p className="mt-2 text-zinc-400">
          {race.Circuit.circuitName}
        </p>

        <p className="mt-1 text-sm text-zinc-500">
          {race.Circuit.Location.locality}
        </p>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Round
              </p>

              <p className="mt-2 font-semibold">
                {race.round}
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
        </div>
      </Card>
    </Link>
  );
}