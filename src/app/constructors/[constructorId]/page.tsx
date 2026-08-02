import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";

import ConstructorHero from "@/components/teams/ConstructorHero";
import ConstructorProfile from "@/components/teams/ConstructorProfile";

import {
  getConstructor,
  getConstructorStanding,
} from "@/services/constructor";
import ConstructorStats from "@/components/teams/ConstructorStats";
import ConstructorSeason from "@/components/teams/ConstructorSeason";
import ConstructorResults from "@/components/teams/ConstructorResults";

import { getDriverStandings } from "@/services/driver";
interface PageProps {
  params: Promise<{
    constructorId: string;
  }>;
}

export default async function ConstructorPage({
  params,
}: PageProps) {
  const { constructorId } =
    await params;

const [
  constructor,
  standing,
  drivers,
] = await Promise.all([
  getConstructor(constructorId),
  getConstructorStanding(constructorId),
  getDriverStandings(),
]);

  if (!constructor || !standing) {
    notFound();
  }

  return (
    <main className="py-32">
      <Container className="space-y-16">

        <ConstructorHero
  constructor={constructor}
  standing={standing}
/>

<ConstructorProfile
  constructor={constructor}
  standing={standing}
/>

<div className="grid gap-8 lg:grid-cols-2">

  <ConstructorStats
    standing={standing}
  />

  <ConstructorSeason
    standing={standing}
  />

</div>

<ConstructorResults
  standing={standing}
  drivers={drivers}
/>

      </Container>
    </main>
  );
}