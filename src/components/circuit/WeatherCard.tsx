import { Card } from "@/components/ui";
import {
  CloudSun,
  Thermometer,
  Wind,
  Droplets,
} from "lucide-react";

import { RACE_METADATA } from "@/constants/raceMetadata";
import { getWeather } from "@/services/weather";

interface WeatherCardProps {
  circuitId: string;
}

export default async function WeatherCard({
  circuitId,
}: WeatherCardProps) {
  const metadata =
    RACE_METADATA[circuitId];

  if (!metadata) {
    return null;
  }

  const weather =
    await getWeather(
      metadata.latitude,
      metadata.longitude
    );

  return (
    <Card className="p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_0_35px_rgba(239,68,68,0.15)]">
      <div className="flex items-center gap-3">
        <CloudSun
          className="text-sky-400"
          size={24}
        />

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            WEATHER
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Live Race Weather
          </h2>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <Row
          icon={
            <Thermometer size={18} />
          }
          label="Temperature"
          value={
            weather.temperature
          }
        />

        <Row
          icon={<Wind size={18} />}
          label="Wind"
          value={weather.wind}
        />

        <Row
          icon={
            <Droplets size={18} />
          }
          label="Humidity"
          value={
            weather.humidity
          }
        />

        <Row
          icon={
            <CloudSun size={18} />
          }
          label="Condition"
          value={
            weather.condition
          }
        />
      </div>
    </Card>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function Row({
  icon,
  label,
  value,
}: RowProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-5 last:border-none">
      <div className="flex items-center gap-3 text-zinc-400">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          {icon}
        </div>

        <span>{label}</span>
      </div>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}