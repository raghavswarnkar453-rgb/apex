import { getNextRace } from "@/services/race";

export default async function TestPage() {
  const race = await getNextRace();

  return (
    <main className="mx-auto max-w-4xl p-10 text-white">
      <pre>{JSON.stringify(race, null, 2)}</pre>
    </main>
  );
}