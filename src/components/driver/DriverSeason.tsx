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
    <Card className="p-8">
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
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <span className="text-zinc-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}