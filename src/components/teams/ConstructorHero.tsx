"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  Card,
  Container,
  Section,
} from "@/components/ui";

import ConstructorHeader from "./ConstructorHeader";

import { getTeamIdentity } from "@/lib/team";

import type {
  ConstructorRef,
  ConstructorStanding,
} from "@/types/constructor";

interface ConstructorHeroProps {
  constructor: ConstructorRef;
  standing: ConstructorStanding;
}

export default function ConstructorHero({
  constructor,
  standing,
}: ConstructorHeroProps) {
  const team = getTeamIdentity(
    constructor.constructorId
  );

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
            className="flex-1"
          >
            <ConstructorHeader
              constructor={constructor}
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
            <Card className="w-full max-w-sm overflow-hidden border border-white/10 p-0 backdrop-blur-xl">

              <div
                className="p-8"
                style={{
                  borderTop: `4px solid ${team.primary}`,
                  background: `linear-gradient(
                    180deg,
                    ${team.primary}15 0%,
                    rgba(255,255,255,0.03) 100%
                  )`,
                }}
              >

                <div className="mb-8 flex justify-center">

                  <Image
                    src={team.logo}
                    alt={constructor.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />

                </div>

                <div className="space-y-5">

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
                    label="Nationality"
                    value={constructor.nationality}
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