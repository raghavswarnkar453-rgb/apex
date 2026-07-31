import Image from "next/image";

import { Badge } from "@/components/ui";

import type {
  DriverRef,
  DriverStanding,
} from "@/types/driver";
import { getCountryCode } from "@/lib/country";
interface DriverHeaderProps {
  driver: DriverRef;
  standing: DriverStanding;
}



export default function DriverHeader({
  driver,
  standing,
}: DriverHeaderProps) {
  const constructor =
    standing.Constructors[0];

const countryCode = getCountryCode(
  driver.nationality
);

  return (
    <div className="space-y-6">

      <Badge variant="primary">
        DRIVER PROFILE
      </Badge>

      <div className="flex items-center gap-3">

        <Image
          src={`/flags/${countryCode}.svg`}
          alt={driver.nationality}
          width={32}
          height={22}
          className="rounded"
        />

        <span className="text-zinc-400">
          {driver.nationality}
        </span>

      </div>

      <div>

        <h1 className="text-5xl font-bold lg:text-6xl">
          {driver.givenName}{" "}
          {driver.familyName}
        </h1>

        <p className="mt-4 text-xl text-zinc-400">
          {constructor.name}
        </p>

      </div>

      <div className="flex flex-wrap gap-4">

        <Badge variant="neutral">
          #{driver.permanentNumber ?? "--"}
        </Badge>

        <Badge variant="neutral">
          {driver.code ?? "---"}
        </Badge>

        <Badge variant="success">
          P{standing.position}
        </Badge>

      </div>

    </div>
  );
}