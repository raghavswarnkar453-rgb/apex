import Hero from "@/components/home/Hero";
import NextRace from "@/components/home/NextRace";
import StandingsPreview from "@/components/home/StandingsPreview";

import { getNextRace } from "@/services/race";
import { getDriverStandings } from "@/services/driver";

export default async function Home() {
  const race = await getNextRace();
  const drivers = await getDriverStandings();

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
      <StandingsPreview drivers={drivers} />
    </>
  );
}