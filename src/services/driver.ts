import { API_BASE } from "@/lib/constants";
import type {
  DriverRef,
  DriverResponse,
  DriverStanding,
} from "@/types/driver";

export async function getDriverStandings(): Promise<
  DriverStanding[]
> {
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

export async function getDriverStanding(
  driverId: string
): Promise<DriverStanding | null> {
  const standings = await getDriverStandings();

  return (
    standings.find(
      (standing) =>
        standing.Driver.driverId === driverId
    ) ?? null
  );
}

export async function getDriver(
  driverId: string
): Promise<DriverRef | null> {
  const response = await fetch(
    `${API_BASE}/drivers/${driverId}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch driver");
  }

  const data: DriverResponse =
    await response.json();

  return (
    data.MRData.DriverTable.Drivers[0] ??
    null
  );
}