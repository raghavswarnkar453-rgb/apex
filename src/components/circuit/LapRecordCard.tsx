import { Card } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";
import { Clock3, Flag, Trophy } from "lucide-react";
import { getCircuitMetadata } from "@/lib/circuit";
interface LapRecordCardProps {
  circuitId: string;
}

export default function LapRecordCard({
  circuitId,
}: LapRecordCardProps) {
 const metadata =
  getCircuitMetadata(circuitId);

  return (
    <Card className="p-8">
      <div className="flex items-center gap-3">
        <Trophy
          className="text-yellow-400"
          size={24}
        />

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            FASTEST LAP
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Official Lap Record
          </h2>
        </div>
      </div>

      <div className="mt-8 space-y-6">

        <Row
          icon={<Clock3 size={18} />}
          label="Lap Time"
          value={metadata?.lapRecord ?? "-"}
        />

        <Row
          icon={<Flag size={18} />}
          label="Driver"
          value="Coming Soon"
        />

        <Row
          icon={<Trophy size={18} />}
          label="Season"
          value="Coming Soon"
        />

      </div>
    </Card>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-5 last:border-none">
      <div className="flex items-center gap-3 text-zinc-400">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          {icon}
        </div>

        <span>{label}</span>
      </div>

      <span className="font-mono text-xl font-bold">
        {value}
      </span>
    </div>
  );
}
