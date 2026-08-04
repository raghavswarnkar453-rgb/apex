import { notFound } from "next/navigation";
import {
  formatDate,
  formatTime,
} from "@/lib/date";
import { Badge, Card, Container, Section } from "@/components/ui";
import { RACE_METADATA } from "@/constants/raceMetadata";
import { getRaceWeekend } from "@/services/raceWeekend";
import Link from "next/link";
import { Button } from "@/components/ui";
import RaceTimeline from "@/components/race/RaceTimeline";
interface PageProps {
  params: Promise<{
    round: string;
  }>;
}

export default async function RaceWeekendPage({
  params,
}: PageProps) {
  const { round } = await params;

  const race = await getRaceWeekend(round);

  if (!race) {
    notFound();
  }

  const metadata =
    RACE_METADATA[race.Circuit.circuitId];
    const sessions = [
  {
    name: "Practice 1",
    session: race.FirstPractice,
  },
  {
    name: "Practice 2",
    session: race.SecondPractice,
  },
  {
    name: "Practice 3",
    session: race.ThirdPractice,
  },
  race.Sprint
    ? {
        name: "Sprint",
        session: race.Sprint,
      }
    : null,
  {
    name: "Qualifying",
    session: race.Qualifying,
  },
  {
    name: "Race",
    session: {
      date: race.date,
      time: race.time,
    },
  },
].filter(
  (
    item
  ): item is {
    name: string;
    session: {
      date: string;
      time: string;
    };
  } =>
    item !== null &&
    item.session !== undefined
);

 

  return (
    <Section>
      <Container>
       <div className="mb-12">
  <Badge variant="primary">
    LIVE TELEMETRY
  </Badge>

  <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
        ROUND {race.round}
      </p>

      <h1 className="mt-4 text-5xl font-bold lg:text-6xl">
        {race.raceName}
      </h1>

      <p className="mt-4 text-xl text-zinc-400">
        {race.Circuit.circuitName}
      </p>

      <p className="mt-2 text-zinc-500">
        {race.Circuit.Location.locality},{" "}
        {race.Circuit.Location.country}
      </p>
    </div>

    <Card className="w-full max-w-sm">
      <p className="font-mono text-xs tracking-[0.3em] text-emerald-400">
        MISSION CONTROL
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Race Status
      </h3>

      <div className="mt-6 space-y-4">

        <Info
          label="Round"
          value={race.round}
        />

        <Info
          label="Circuit"
          value={race.Circuit.Location.locality}
        />

        <Info
          label="Country"
          value={race.Circuit.Location.country}
        />

        <Info
            label="Race Date"
            value={formatDate(race.date)}
         /> 
           <Link href={`/circuits/${race.Circuit.circuitId}`}>
           <Button className="mt-4 w-full">
              View Circuit
            </Button>
           </Link>
      </div>
    </Card>
  </div>
</div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <RaceTimeline
           sessions={sessions}
          formatDate={formatDate}
          formatTime={formatTime}
          />

          <Card className="p-8">
            <h2 className="text-xl font-semibold">
              Circuit Information
            </h2>

            <div className="mt-8 space-y-6">
              <Info
                label="Round"
                value={race.round}
              />

              <Info
                label="Country"
                value={metadata?.country ?? "-"}
              />

              <Info
                label="Track Length"
                value={metadata?.length ?? "-"}
              />

              <Info
                label="Corners"
                value={
                  metadata
                    ? String(metadata.corners)
                    : "-"
                }
              />

              <Info
                label="Laps"
                value={
                  metadata
                    ? String(metadata.laps)
                    : "-"
                }
              />

              <Info
                label="First GP"
                value={
                  metadata
                    ? String(metadata.firstGrandPrix)
                    : "-"
                }
              />
            </div>
          </Card>
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
    <div className="flex items-center justify-between border-b border-white/5 pb-4">
      <span className="text-zinc-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}