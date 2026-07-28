"use client";
import { Card } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";
import { getCircuitMetadata } from "@/lib/circuit";
interface CircuitStatsProps {
  circuitId: string;
}
import { motion } from "framer-motion";
export default function CircuitStats({
  circuitId,
}: CircuitStatsProps) {
  const metadata =
    getCircuitMetadata(circuitId);

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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_35px_rgba(239,68,68,0.15)] "
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            {stat.label}
          </p>

          <p className="mt-4 text-4xl font-bold">
            {stat.value}
          </p>
        </Card>
      ))}
    </div>
    </motion.div>
  );
}