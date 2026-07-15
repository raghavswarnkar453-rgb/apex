"use client";

import { Badge, Card, Container, Section } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";
import type { Race } from "@/types/race";
import { motion } from "framer-motion";

interface RaceOverviewProps {
  race: Race;
}

export default function RaceOverview({
  race,
}: RaceOverviewProps) {
  const metadata =
    RACE_METADATA[race.Circuit.circuitId];

  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Badge variant="primary">
            RACE OVERVIEW
          </Badge>

          <h2 className="mt-6 text-5xl font-bold">
            {race.raceName}
          </h2>

          <p className="mt-3 text-zinc-400">
            {race.Circuit.circuitName}
          </p>
        </div>

        <Card className="p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-3">

            <Metric
              label="ROUND"
              value={race.round}
            />

            <Metric
              label="COUNTRY"
              value={
                metadata?.country ??
                race.Circuit.Location.country
              }
            />

            <Metric
              label="TRACK LENGTH"
              value={
                metadata?.length ?? "-"
              }
            />

            <Metric
              label="CORNERS"
              value={metadata ? String(metadata.corners) : "-"}
            />

            <Metric
              label="LAPS"
              value={metadata ? String(metadata.laps) : "-"}
            />

            <Metric
              label="FIRST GP"
              value={metadata ? String(metadata.firstGrandPrix) : "-"}
            />
          </div>
        </Card>
      </Container>
    </Section>
  );
}

interface MetricProps {
  label: string;
  value: string;
}

function Metric({
  label,
  value,
}: MetricProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/10"
    >
      <p className="font-mono text-xs tracking-[0.25em] text-zinc-500">
        {label}
      </p>

      <p className="mt-4 text-3xl font-bold">
        {value}
      </p>
    </motion.div>
  );
}