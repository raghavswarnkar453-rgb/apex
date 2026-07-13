"use client";
import { Badge, Card, Container, Section } from "@/components/ui";
import { TEAM_COLORS } from "@/constants/teamColors";
import { motion } from "framer-motion";
import type { DriverStanding } from "@/types/driver";

interface StandingsPreviewProps {
  drivers: DriverStanding[];
}

export default function StandingsPreview({
  drivers,
}: StandingsPreviewProps) {
  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Badge variant="primary">
            DRIVER STANDINGS
          </Badge>

          <h2 className="mt-6 text-5xl font-bold">
            Championship Standings
          </h2>

          <p className="mt-3 text-zinc-400">
            Live Formula One Driver Championship
          </p>
        </div>

        <Card className="overflow-hidden p-0">
            <div className="hidden md:block">

          <div className="grid grid-cols-[70px_2fr_1.4fr_100px_120px] border-b border-white/10 bg-white/5 px-8 py-5 text-sm uppercase tracking-widest text-zinc-500">

            <span>Pos</span>
            <span>Driver</span>
            <span>Team</span>
            <span>Wins</span>
            <span>Points</span>

          </div>

          {drivers.map((driver) => (
            <Row
              key={driver.Driver.driverId}
              driver={driver}
            />
          ))}
         </div>
         <div className="space-y-4 p-4 md:hidden">
  {drivers.map((driver) => (
    <MobileCard
      key={driver.Driver.driverId}
      driver={driver}
    />
  ))}
</div>
        </Card>
      </Container>
    </Section>
  );
}

function Row({
  driver,
}: {
  driver: DriverStanding;
}) {

  const team =
    driver.Constructors[0].name;

  const color =
    TEAM_COLORS[team] ?? "#ffffff";

  const medal =
    driver.position === "1"
      ? "🥇"
      : driver.position === "2"
      ? "🥈"
      : driver.position === "3"
      ? "🥉"
      : null;

  return (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
     className="grid grid-cols-[70px_2fr_1.4fr_100px_120px] items-center border-b border-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/5 hover:translate-x-1 hover:shadow-lg"
      style={{
        borderLeft: `4px solid ${color}`,
      }}
    >

      <div className="flex items-center gap-2">

        {medal && (
          <span className="text-xl">
            {medal}
          </span>
        )}

        <span className="text-2xl font-bold">
          {driver.position}
        </span>

      </div>

      <div>

        <p className="font-semibold">
          {driver.Driver.givenName}{" "}
          {driver.Driver.familyName}
        </p>

        <span
          className="mt-2 inline-block rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs"
        >
          {driver.Driver.code}
        </span>

      </div>

      <span
        style={{
          color,
        }}
        className="font-semibold"
      >
        {team}
      </span>

      <span>{driver.wins}</span>

      <span className="text-xl font-bold text-red-500">
        {driver.points} pts
      </span>

    </motion.div>
  );
}
function MobileCard({
  driver,
}: {
  driver: DriverStanding;
}) {
  const team = driver.Constructors[0].name;

  const color = TEAM_COLORS[team] ?? "#ffffff";

  const medal =
    driver.position === "1"
      ? "🥇"
      : driver.position === "2"
      ? "🥈"
      : driver.position === "3"
      ? "🥉"
      : "";

  return (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5"
      style={{
        borderLeft: `5px solid ${color}`,
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-bold">
            {medal} {driver.Driver.code}
          </p>

          <p className="mt-1">
            {driver.Driver.givenName}{" "}
            {driver.Driver.familyName}
          </p>

          <p
            className="mt-2 font-semibold"
            style={{
              color,
            }}
          >
            {team}
          </p>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold">
            {driver.points}
          </p>

          <p className="text-sm text-zinc-500">
            pts
          </p>

          <p className="mt-2 text-sm">
            {driver.wins} Wins
          </p>
        </div>
      </div>
    </motion.div>
  );
}