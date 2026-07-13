import { getDriverStandings } from "@/services/driver";

export default async function TestPage() {
  const drivers = await getDriverStandings();

  return (
    <main className="mx-auto max-w-7xl p-10 text-white">
      <pre>{JSON.stringify(drivers, null, 2)}</pre>
    </main>
  );
}