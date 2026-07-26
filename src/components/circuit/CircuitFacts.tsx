import { Card } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";

interface CircuitFactsProps {
  circuitId: string;
}

export default function CircuitFacts({
  circuitId,
}: CircuitFactsProps) {
  const metadata =
    RACE_METADATA[circuitId];

  const facts = [
    {
      label: "Country",
      value: metadata?.country ?? "-",
    },
    {
      label: "Country Code",
      value: metadata?.countryCode ?? "-",
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
      label: "Corners",
      value: metadata
        ? String(metadata.corners)
        : "-",
    },
    {
      label: "Track Length",
      value: metadata?.length ?? "-",
    },
    {
      label: "Race Laps",
      value: metadata
        ? String(metadata.laps)
        : "-",
    },
    {
      label: "First Grand Prix",
      value: metadata
        ? String(metadata.firstGrandPrix)
        : "-",
    },
  ];

  return (
    <Card className="p-8">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
        CIRCUIT FACTS
      </p>

      <h2 className="mt-3 text-2xl font-bold">
        Technical Information
      </h2>

      <div className="mt-8 space-y-5">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-center justify-between border-b border-white/5 pb-4 last:border-none"
          >
            <span className="text-zinc-500">
              {fact.label}
            </span>

            <span className="font-semibold">
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}