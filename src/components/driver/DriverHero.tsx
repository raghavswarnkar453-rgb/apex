"use client";

import { Badge, Card, Container, Section } from "@/components/ui";
import type {
  DriverRef,
  DriverStanding,
} from "@/types/driver";
import DriverHeader from "./DriverHeader";
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
            <DriverHeader
             driver={driver}
            standing={standing}
             />
            
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
            <Card className="w-full max-w-sm border border-red-500/20 bg-white/[0.03] p-8 backdrop-blur-xl">

              <div className="relative flex justify-center">
                <div className="absolute h-44 w-44 rounded-full bg-red-500/10 blur-3xl" />
                <Image
                  src="/driver-placeholder.png"
                  alt={driver.familyName}
                  width={160}
                  height={160}
                  className="rounded-full border border-white/10"
                />
              </div>

              <div className="mt-8 space-y-5">

                <div className="mt-8 space-y-5">

                 <Info
                 label="Championship"
                 value={`P${standing.position}`}
                   />

                    <Info
                    label="Points"
                     value={standing.points}
                           />

                       <Info
                      label="Race Wins"
                       value={standing.wins}
                             />

                       <Info
                       label="Constructor"
                         value={constructor.name}
                          />

</div>

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
    <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-red-500/20">

      <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </span>

      <span className="font-mono text-lg font-bold text-white">
        {value}
      </span>

    </div>
  );
}