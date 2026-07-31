import { notFound } from "next/navigation";

import DriverHero from "@/components/driver/DriverHero";
import DriverProfile from "@/components/driver/DriverProfile";
import DriverStats from "@/components/driver/DriverStats";
import DriverSeason from "@/components/driver/DriverSeason";

import {
  getDriver,
  getDriverStanding,
} from "@/services/driver";

import Container from "@/components/ui/Container";

interface PageProps {
  params: Promise<{
    driverId: string;
  }>;
}

export default async function DriverPage({
  params,
}: PageProps) {
  const { driverId } =
    await params;

  const [
    driver,
    standing,
  ] = await Promise.all([
    getDriver(driverId),
    getDriverStanding(driverId),
  ]);

  if (!driver || !standing) {
    notFound();
  }

  return (
    <main className="py-32">
      <Container className="space-y-16">
        <DriverHero
          driver={driver}
          standing={standing}
        />

        <DriverProfile
          driver={driver}
          standing={standing}
        />
        <div className="grid gap-8 lg:grid-cols-2">
  <DriverStats
    standing={standing}
  />

  <DriverSeason
    standing={standing}
  />
</div>
      </Container>
    </main>
  );
}