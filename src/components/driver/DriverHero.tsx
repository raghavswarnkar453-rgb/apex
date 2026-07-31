"use client";

import { Badge, Card, Container, Section } from "@/components/ui";
import type {
  DriverRef,
  DriverStanding,
} from "@/types/driver";

import { motion } from "framer-motion";
import Image from "next/image";

interface DriverHeroProps {
  driver: DriverRef;
  standing: DriverStanding;
}

export default function DriverHero({
  driver,
  standing,
}: DriverHeroProps) {
  const constructor =
    standing.Constructors[0];

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="space-y-6"
          >
            <Badge variant="primary">
              DRIVER PROFILE
            </Badge>

            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
                #{driver.permanentNumber ?? "--"}
              </p>

              <h1 className="mt-4 text-5xl font-bold lg:text-6xl">
                {driver.givenName}{" "}
                {driver.familyName}
              </h1>

              <p className="mt-4 text-xl text-zinc-400">
                {constructor.name}
              </p>

              <p className="mt-2 text-zinc-500">
                {driver.nationality}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Card className="w-full max-w-sm p-8">

              <div className="flex justify-center">
                <Image
                  src="/driver-placeholder.png"
                  alt={driver.familyName}
                  width={160}
                  height={160}
                  className="rounded-full border border-white/10"
                />
              </div>

              <div className="mt-8 space-y-5">

                <Info
                  label="Position"
                  value={standing.position}
                />

                <Info
                  label="Points"
                  value={standing.points}
                />

                <Info
                  label="Wins"
                  value={standing.wins}
                />

                <Info
                  label="Constructor"
                  value={constructor.name}
                />

              </div>

            </Card>
          </motion.div>

        </div>
      </Container>
    </Section>
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