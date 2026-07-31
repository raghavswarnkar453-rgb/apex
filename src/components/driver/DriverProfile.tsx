import { Card } from "@/components/ui";

import type {
  DriverRef,
  DriverStanding,
} from "@/types/driver";

interface DriverProfileProps {
  driver: DriverRef;
  standing: DriverStanding;
}

export default function DriverProfile({
  driver,
  standing,
}: DriverProfileProps) {
  const constructor =
    standing.Constructors[0];

  return (
    <Card className="p-8">

      <h2 className="text-3xl font-bold">
        Driver Information
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <Info
          label="Full Name"
          value={`${driver.givenName} ${driver.familyName}`}
        />

        <Info
          label="Driver Code"
          value={driver.code ?? "--"}
        />

        <Info
          label="Permanent Number"
          value={driver.permanentNumber ?? "--"}
        />

        <Info
          label="Nationality"
          value={driver.nationality}
        />

        <Info
          label="Date of Birth"
          value={new Date(
            driver.dateOfBirth
          ).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        />

        <Info
          label="Constructor"
          value={constructor.name}
        />

        <Info
          label="Championship Position"
          value={standing.position}
        />

        <Info
          label="Current Points"
          value={standing.points}
        />

        <Info
          label="Season Wins"
          value={standing.wins}
        />

      </div>

    </Card>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">

      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>

      <p className="mt-3 text-xl font-semibold">
        {value}
      </p>

    </div>
  );
}