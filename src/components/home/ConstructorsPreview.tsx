"use client";

import { Badge, Card, Container, Section } from "@/components/ui";
import { TEAM_COLORS } from "@/constants/teamColors";
import { motion } from "framer-motion";
import type { ConstructorStanding } from "@/types/constructor";

interface ConstructorsPreviewProps {
  constructors: ConstructorStanding[];
}

export default function ConstructorsPreview({
  constructors,
}: ConstructorsPreviewProps) {
  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Badge variant="primary">
            CONSTRUCTOR STANDINGS
          </Badge>

          <h2 className="mt-6 text-5xl font-bold">
            Constructors Championship
          </h2>

          <p className="mt-3 text-zinc-400">
            Live Formula One Constructor Championship
          </p>
        </div>

        <Card className="overflow-hidden p-0">
          {/* Desktop */}

          <div className="hidden md:block">
            <div className="grid grid-cols-[80px_2fr_120px_140px] border-b border-white/10 bg-white/5 px-8 py-5 text-sm uppercase tracking-widest text-zinc-500">
              <span>Pos</span>
              <span>Constructor</span>
              <span>Wins</span>
              <span>Points</span>
            </div>

            {constructors.map((team) => (
              <Row
                key={team.Constructor.constructorId}
                constructor={team}
              />
            ))}
          </div>

          {/* Mobile */}

          <div className="space-y-4 p-4 md:hidden">
            {constructors.map((team) => (
              <MobileCard
                key={team.Constructor.constructorId}
                constructor={team}
              />
            ))}
          </div>
        </Card>
      </Container>
    </Section>
  );
}

function Row({
  constructor,
}: {
  constructor: ConstructorStanding;
}) {
  const color =
    TEAM_COLORS[constructor.Constructor.name] ??
    "#ffffff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="grid grid-cols-[80px_2fr_120px_140px] items-center border-b border-white/5 px-8 py-5 transition-all duration-300 hover:translate-x-1 hover:bg-white/5"
      style={{
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-semibold"
          style={{
            color,
          }}
        >
          P{constructor.position}
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">
          {constructor.Constructor.name}
        </p>

        <p className="mt-1 text-sm text-zinc-500">
          {constructor.Constructor.nationality}
        </p>
      </div>

      <span>{constructor.wins}</span>

      <span className="text-xl font-bold text-red-500">
        {constructor.points} pts
      </span>
    </motion.div>
  );
}

function MobileCard({
  constructor,
}: {
  constructor: ConstructorStanding;
}) {
  const color =
    TEAM_COLORS[constructor.Constructor.name] ??
    "#ffffff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
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
          <div
            className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold"
            style={{
              color,
            }}
          >
            P{constructor.position}
          </div>

          <p className="text-xl font-bold">
            {constructor.Constructor.name}
          </p>

          <p className="mt-2 text-zinc-400">
            {constructor.Constructor.nationality}
          </p>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold">
            {constructor.points}
          </p>

          <p className="text-sm text-zinc-500">
            pts
          </p>

          <p className="mt-2 text-sm">
            {constructor.wins} Wins
          </p>
        </div>
      </div>
    </motion.div>
  );
}