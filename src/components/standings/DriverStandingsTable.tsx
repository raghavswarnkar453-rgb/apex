import Link from "next/link";

import { Card } from "@/components/ui";

import type { DriverStanding } from "@/types/driver";

interface Props {
  drivers: DriverStanding[];
}

export default function DriverStandingsTable({
  drivers,
}: Props) {
  return (
    <Card className="overflow-hidden p-0">

      <table className="w-full">

        <thead className="border-b border-white/10 bg-white/5">
  <tr>
    <th className="px-6 py-4 text-left">Pos</th>

    <th className="px-6 py-4 text-left">
      Driver
    </th>

    <th className="px-6 py-4 text-left">
      Team
    </th>

    <th className="px-6 py-4 text-center">
      Wins
    </th>

    <th className="px-6 py-4 text-right">
      Points
    </th>
  </tr>
</thead>

       <tbody>

  {drivers.map((driver) => {

    const podium =
      driver.position === "1"
        ? "bg-yellow-500/10"
        : driver.position === "2"
        ? "bg-zinc-400/10"
        : driver.position === "3"
        ? "bg-orange-700/10"
        : "";

    return (
      <tr
        key={driver.Driver.driverId}
        className={`${podium} border-b border-white/5 transition hover:bg-white/5`}
      >
        <td className="px-6 py-5 font-bold">
          P{driver.position}
        </td>

        <td className="px-6 py-5">

          <Link
            href={`/drivers/${driver.Driver.driverId}`}
            className="font-semibold hover:text-red-400"
          >
            {driver.Driver.permanentNumber && (
              <span className="mr-3 font-mono text-zinc-500">
                #{driver.Driver.permanentNumber}
              </span>
            )}

            {driver.Driver.givenName}{" "}
            {driver.Driver.familyName}

          </Link>

        </td>

        <td className="px-6 py-5">
          {driver.Constructors[0]?.name}
        </td>

        <td className="px-6 py-5 text-center">
          {driver.wins}
        </td>

        <td className="px-6 py-5 text-right font-bold">
          {driver.points}
        </td>

      </tr>
    );

  })}

</tbody>

      </table>

    </Card>
  );
}