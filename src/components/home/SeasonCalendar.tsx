"use client";
import { formatDate } from "@/lib/date";
import { Badge, Card, Container, Section } from "@/components/ui";
import type { CalendarRace } from "@/types/calendar";
import { motion } from "framer-motion";
import Link from "next/link";
interface SeasonCalendarProps {
  races: CalendarRace[];
  nextRaceRound: string;
}

export default function SeasonCalendar({
  races,
  nextRaceRound,
}: SeasonCalendarProps) {
  const today = new Date();

  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Badge variant="primary">
            SEASON CALENDAR
          </Badge>

          <h2 className="mt-6 text-5xl font-bold">
            2026 Formula One Calendar
          </h2>

          <p className="mt-3 text-zinc-400">
            Complete race schedule for the current season.
          </p>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="hidden md:block">
            <div className="grid grid-cols-[90px_2fr_1.6fr_160px_150px] border-b border-white/10 bg-white/5 px-8 py-5 text-sm uppercase tracking-widest text-zinc-500">
              <span>Round</span>
              <span>Grand Prix</span>
              <span>Circuit</span>
              <span>Date</span>
              <span>Status</span>
            </div>

            {races.map((race) => (
              <DesktopRow
                key={race.round}
                race={race}
                today={today}
                nextRaceRound={nextRaceRound}
              />
            ))}
          </div>

          <div className="space-y-4 p-4 md:hidden">
            {races.map((race) => (
              <MobileCard
                key={race.round}
                race={race}
                today={today}
                nextRaceRound={nextRaceRound}
              />
            ))}
          </div>
        </Card>
      </Container>
    </Section>
  );
}

function DesktopRow({
  race,
  today,
  nextRaceRound,
}: {
  race: CalendarRace;
  today: Date;
  nextRaceRound: string;
}) {
  const raceDate = new Date(race.date);

  const status =
    raceDate < today
      ? "Completed"
      : race.round === nextRaceRound
      ? "Next Race"
      : "Upcoming";

  const statusClasses =
    status === "Completed"
      ? "border-zinc-700 bg-zinc-900/60 text-zinc-400"
      : status === "Next Race"
      ? "border-red-500/30 bg-red-500/10 text-red-400"
      : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400";

 return (
      <Link
         href={`/circuits/${race.Circuit.circuitId}`}
         className="contents"
         >      
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      className="grid grid-cols-[90px_2fr_1.6fr_160px_150px] items-center border-b border-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/[0.08] hover:shadow-[0_0_24px_rgba(255,255,255,0.03)] cursor-pointer"
    >
      <div className="flex">
        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-sm font-semibold">
          R{race.round}
        </span>
      </div>

      <div>
        <p className="font-semibold">
          {race.raceName}
        </p>

        <p className="mt-1 text-sm text-zinc-500">
          {race.Circuit.Location.locality},{" "}
          {race.Circuit.Location.country}
        </p>
      </div>

      <span className="text-zinc-300">
        {race.Circuit.circuitName}
      </span>

      <span>
       {formatDate(race.date)}
      </span>

      <span
        className={[
          "inline-flex",
          "w-fit",
          "items-center",
          "justify-center",
          "rounded-full",
          "border",
          "px-3",
          "py-1",
          "text-xs",
          "font-semibold",
          "tracking-wide",
          statusClasses,
        ].join(" ")}
      >
        {status}
      </span>
    </motion.div>
  </Link>
);
}
function MobileCard({
  race,
  today,
  nextRaceRound,
}: {
  race: CalendarRace;
  today: Date;
  nextRaceRound: string;
}) {
  const raceDate = new Date(race.date);

  const status =
    raceDate < today
      ? "Completed"
      : race.round === nextRaceRound
      ? "Next Race"
      : "Upcoming";

  const statusClasses =
    status === "Completed"
      ? "border-zinc-700 bg-zinc-900/60 text-zinc-400"
      : status === "Next Race"
      ? "border-red-500/30 bg-red-500/10 text-red-400"
      : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400";

 return (
  <Link
  href={`/circuits/${race.Circuit.circuitId}`}
>
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/[0.08] hover:shadow-[0_0_24px_rgba(255,255,255,0.03)] cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-semibold">
            R{race.round}
          </span>

          <p className="mt-4 text-lg font-semibold">
            {race.raceName}
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            {race.Circuit.circuitName}
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            {race.Circuit.Location.locality},{" "}
            {race.Circuit.Location.country}
          </p>

          <p className="mt-4 text-sm">
            {formatDate(race.date)}
          </p>
        </div>

        <span
          className={[
            "inline-flex",
            "items-center",
            "justify-center",
            "rounded-full",
            "border",
            "px-3",
            "py-1",
            "text-xs",
            "font-semibold",
            "tracking-wide",
            statusClasses,
          ].join(" ")}
        >
          {status}
        </span>
      </div>
    </motion.div>
  </Link>
);
}