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
  try {
    const response = await fetch(
      `${API_BASE}/current/${round}.json`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data: RaceWeekendResponse =
      await response.json();

    return data.MRData.RaceTable.Races[0] ?? null;
  } catch (error) {
    console.error("Race weekend fetch failed:", error);
    return null;
  }
}