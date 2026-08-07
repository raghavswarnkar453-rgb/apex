"use client";

import { Button, Container, Section } from "@/components/ui";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <Container>

        <div className="text-center">

          <h1 className="font-playfair text-7xl font-black text-red-500">
            OOPS
          </h1>

          <h2 className="mt-6 text-4xl font-bold">
            Telemetry Lost
          </h2>

          <p className="mt-6 text-zinc-400">
            Something went wrong while loading
            the Formula One data.
          </p>

          <Button
            className="mt-10"
            onClick={reset}
          >
            Retry
          </Button>

        </div>

      </Container>
    </Section>
  );
}