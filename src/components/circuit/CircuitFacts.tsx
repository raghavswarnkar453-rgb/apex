"use client";
import { Card } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";
import { getCircuitMetadata } from "@/lib/circuit";
interface CircuitFactsProps {
  circuitId: string;
}
import { motion } from "framer-motion";
export default function CircuitFacts({
  circuitId,
}: CircuitFactsProps) {
  const metadata =
  getCircuitMetadata(circuitId);

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
    <Card className="p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_0_35px_rgba(239,68,68,0.15)] ">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
        CIRCUIT FACTS
      </p>

      <h2 className="mt-3 text-3xl font-bold">
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
      </motion.div>
  );
}