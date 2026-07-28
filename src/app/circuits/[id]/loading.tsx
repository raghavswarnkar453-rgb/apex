import { Card, Container, Section } from "@/components/ui";

export default function Loading() {
  return (
    <Section>
      <Container className="space-y-10">
        <div className="space-y-4">
          <div className="h-6 w-40 animate-pulse rounded bg-white/10" />
          <div className="h-14 w-96 animate-pulse rounded bg-white/10" />
          <div className="h-6 w-72 animate-pulse rounded bg-white/10" />
        </div>

        <Card className="p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
                <div className="h-8 w-32 animate-pulse rounded bg-white/10" />
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-8 lg:grid-cols-2">
         <Card className="h-96 bg-white/5">
       <div className="h-full w-full animate-pulse rounded-xl bg-white/10" />
      </Card>

       <Card className="h-96 bg-white/5">
        <div className="h-full w-full animate-pulse rounded-xl bg-white/10" />
       </Card>
        </div>
      </Container>
    </Section>
  );
}