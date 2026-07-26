import { Card } from "@/components/ui";
import {
  CloudSun,
  Thermometer,
  Wind,
  Droplets,
} from "lucide-react";

export default function WeatherCard() {
  return (
    <Card className="p-8">
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
            Race Forecast
          </h2>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <Row
          icon={<Thermometer size={18} />}
          label="Temperature"
          value="Coming Soon"
        />

        <Row
          icon={<Wind size={18} />}
          label="Wind"
          value="Coming Soon"
        />

        <Row
          icon={<Droplets size={18} />}
          label="Humidity"
          value="Coming Soon"
        />

        <Row
          icon={<CloudSun size={18} />}
          label="Condition"
          value="Coming Soon"
        />
      </div>
    </Card>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
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