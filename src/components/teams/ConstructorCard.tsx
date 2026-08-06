import Link from "next/link";
import { getTeamColor } from "@/lib/teamColors";
import { Badge, Card } from "@/components/ui";

import type { ConstructorStanding } from "@/types/constructor";

interface ConstructorCardProps {
  standing: ConstructorStanding;
}

export default function ConstructorCard({
  standing,
}: ConstructorCardProps) {
  const constructor =
    standing.Constructor;
    const teamColor =
  getTeamColor(
    constructor.constructorId
  );

  return (
    <Link
      href={`/constructors/${constructor.constructorId}`}
    >
      <Card
        hover
        className="
group
h-full
overflow-hidden
border
border-white/10
bg-white/[0.03]
p-6
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:scale-[1.02]
hover:border-red-500/40
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(239,68,68,0.18)]
"
      >
     <div
  className="h-1 w-full rounded-t-xl"
  style={{
    backgroundColor:
      teamColor,
  }}
/>
        <div className="flex items-center justify-between">

          <Badge
  variant={
    Number(
      standing.position
    ) === 1
      ? "warning"
      : Number(
          standing.position
        ) === 2
      ? "info"
      : Number(
          standing.position
        ) === 3
      ? "danger"
      : "neutral"
  }
>
  P{standing.position}
</Badge>

          <span className="font-mono text-sm text-zinc-500">
            {standing.points} PTS
          </span>

        </div>

        <div className="mt-10 text-center">

          <h2 className="text-2xl font-bold transition-all duration-300 group-hover:text-red-400">
            {constructor.name}
          </h2>

          <p className="mt-2 text-zinc-400">
            {constructor.nationality}
          </p>

        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">

  <div>
    <p className="text-xs uppercase tracking-widest text-zinc-500">
      Points
    </p>

    <p className="mt-2 text-xl font-bold">
      {standing.points}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-widest text-zinc-500">
      Wins
    </p>

    <p className="mt-2 text-xl font-bold">
      {standing.wins}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-widest text-zinc-500">
      Position
    </p>

    <p className="mt-2 text-xl font-bold">
      P{standing.position}
    </p>
  </div>

</div>
        
        

      </Card>
    </Link>
  );
}