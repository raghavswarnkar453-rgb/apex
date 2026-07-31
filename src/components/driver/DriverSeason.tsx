import { Card } from "@/components/ui";
import type { DriverStanding } from "@/types/driver";

interface DriverSeasonProps {
  standing: DriverStanding;
}

export default function DriverSeason({
  standing,
}: DriverSeasonProps) {
  const constructor =
    standing.Constructors[0];

  return (
    <Card className="border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      <h2 className="text-3xl font-bold">
        Current Season
      </h2>

      <div className="mt-8 space-y-6">

        <Row
          label="Team"
          value={constructor.name}
        />

        <Row
          label="Championship"
          value={`P${standing.position}`}
        />

        <Row
          label="Points"
          value={standing.points}
        />

        <Row
          label="Race Wins"
          value={standing.wins}
        />

      </div>
    </Card>
  );
}
function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-red-500/20">

      <span className="text-zinc-500">
        {label}
      </span>

      <span className="font-semibold text-white">
        {value}
      </span>

    </div>
  );
}