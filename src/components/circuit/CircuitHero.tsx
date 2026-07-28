"use client";
import { Badge, Card, Container, Section } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";
import type { Circuit } from "@/types/circuit";
import Image from "next/image";
import { getCircuitMetadata } from "@/lib/circuit";
interface CircuitHeroProps {
  circuit: Circuit;
}
import { motion } from "framer-motion";
export default function CircuitHero({
  circuit,
}: CircuitHeroProps) {
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
    <Section>
      <Container>
        <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge variant="primary">
              CIRCUIT EXPLORER
            </Badge>

            <div className="mt-6 flex items-center gap-3">
            <Image
             src={`https://flagcdn.com/w40/${metadata?.countryCode.toLowerCase()}.png`}
             alt={metadata?.country ?? ""}
             width={28}
              height={20}
             className="rounded-sm border border-white/10"
            />

  <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
    {metadata?.country ?? circuit.Location.country}
  </p>
</div>

            <h1 className="mt-4 text-5xl font-bold lg:text-6xl">
              {circuit.circuitName}
            </h1>

            <p className="mt-4 text-xl text-zinc-400">
              {circuit.Location.locality},{" "}
              {circuit.Location.country}
            </p>
          </div>

          <Card className="w-full max-w-md border border-red-500/20 bg-white/[0.03] backdrop-blur-xl">
            <p className="font-mono text-xs tracking-[0.3em] text-emerald-400">
              CIRCUIT DATA
            </p>

            <div className="mt-6 space-y-5">
              <Info
                label="Track Length"
                value={metadata?.length ?? "-"}
              />

              <Info
                label="Corners"
                value={
                  metadata
                    ? String(metadata.corners)
                    : "-"
                }
              />

              <Info
                label="Laps"
                value={
                  metadata
                    ? String(metadata.laps)
                    : "-"
                }
              />

              <Info
                label="First GP"
                value={
                  metadata
                    ? String(
                        metadata.firstGrandPrix
                      )
                    : "-"
                }
              />
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  </motion.div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-4">
      <span className="text-zinc-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}