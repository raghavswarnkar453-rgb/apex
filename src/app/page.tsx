import Hero from "@/components/home/Hero";
import NextRace from "@/components/home/NextRace";
import RaceOverview from "@/components/home/RaceOverview";
import SeasonCalendar from "@/components/home/SeasonCalendar";
import StandingsPreview from "@/components/home/StandingsPreview";
import ConstructorsPreview from "@/components/home/ConstructorsPreview";

import { getNextRace } from "@/services/race";
import { getDriverStandings } from "@/services/driver";
import { getConstructorStandings } from "@/services/constructor";
import { getSeasonCalendar } from "@/services/calendar";

export default async function Home() {
  const race = await getNextRace();

  const [
    drivers,
    constructors,
    calendar,
  ] = await Promise.all([
    getDriverStandings(),
    getConstructorStandings(),
    getSeasonCalendar(),
  ]);

  if (!race) {
    return (
      <main className="flex min-h-screen items-center justify-center text-white">
        Unable to load race data.
      </main>
    );
  }

  return (
    <>
      <Hero race={race} />

      <NextRace race={race} />

      <RaceOverview race={race} />

     <SeasonCalendar
       races={calendar}
       nextRaceRound={race.round}
      />

      <StandingsPreview
        drivers={drivers}
      />

      <ConstructorsPreview
        constructors={constructors}
      />
    </>
  );
}