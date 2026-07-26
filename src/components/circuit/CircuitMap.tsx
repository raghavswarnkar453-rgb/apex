import { Card } from "@/components/ui";
import {
  Map,
  MapPinned,
} from "lucide-react";

interface CircuitMapProps {
  circuitName: string;
  locality: string;
  country: string;
}

export default function CircuitMap({
  circuitName,
  locality,
  country,
}: CircuitMapProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-white/10 bg-white/5 px-8 py-5">
        <div className="flex items-center gap-3">
          <Map
            className="text-red-500"
            size={22}
          />

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              TRACK MAP
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Circuit Layout
            </h2>
          </div>
        </div>
      </div>

      <div className="flex h-[420px] flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
        <MapPinned
          size={72}
          className="text-zinc-700"
        />

        <p className="mt-6 text-xl font-semibold">
          {circuitName}
        </p>

        <p className="mt-2 text-zinc-500">
          {locality}, {country}
        </p>

        <div className="mt-8 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">
          <span className="text-sm font-semibold text-red-400">
            SVG Track Map Coming Soon
          </span>
        </div>
      </div>
    </Card>
  );
}