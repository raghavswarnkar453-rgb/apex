import {
  Container,
  Section,
} from "@/components/ui";

import StandingsHeader from "@/components/standings/StandingsHeader";
import DriverStandingsTable from "@/components/standings/DriverStandingsTable";

import { getDriverStandings } from "@/services/driver";
import ConstructorStandingsTable from "@/components/standings/ConstructorStandingsTable";
import StandingsContent from "@/components/standings/StandingsContent";
import { getConstructorStandings } from "@/services/constructor";
export default async function StandingsPage() {
 const [
  drivers,
  constructors,
] = await Promise.all([
  getDriverStandings(),
  getConstructorStandings(),
]);

  return (
    <Section>
      <Container>

        <StandingsHeader />

     <StandingsContent
       drivers={drivers}
          constructors={constructors}
    />

      </Container>
    </Section>
  );
}