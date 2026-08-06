import { Card } from "@/components/ui";

interface Props {
  completedRaces: number;
  totalRaces: number;
}

export default function SeasonProgress({
  completedRaces,
  totalRaces,
}: Props) {
  const percentage =
    totalRaces === 0
      ? 0
      : Math.round(
          (completedRaces / totalRaces) *
            100
        );

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold">
        Season Progress
      </h2>

      <p className="mt-2 text-zinc-400">
        {completedRaces} of {totalRaces} races completed
      </p>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-red-500 transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mt-4 flex justify-between text-sm text-zinc-500">
        <span>0%</span>
        <span className="font-semibold text-white">
          {percentage}%
        </span>
        <span>100%</span>
      </div>
    </Card>
  );
}