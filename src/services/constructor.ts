import { API_BASE } from "@/lib/constants";

export async function getConstructorStandings() {
  const response = await fetch(
    `${API_BASE}/current/constructorstandings`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch constructor standings");
  }

  return response.json();
}