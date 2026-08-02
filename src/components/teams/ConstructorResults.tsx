import { Card } from "@/components/ui";

import type { DriverStanding } from "@/types/driver";
import type { ConstructorStanding } from "@/types/constructor";

interface ConstructorResultsProps {
  standing: ConstructorStanding;
  drivers: DriverStanding[];
}

export default function ConstructorResults({
  standing,
  drivers,
}: ConstructorResultsProps) {
  const teamDrivers = drivers.filter((driver) =>
    driver.Constructors.some(
      (constructor) =>
        constructor.constructorId ===
        standing.Constructor.constructorId
    )
  );

  return (
    <Card className="border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold">
        Driver Line-up
      </h2>

      <div className="mt-8 overflow-x-auto">

        <table className="w-full text-left">

          <thead className="border-b border-white/10">

            <tr>

              <th className="pb-4 font-medium text-zinc-400">
                Driver
              </th>

              <th className="pb-4 font-medium text-zinc-400">
                Position
              </th>

              <th className="pb-4 font-medium text-zinc-400">
                Points
              </th>

              <th className="pb-4 font-medium text-zinc-400">
                Wins
              </th>

            </tr>

          </thead>

          <tbody>

            {teamDrivers.map((driver) => (
              <tr
                key={driver.Driver.driverId}
                className="border-b border-white/5 transition-colors hover:bg-white/[0.03]"
              >

                <td className="py-5">
                  {driver.Driver.givenName}{" "}
                  {driver.Driver.familyName}
                </td>

                <td className="py-5">
                  P{driver.position}
                </td>

                <td className="py-5">
                  {driver.points}
                </td>

                <td className="py-5">
                  {driver.wins}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
}