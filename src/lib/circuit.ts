import { RACE_METADATA } from "@/constants/raceMetadata";

export function getCircuitMetadata(
  circuitId: string
) {
  return (
    RACE_METADATA[circuitId] ?? null
  );
}