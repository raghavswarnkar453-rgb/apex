import { Card } from "@/components/ui";

interface Props {
  driver: string;
  driverPoints: number;
  constructor: string;
  constructorPoints: number;
}

export default function ComparisonCard({
  driver,
  driverPoints,
  constructor,
  constructorPoints,
}: Props) {
  return (
    <Card className="p-8">
      <h2 className="mb-8 text-2xl font-bold">
        Championship Leaders
      </h2>

      <div className="space-y-6">

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Driver
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {driver}
          </h3>

          <p className="mt-2 text-red-400">
            {driverPoints} pts
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Constructor
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {constructor}
          </h3>

          <p className="mt-2 text-red-400">
            {constructorPoints} pts
          </p>
        </div>

      </div>
    </Card>
  );
}