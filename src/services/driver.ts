import { API_BASE } from "@/lib/constants";

export async function getDriverStandings() {
  const response = await fetch(
    `${API_BASE}/current/driverstandings`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch driver standings");
  }

  const data = await response.json();

  return (
    data?.MRData?.StandingsTable?.StandingsLists?.[0]
      ?.DriverStandings ?? []
  );
}