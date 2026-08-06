import { Activity } from "lucide-react";

import { Badge } from "@/components/ui";

export default function AnalyticsHeader() {
  const updatedAt = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="mb-14">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        {/* Left */}

        <div>

          <p className="font-mono text-xs uppercase tracking-[0.35em] text-red-400">
            Formula One Analytics
          </p>

          <h1 className="mt-4 font-playfair text-5xl font-black leading-tight lg:text-6xl">
            Championship
            <br />
            Performance Dashboard
          </h1>

          <div className="mt-6 h-px w-28 bg-gradient-to-r from-red-500 to-transparent" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Explore live Formula One championship statistics,
            constructor performance, driver trends,
            race analytics and season insights through
            interactive visualisations.
          </p>

        </div>

        {/* Right */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <Badge variant="success">
              LIVE DATA
            </Badge>

            <Activity
              className="text-emerald-400"
              size={18}
            />

          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-zinc-500">
            Last Updated
          </p>

          <p className="mt-2 text-2xl font-bold">
            {updatedAt}
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Cached analytics refreshed automatically.
          </p>

        </div>

      </div>

    </div>
  );
}