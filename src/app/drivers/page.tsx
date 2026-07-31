import { Badge, Container, Section } from "@/components/ui";

import DriverGrid from "@/components/driver/DriverGrid";

import { getDriverStandings } from "@/services/driver";

export default async function DriversPage() {
  const drivers = await getDriverStandings();

  return (
    <Section>
      <Container>

        <div className="mb-16">

          <Badge variant="primary">
            DRIVER CHAMPIONSHIP
          </Badge>

          <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
            Formula One Drivers
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Explore every Formula One driver competing in the current
            championship. View season statistics, team information,
            race performance and detailed driver profiles.
          </p>

        </div>

        <DriverGrid
          drivers={drivers}
        />

      </Container>
    </Section>
  );
}