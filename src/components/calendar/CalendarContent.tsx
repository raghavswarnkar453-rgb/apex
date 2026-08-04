"use client";

import { useMemo, useState } from "react";

import type { Race } from "@/types/race";
import RaceStatusFilter from "./RaceStatusFilter";
import RaceFilter from "./RaceFilter";
import RaceGrid from "./RaceGrid";

interface CalendarContentProps {
  races: Race[];
  nextRaceRound?: string;
}

export default function CalendarContent({
  races,
  nextRaceRound,
}: CalendarContentProps) {
         const [query, setQuery] = useState("");
         const [status, setStatus] = useState<
         "all" | "next" | "upcoming" | "completed"
         >("all");

  const filteredRaces = useMemo(() => {
  const search = query.toLowerCase();
  const now = new Date();

  return races.filter((race) => {
    const raceDate = new Date(
      `${race.date}T${race.time ?? "00:00:00Z"}`
    );

    const matchesSearch =
      race.raceName.toLowerCase().includes(search) ||
      race.Circuit.circuitName
        .toLowerCase()
        .includes(search) ||
      race.Circuit.Location.country
        .toLowerCase()
        .includes(search);

    if (!matchesSearch) {
      return false;
    }

    switch (status) {
      case "next":
        return race.round === nextRaceRound;

      case "completed":
        return raceDate < now;

      case "upcoming":
        return raceDate >= now;

      default:
        return true;
    }
  });
}, [query, status, races, nextRaceRound]);

  return (
    <>
      <RaceFilter
        value={query}
        onChange={setQuery}
      />
    <RaceStatusFilter
       value={status}
       onChange={setStatus}
     />

      <RaceGrid
        races={filteredRaces}
        nextRaceRound={nextRaceRound}
      />
    </>
  );
}