import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";

import ConstructorHero from "@/components/teams/ConstructorHero";
import ConstructorProfile from "@/components/teams/ConstructorProfile";

import {
  getConstructor,
  getConstructorStanding,
} from "@/services/constructor";

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
  ] = await Promise.all([
    getConstructor(constructorId),
    getConstructorStanding(
      constructorId
    ),
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

      </Container>
    </main>
  );
}