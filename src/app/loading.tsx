import { Container, Section } from "@/components/ui";

export default function Loading() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <Container>

        <div className="flex flex-col items-center justify-center">

          <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-red-500" />

          <h2 className="mt-8 font-playfair text-4xl font-bold">
            Loading APEX
          </h2>

          <p className="mt-4 text-zinc-400">
            Fetching Formula One data...
          </p>

        </div>

      </Container>
    </Section>
  );
}