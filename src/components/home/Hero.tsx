import Link from "next/link";

import { getRaceStatus } from "@/lib/raceStatus";
import { RACE_METADATA } from "@/constants/raceMetadata";
import { getWeather } from "@/services/weather";

import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";

import Countdown from "./Countdown";

import {
  ArrowRight,
  CloudSun,
  Droplets,
  MapPin,
  Thermometer,
  Wind,
} from "lucide-react";

import type { Race } from "@/types/race";

interface HeroProps {
  race: Race;
}

export default async function Hero({
  race,
}: HeroProps) {
  const {
    status: raceStatus,
    telemetry: telemetryStatus,
  } = getRaceStatus(race);

  const metadata =
    RACE_METADATA[race.Circuit.circuitId];

  const weather = metadata
    ? await getWeather(
        metadata.latitude,
        metadata.longitude
      )
    : {
        temperature: "--",
        wind: "--",
        humidity: "--",
        condition: "Unavailable",
      };

  return (
    <Section className="relative isolate flex min-h-[calc(100vh-96px)] items-center overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/hero/f1-hero.jpg')",
        }}
      />

      <div className="absolute inset-0 -z-20 bg-black/75" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}

          <div className="space-y-10 transition-all duration-700">

            <Badge variant="danger">
              ● LIVE TELEMETRY
            </Badge>

            <div className="space-y-7">

              <h1 className="font-playfair text-7xl font-black leading-[0.82] tracking-tight lg:text-8xl">
                APEX
              </h1>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white lg:text-5xl">
                Formula One
                <br />
                Analytics Platform
              </h2>

              <div className="h-px w-28 bg-gradient-to-r from-red-500 to-transparent" />

              <p className="max-w-xl text-lg leading-8 text-zinc-300">
                Live timing,
                telemetry,
                race strategy,
                weather intelligence,
                driver analytics,
                constructor performance,
                and historical Formula One
                insights in one premium dashboard.
              </p>

            </div>

            <div className="space-y-4">

              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                NEXT GRAND PRIX
              </p>

              <h3 className="text-5xl font-bold">
                {race.raceName}
              </h3>

              <div className="flex items-center gap-2 text-zinc-400">

                <MapPin size={18} />

                <span>
                  {race.Circuit.circuitName}
                </span>

              </div>

            </div>

            <Countdown
              targetDate={race.date}
              targetTime={race.time}
            />

            <div className="h-px w-28 bg-gradient-to-r from-red-500 to-transparent" />

            <div className="flex flex-wrap gap-5">

              <Button>
                Explore Dashboard
                <ArrowRight size={18} />
              </Button>

              <Link
                href={`/race/${race.round}`}
              >
                <Button variant="secondary">
                  View Race
                </Button>
              </Link>

            </div>

          </div>

          {/* RIGHT */}
                    <div className="flex justify-end transition-all duration-700">

            <Card className="w-full max-w-xl overflow-hidden border border-white/10 bg-black/40 p-0 backdrop-blur-2xl">

              {/* Header */}

              <div className="border-b border-white/10 bg-white/[0.03] px-8 py-6">

                <div className="flex items-center justify-between">

                  <div>

                    <Badge variant="success">
                      MISSION CONTROL
                    </Badge>

                    <h3 className="mt-4 text-3xl font-bold">
                      {race.raceName}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      {race.Circuit.circuitName}
                    </p>

                  </div>

                  <div className="flex flex-col items-center">

                    <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_#4ade80]" />

                    <span
                      className={`mt-2 text-xs uppercase tracking-[0.2em] font-semibold ${
                        telemetryStatus === "ONLINE"
                          ? "text-emerald-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {telemetryStatus}
                    </span>

                  </div>

                </div>

              </div>

              {/* Body */}

              <div className="space-y-6 p-8">

                <InfoRow
                  label="Race Status"
                  value={raceStatus}
                />

                <InfoRow
                  label="Circuit"
                  value={
                    race.Circuit.Location.locality
                  }
                />

                <InfoRow
                  label="Country"
                  value={
                    race.Circuit.Location.country
                  }
                />

                <InfoRow
                  label="Temperature"
                  value={
                    weather.temperature
                  }
                  icon={
                    <Thermometer
                      size={18}
                    />
                  }
                />

                <InfoRow
                  label="Wind"
                  value={weather.wind}
                  icon={
                    <Wind size={18} />
                  }
                />

                <InfoRow
                  label="Humidity"
                  value={
                    weather.humidity
                  }
                  icon={
                    <Droplets
                      size={18}
                    />
                  }
                />

                <InfoRow
                  label="Condition"
                  value={
                    weather.condition
                  }
                  icon={
                    <CloudSun
                      size={18}
                    />
                  }
                />

              </div>

              {/* Footer */}

              <div className="border-t border-white/10 bg-white/[0.03] p-8">

                <div className="mb-6">

                  <div className="mb-3 flex items-center justify-between">

                    <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      SYSTEM STATUS
                    </span>

                    <span
                      className={`font-semibold ${
                        telemetryStatus === "ONLINE"
                          ? "text-emerald-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {telemetryStatus}
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">

                    <div
                      className={`h-full transition-all duration-700 ${
                        telemetryStatus === "ONLINE"
                          ? "w-full bg-emerald-500"
                          : "w-1/3 bg-yellow-500"
                      }`}
                    />

                  </div>

                </div>

                <Link
                  href={`/race/${race.round}`}
                >
                  <Button className="w-full">
                    View Race

                    <ArrowRight
                      size={18}
                    />
                  </Button>
                </Link>

              </div>

            </Card>

          </div>
                  </div>

      </Container>

    </Section>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

function InfoRow({
  label,
  value,
  icon,
}: InfoRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-5 last:border-none">

      <div className="flex items-center gap-3">

        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-red-400">
            {icon}
          </div>
        )}

        <span className="text-zinc-400">
          {label}
        </span>

      </div>

      <span className="font-mono text-lg font-semibold text-white">
        {value}
      </span>

    </div>
  );
}