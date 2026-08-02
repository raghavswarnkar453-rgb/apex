import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import ConstructorGrid from "@/components/teams/ConstructorGrid";

import {
  getConstructorStandings,
} from "@/services/constructor";

export default async function ConstructorsPage() {
  const constructors =
    await getConstructorStandings();

  return (
    <Section>
      <Container>

        <div className="mb-16">

          <Badge variant="primary">
            CONSTRUCTOR CHAMPIONSHIP
          </Badge>

          <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
            Formula One Constructors
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Explore every Formula One constructor competing in the
            current championship. View standings, points, victories,
            and detailed constructor profiles.
          </p>

        </div>

        <ConstructorGrid
          constructors={constructors}
        />

      </Container>
    </Section>
  );
}