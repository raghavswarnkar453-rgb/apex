import Link from "next/link";

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

  return (
    <Link
      href={`/constructors/${constructor.constructorId}`}
    >
      <Card
        hover
        className="group h-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30"
      >
        <div className="flex items-center justify-between">

          <Badge variant="success">
            P{standing.position}
          </Badge>

          <span className="font-mono text-sm text-zinc-500">
            {standing.points} PTS
          </span>

        </div>

        <div className="mt-10 text-center">

          <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-400">
            {constructor.name}
          </h2>

          <p className="mt-2 text-zinc-400">
            {constructor.nationality}
          </p>

        </div>

        <div className="mt-10 flex justify-between border-t border-white/10 pt-6">

          <div>

            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Wins
            </p>

            <p className="mt-2 text-xl font-bold">
              {standing.wins}
            </p>

          </div>

          <div className="text-right">

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