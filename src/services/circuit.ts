import { API_BASE } from "@/lib/constants";
import type {
  Circuit,
  CircuitResponse,
} from "@/types/circuit";

export async function getCircuit(
  circuitId: string
): Promise<Circuit | null> {
  try {
    const response = await fetch(
      `${API_BASE}/circuits/${circuitId}.json`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data: CircuitResponse =
      await response.json();

    return (
      data.MRData.CircuitTable.Circuits[0] ??
      null
    );
  } catch (error) {
    console.error(
      "Circuit fetch failed:",
      error
    );

    return null;
  }
}