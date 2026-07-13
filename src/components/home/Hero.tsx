"use client";

import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";
import Countdown from "./Countdown";

import {
  Activity,
  ArrowRight,
  MapPin,
  Radio,
  Thermometer,
  Wind,
} from "lucide-react";

import { motion } from "framer-motion";

import type { Race } from "@/types/race";

interface HeroProps {
  race: Race;
}

export default function Hero({ race }: HeroProps) {
  return (
    <Section className="flex min-h-[calc(100vh-96px)] items-center overflow-hidden">
      <Container>

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="space-y-10"
          >

            <Badge variant="primary">
              ● LIVE TELEMETRY
            </Badge>

            <div className="space-y-6">

              <h1 className="font-playfair text-7xl font-black leading-[0.82] tracking-tight lg:text-8xl">
                APEX
              </h1>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white lg:text-4xl">
                Formula One
                <br />
                Analytics Platform
              </h2>

              <div className="h-px w-24 bg-gradient-to-r from-red-500 to-transparent" />

              <p className="max-w-xl text-lg leading-8 text-zinc-400">
                Live timing, telemetry,
                race strategy, weather intelligence,
                driver performance,
                constructor analytics and
                historical Formula One insights
                in one premium dashboard.
              </p>

            </div>

            <div className="space-y-4">

              <div>

                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  NEXT GRAND PRIX
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                  {race?.raceName}
                </h3>

              </div>

              <div className="flex items-center gap-2 text-zinc-400">

                <MapPin size={18} />

                <span>
                  {race?.Circuit?.circuitName}
                </span>

              </div>

            </div>

            <Countdown
              targetDate={race?.date}
              targetTime={race?.time}
              />

            <div className="h-px w-24 bg-gradient-to-r from-red-500 to-transparent" />

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="flex flex-wrap gap-5"
            >

              <Button>
                Explore Dashboard
                <ArrowRight size={18} />
              </Button>

              <Button variant="secondary">
                Live Timing
              </Button>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
          >

            <Card className="w-full max-w-lg justify-self-end p-8">

              <div className="mb-8 flex items-center justify-between">

                <motion.div
                  animate={{
                    opacity: [1, .5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >

                  <Badge variant="success">
                    MISSION CONTROL
                  </Badge>

                </motion.div>

                <Activity
                  className="text-emerald-400"
                  size={22}
                />

              </div>

              <h3 className="mb-8 text-2xl font-bold">
                Telemetry Status
              </h3>

              <div className="space-y-7">
                               <InfoRow
                  icon={<Radio size={18} />}
                  label="Race Status"
                  value="LIVE"
                />

                <InfoRow
                  icon={<MapPin size={18} />}
                  label="Circuit"
                  value="Spa"
                />

                <InfoRow
                  icon={<Thermometer size={18} />}
                  label="Track Temp"
                  value="28°C"
                />

                <InfoRow
                  icon={<Wind size={18} />}
                  label="Wind"
                  value="12 km/h"
                />

                <InfoRow
                  icon={<Activity size={18} />}
                  label="Top Speed"
                  value="327 km/h"
                />

              </div>

              <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  SYSTEM STATUS
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-zinc-300">
                    Telemetry Feed
                  </span>

                  <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

                    <span className="font-semibold text-emerald-400">
                      ONLINE
                    </span>

                  </div>

                </div>

              </div>

            </Card>

          </motion.div>

        </div>

      </Container>
    </Section>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-5 last:border-none">

      <div className="flex items-center gap-3 text-zinc-400">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          {icon}
        </div>

        <span>{label}</span>

      </div>

      <span className="font-mono text-xl font-bold text-white">
        {value}
      </span>

    </div>
  );
} 