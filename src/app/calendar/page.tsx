import {
  Badge,
  Container,
  Section,
} from "@/components/ui";
import SeasonHeader from "@/components/calendar/SeasonHeader";
import RaceGrid from "@/components/calendar/RaceGrid";
import CalendarContent from "@/components/calendar/CalendarContent";
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

            <SeasonHeader
            totalRaces={races.length}
            />

        <CalendarContent
          races={races}
           nextRaceRound={nextRace?.round}
            />

      </Container>
    </Section>
  );
}
