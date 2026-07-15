import Hero from "@/components/home/Hero";
import NextRace from "@/components/home/NextRace";
import RaceOverview from "@/components/home/RaceOverview";
import StandingsPreview from "@/components/home/StandingsPreview";
import ConstructorsPreview from "@/components/home/ConstructorsPreview";

import { getNextRace } from "@/services/race";
import { getDriverStandings } from "@/services/driver";
import { getConstructorStandings } from "@/services/constructor";

export default async function Home() {
  const race = await getNextRace();

  const [drivers, constructors] =
    await Promise.all([
      getDriverStandings(),
      getConstructorStandings(),
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

      <StandingsPreview
        drivers={drivers}
      />

      <ConstructorsPreview
        constructors={constructors}
      />
    </>
  );
}