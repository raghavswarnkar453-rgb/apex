import { API_BASE } from "@/lib/constants";

import type { ConstructorStanding } from "@/types/constructor";

export async function getConstructorStandings(): Promise<
  ConstructorStanding[]
> {
  const response = await fetch(
    `${API_BASE}/current/constructorstandings`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch constructor standings"
    );
  }

  const data = await response.json();

  return (
    data?.MRData?.StandingsTable?.StandingsLists?.[0]
      ?.ConstructorStandings ?? []
  );
}