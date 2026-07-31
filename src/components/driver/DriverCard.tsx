import Link from "next/link";
import Image from "next/image";

import { Card, Badge } from "@/components/ui";

import type { DriverStanding } from "@/types/driver";

interface DriverCardProps {
  standing: DriverStanding;
}

export default function DriverCard({
  standing,
}: DriverCardProps) {
  const driver = standing.Driver;
  const constructor =
    standing.Constructors[0];

  return (
    <Link href={`/drivers/${driver.driverId}`}>
      <Card
        hover
        className="group h-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30"
      >
        <div className="flex justify-between items-start">

          <Badge variant="success">
            P{standing.position}
          </Badge>

          <span className="font-mono text-sm text-zinc-500">
            #{driver.permanentNumber ?? "--"}
          </span>

        </div>

        <div className="mt-8 flex justify-center">

          <Image
            src="/driver-placeholder.png"
            alt={driver.familyName}
            width={110}
            height={110}
            className="rounded-full border border-white/10 transition-transform duration-300 group-hover:scale-105"
          />

        </div>

        <div className="mt-8 text-center">

          <h3 className="text-2xl font-bold">
            {driver.givenName}
          </h3>

          <p className="text-zinc-400">
            {driver.familyName}
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            {constructor.name}
          </p>

        </div>

        <div className="mt-8 flex justify-between border-t border-white/10 pt-6">

          <div>

            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Points
            </p>

            <p className="mt-2 text-xl font-bold">
              {standing.points}
            </p>

          </div>

          <div className="text-right">

            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Wins
            </p>

            <p className="mt-2 text-xl font-bold">
              {standing.wins}
            </p>

          </div>

        </div>

      </Card>
    </Link>
  );
}