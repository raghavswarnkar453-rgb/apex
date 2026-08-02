import { API_BASE } from "@/lib/constants";

import type {
  ConstructorRef,
  ConstructorResponse,
  ConstructorStanding,
} from "@/types/constructor";

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

export async function getConstructorStanding(
  constructorId: string
): Promise<ConstructorStanding | null> {
  const standings =
    await getConstructorStandings();

  return (
    standings.find(
      (standing) =>
        standing.Constructor.constructorId ===
        constructorId
    ) ?? null
  );
}



export async function getConstructor(
  constructorId: string
): Promise<ConstructorRef | null> {
  const response = await fetch(
    `${API_BASE}/constructors/${constructorId}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch constructor"
    );
  }

  const data: ConstructorResponse =
    await response.json();

  return (
    data.MRData.ConstructorTable
      .Constructors[0] ?? null
  );
}