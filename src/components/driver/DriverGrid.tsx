import type { DriverStanding } from "@/types/driver";

import DriverCard from "./DriverCard";

interface DriverGridProps {
  drivers: DriverStanding[];
}

export default function DriverGrid({
  drivers,
}: DriverGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {drivers.map((driver) => (
        <DriverCard
          key={driver.Driver.driverId}
          standing={driver}
        />
      ))}

    </div>
  );
}