import Link from "next/link";

import { Card } from "@/components/ui";

import type {
  ConstructorRef,
  ConstructorStanding,
} from "@/types/constructor";

interface ConstructorProfileProps {
  constructor: ConstructorRef;
  standing: ConstructorStanding;
}

export default function ConstructorProfile({
  constructor,
  standing,
}: ConstructorProfileProps) {
  return (
    <Card className="border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold">
        Constructor Information
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <Info
          label="Constructor"
          value={constructor.name}
        />

        <Info
          label="Nationality"
          value={constructor.nationality}
        />

        <Info
          label="Championship Position"
          value={`P${standing.position}`}
        />

        <Info
          label="Championship Points"
          value={standing.points}
        />

        <Info
          label="Race Wins"
          value={standing.wins}
        />

        <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.05]">

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Official Profile
          </p>

          {constructor.url ? (
            <Link
              href={constructor.url}
              target="_blank"
              className="mt-4 inline-block font-semibold text-red-400 transition-colors hover:text-red-300"
            >
              Visit Profile →
            </Link>
          ) : (
            <p className="mt-4 text-zinc-400">
              Not Available
            </p>
          )}

        </div>

      </div>

    </Card>
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
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.05]">

      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {label}
      </p>

      <p className="mt-4 text-2xl font-bold text-white transition-colors group-hover:text-red-400">
        {value}
      </p>

    </div>
  );
}