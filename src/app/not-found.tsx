import Link from "next/link";

import {
  Button,
  Container,
  Section,
} from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <Container>

        <div className="text-center">

          <h1 className="font-playfair text-8xl font-black">
            404
          </h1>

          <h2 className="mt-6 text-4xl font-bold">
            Checkered Flag
          </h2>

          <p className="mt-6 text-zinc-400">
            The page you're looking for
            has already finished its race.
          </p>

          <Link href="/">
            <Button className="mt-10">
              Return Home
            </Button>
          </Link>

        </div>

      </Container>
    </Section>
  );
}