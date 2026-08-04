import Link from "next/link";

import { Card } from "@/components/ui";

import type { ConstructorStanding } from "@/types/constructor";

interface Props {
  constructors: ConstructorStanding[];
}

export default function ConstructorStandingsTable({
  constructors,
}: Props) {
  return (
    <Card className="overflow-hidden p-0">

      <table className="w-full">

       <thead className="border-b border-white/10 bg-white/5">
  <tr>

    <th className="px-6 py-4 text-left">
      Pos
    </th>

    <th className="px-6 py-4 text-left">
      Constructor
    </th>

    <th className="px-6 py-4 text-left">
      Nationality
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

  {constructors.map((constructor) => {

    const podium =
      constructor.position === "1"
        ? "bg-yellow-500/10"
        : constructor.position === "2"
        ? "bg-zinc-400/10"
        : constructor.position === "3"
        ? "bg-orange-700/10"
        : "";

    return (
      <tr
        key={constructor.Constructor.constructorId}
        className={`${podium} border-b border-white/5 transition hover:bg-white/5`}
      >
        <td className="px-6 py-5 font-bold">
          P{constructor.position}
        </td>

        <td className="px-6 py-5">

          <Link
            href={`/constructors/${constructor.Constructor.constructorId}`}
            className="font-semibold hover:text-red-400"
          >
            {constructor.Constructor.name}
          </Link>

        </td>

        <td className="px-6 py-5">
          {constructor.Constructor.nationality}
        </td>

        <td className="px-6 py-5 text-center">
          {constructor.wins}
        </td>

        <td className="px-6 py-5 text-right font-bold">
          {constructor.points}
        </td>

      </tr>
    );

  })}

</tbody>

      </table>

    </Card>
  );
}