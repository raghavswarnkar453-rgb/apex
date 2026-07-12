"use client";
import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";
import {
  Activity,
  ArrowRight,
  Radio,
  Thermometer,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
export default function Hero() {
  return (
    <Section className="flex min-h-[calc(100vh-96px)] items-center">
      <Container className="px-8 xl:px-12">
        <div className="grid gap-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left Content */}
          <motion.div
             initial={{ opacity: 0, x: -60 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{
              duration: 0.8,
               ease: "easeOut",
               }}
              className="space-y-10"
              >    
            <Badge variant="primary">● LIVE TELEMETRY</Badge>

            <div className="space-y-6">
              <h1 className="font-playfair text-6xl font-bold leading-[0.9] md:text-7xl xl:text-8xl">
                APEX
              </h1>

              <h2 className="max-w-2xl text-2xl font-semibold text-white md:text-3xl xl:text-4xl">
                Formula One Analytics Platform
              </h2>

              <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                Live timing, race strategy, telemetry, weather intelligence,
                driver analytics and constructor insights in one premium
                platform.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Next Race
              </p>

              <h3 className="text-4xl font-bold text-white">
                Belgian Grand Prix
              </h3>
            </div>

           <Countdown />

            <motion.div
                 initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.5,
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

          {/* Mission Control */}
            <motion.div
                 initial={{ opacity: 0, x: 60 }}
                 animate={{ opacity: 1, x: 0 }}
                transition={{
                   duration: 0.8,
                   delay: 0.25,
                 ease: "easeOut",
            }}
        >
            <Card className="max-w-md justify-self-end p-8 lg:w-full">
            <div className="mb-8 flex items-center justify-between">
             <motion.div
                animate={{
                    opacity: [1, 0.65, 1],
                }}
                 transition={{
                     duration: 2,
                      repeat: Infinity,
                     ease: "easeInOut",
                }}
            >
                 <Badge variant="primary">
                   ● LIVE TELEMETRY
                 </Badge>
                </motion.div>
              <Activity
                className="text-emerald-400"
                size={22}
              />
            </div>

            <div className="space-y-6">
              <InfoRow
                icon={<Radio size={18} />}
                label="Race Status"
                value="Live"
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
        {icon}
        <span>{label}</span>
      </div>

      <span className="font-mono text-xl font-bold text-white">
        {value}
      </span>
    </div>
  );
}