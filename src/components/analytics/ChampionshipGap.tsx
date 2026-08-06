import { Card } from "@/components/ui";

interface Props {
  leader: string;
  leaderPoints: number;
  second: string;
  secondPoints: number;
}

export default function ChampionshipGap({
  leader,
  leaderPoints,
  second,
  secondPoints,
}: Props) {
  const gap =
    leaderPoints - secondPoints;

  return (
    <Card className="p-8">
      <h2 className="mb-8 text-2xl font-bold">
        Championship Gap
      </h2>

      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            Leader
          </span>

          <span className="font-semibold">
            {leader}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            Second Place
          </span>

          <span className="font-semibold">
            {second}
          </span>
        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center">

          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Gap
          </p>

          <h3 className="mt-3 text-5xl font-bold text-red-400">
            {gap}
          </h3>

          <p className="mt-2 text-zinc-400">
            Championship Points
          </p>

        </div>

      </div>
    </Card>
  );
}