import Hero from "@/components/home/Hero";
import NextRace from "@/components/home/NextRace";
import { getNextRace } from "@/services/race"; 

export default async function Home() {
  const race = await getNextRace();

  return (
    <>
      <Hero race={race} />
      <NextRace race={race} />
    </>
  );
}
