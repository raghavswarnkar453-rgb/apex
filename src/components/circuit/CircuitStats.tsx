import { Card } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";

interface CircuitStatsProps {
  circuitId: string;
}

export default function CircuitStats({
  circuitId,
}: CircuitStatsProps) {
  const metadata =
    RACE_METADATA[circuitId];

  const stats = [
    {
      label: "Track Length",
      value: metadata?.length ?? "-",
    },
    {
      label: "Corners",
      value: metadata
        ? String(metadata.corners)
        : "-",
    },
    {
      label: "Race Laps",
      value: metadata
        ? String(metadata.laps)
        : "-",
    },
    {
      label: "First GP",
      value: metadata
        ? String(metadata.firstGrandPrix)
        : "-",
    },
    {
      label: "Direction",
      value: metadata?.direction ?? "-",
    },
    {
      label: "DRS Zones",
      value: metadata
        ? String(metadata.drsZones)
        : "-",
    },
    {
      label: "Lap Record",
      value: metadata?.lapRecord ?? "-",
    },
    {
      label: "Country",
      value: metadata?.country ?? "-",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="p-6 transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.06]"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            {stat.label}
          </p>

          <p className="mt-4 text-3xl font-bold">
            {stat.value}
          </p>
        </Card>
      ))}
    </div>
  );
}