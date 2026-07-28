import { notFound } from "next/navigation";

import { Container, Section } from "@/components/ui";

import CircuitHero from "@/components/circuit/CircuitHero";
import CircuitStats from "@/components/circuit/CircuitStats";
import CircuitOverview from "@/components/circuit/CircuitOverview";
import LapRecordCard from "@/components/circuit/LapRecordCard";
import CircuitMap from "@/components/circuit/CircuitMap";
import WeatherCard from "@/components/circuit/WeatherCard";
import CircuitFacts from "@/components/circuit/CircuitFacts";

import { getCircuit } from "@/services/circuit";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CircuitPage({
  params,
}: PageProps) {
  const { id } = await params;

  const circuit = await getCircuit(id);

  if (!circuit) {
    notFound();
  }

  return (
    <>
      <CircuitHero circuit={circuit} />

      
    <Section>
        <Container className="space-y-16">
          <CircuitStats
            circuitId={circuit.circuitId}
          />

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <CircuitOverview
              circuit={circuit}
            />

            <CircuitFacts
              circuitId={circuit.circuitId}
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <CircuitMap
              circuitName={
                circuit.circuitName
              }
              locality={
                circuit.Location.locality
              }
              country={
                circuit.Location.country
              }
            />

            <div className="space-y-8">
              <LapRecordCard
                circuitId={
                  circuit.circuitId
                }
              />

              <WeatherCard />
            </div>
          </div>
        </Container>
      </Section>
      
    </>
  );
}