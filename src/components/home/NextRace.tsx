import { Badge, Card, Container, Section } from "@/components/ui";

interface NextRaceProps {
  race: any;
}

export default function NextRace({ race }: NextRaceProps) {
  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Badge variant="primary">NEXT GRAND PRIX</Badge>

          <h2 className="mt-6 text-5xl font-bold">
            {race?.raceName}
          </h2>

          <p className="mt-3 text-zinc-400">
            {race?.Circuit?.circuitName}
          </p>
        </div>

        <Card className="p-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <Info
              label="Date"
              value={
                new Date(race?.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              }
            />

            <Info
              label="Country"
              value={race?.Circuit?.Location?.country}
            />

            <Info
              label="Round"
              value={race?.round}
            />

            <Info
              label="Circuit"
              value={race?.Circuit?.Location?.locality}
            />

          </div>
        </Card>
      </Container>
    </Section>
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
    <div>
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}