"use client";
import { Card } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";
import type { Circuit } from "@/types/circuit";
import { getCircuitMetadata } from "@/lib/circuit";
interface CircuitOverviewProps {
  circuit: Circuit;
}
import { motion } from "framer-motion";
export default function CircuitOverview({
  circuit,
}: CircuitOverviewProps) {
  const metadata =
  getCircuitMetadata(
    circuit.circuitId
  );

  return (
    <motion.div
    initial={{
      opacity: 0,
      y: 20,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.4,
    }}
  >
    <Card className="p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_0_35px_rgba(239,68,68,0.15)]">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
        TRACK OVERVIEW
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        {circuit.circuitName}
      </h2>

      <p className="mt-6 text-lg leading-9 text-zinc-400">
        Located in{" "}
        <span className="font-semibold text-white">
          {circuit.Location.locality}
        </span>
        ,{" "}
        <span className="font-semibold text-white">
          {metadata?.country ??
            circuit.Location.country}
        </span>
        , this Formula One circuit is one of the
        championship venues on the calendar. The
        circuit features{" "}
        <span className="font-semibold text-white">
          {metadata?.corners ?? "-"} corners
        </span>{" "}
        across a{" "}
        <span className="font-semibold text-white">
          {metadata?.length ?? "-"}
        </span>{" "}
        layout and hosts a{" "}
        <span className="font-semibold text-white">
          {metadata?.laps ?? "-"} lap
        </span>{" "}
        Grand Prix.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <OverviewItem
          title="Direction"
          value={metadata?.direction ?? "-"}
        />

        <OverviewItem
          title="DRS Zones"
          value={
            metadata
              ? String(metadata.drsZones)
              : "-"
          }
        />

        <OverviewItem
          title="Lap Record"
          value={metadata?.lapRecord ?? "-"}
        />

        <OverviewItem
          title="First Grand Prix"
          value={
            metadata
              ? String(metadata.firstGrandPrix)
              : "-"
          }
        />
      </div>
    </Card>
      </motion.div>
  );
}

function OverviewItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>

      <p className="mt-3 text-xl font-semibold">
        {value}
      </p>
    </div>
    
  );
}