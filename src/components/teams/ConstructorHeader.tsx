import Image from "next/image";

import { Badge } from "@/components/ui";
import { getCountryCode } from "@/lib/country";

import type {
  ConstructorRef,
  ConstructorStanding,
} from "@/types/constructor";

interface ConstructorHeaderProps {
  constructor: ConstructorRef;
  standing: ConstructorStanding;
}

export default function ConstructorHeader({
  constructor,
  standing,
}: ConstructorHeaderProps) {
  const countryCode = getCountryCode(
    constructor.nationality
  );

  return (
    <div className="space-y-6">

      <Badge variant="primary">
        CONSTRUCTOR PROFILE
      </Badge>

      <div className="flex items-center gap-3">

        <Image
          src={`/flags/${countryCode}.svg`}
          alt={constructor.nationality}
          width={32}
          height={22}
          className="rounded"
        />

        <span className="text-zinc-400">
          {constructor.nationality}
        </span>

      </div>

      <div>

        <h1 className="text-5xl font-bold lg:text-6xl">
          {constructor.name}
        </h1>

        <p className="mt-4 text-xl text-zinc-400">
          Formula One Constructor
        </p>

      </div>

      <div className="flex flex-wrap gap-4">

        <Badge variant="success">
          P{standing.position}
        </Badge>

        <Badge variant="neutral">
          {standing.points} Points
        </Badge>

        <Badge variant="neutral">
          {standing.wins} Wins
        </Badge>

      </div>

    </div>
  );
}