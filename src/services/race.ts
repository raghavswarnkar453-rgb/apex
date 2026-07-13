import { API_BASE } from "@/lib/constants";

export async function getCurrentSchedule() {
  const response = await fetch(`${API_BASE}/current/races`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch race schedule");
  }

  return response.json();
}

export async function getNextRace() {
  const data = await getCurrentSchedule();

  const races =
    data?.MRData?.RaceTable?.Races ??
    data?.MRData?.RaceTable?.races ??
    [];

  const now = new Date();

  const nextRace = races.find((race: any) => {
    const raceDate = new Date(`${race.date}T${race.time ?? "00:00:00Z"}`);
    return raceDate > now;
  });

  return nextRace ?? null;
}