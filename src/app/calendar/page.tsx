import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import RaceGrid from "@/components/calendar/RaceGrid";

import { getSeasonCalendar } from "@/services/calendar";
import { getNextRace } from "@/services/race";

export default async function CalendarPage() {
  const [races, nextRace] =
    await Promise.all([
      getSeasonCalendar(),
      getNextRace(),
    ]);

  return (
    <Section>
      <Container>

        <div className="mb-16">

          <Badge variant="primary">
            2026 FORMULA ONE SEASON
          </Badge>

          <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
            Race Calendar
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Explore every Grand Prix of the current Formula One season.
            View the full schedule, discover race weekends, and jump
            directly to detailed race information.
          </p>

        </div>

        <RaceGrid
          races={races}
          nextRaceRound={nextRace?.round}
        />

      </Container>
    </Section>
  );
}
