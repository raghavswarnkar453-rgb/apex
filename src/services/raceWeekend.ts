import { API_BASE } from "@/lib/constants";
import type { RaceWeekend } from "@/types/raceWeekend";

interface RaceWeekendResponse {
  MRData: {
    RaceTable: {
      Races: RaceWeekend[];
    };
  };
}

export async function getRaceWeekend(
  round: string
): Promise<RaceWeekend | null> {
  const response = await fetch(
    `${API_BASE}/current/${round}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch race weekend"
    );
  }

  const data: RaceWeekendResponse =
    await response.json();

  return (
    data.MRData.RaceTable.Races[0] ??
    null
  );
}