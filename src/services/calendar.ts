import { API_BASE } from "@/lib/constants";
import type { CalendarResponse } from "@/types/calendar";

export async function getSeasonCalendar() {
  const response = await fetch(
    `${API_BASE}/current/races`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch season calendar"
    );
  }

  const data: CalendarResponse =
    await response.json();

  return data.MRData.RaceTable.Races;
}