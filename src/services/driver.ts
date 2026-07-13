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
    throw new Error("Unable to fetch driver standings");
  }

  return response.json();
}