import type { Circuit, RaceSession } from "./race";

export interface CalendarRace {
  season: string;
  round: string;
  raceName: string;
  date: string;
  time: string;

  Circuit: Circuit;

  FirstPractice?: RaceSession;
  SecondPractice?: RaceSession;
  ThirdPractice?: RaceSession;
  Qualifying?: RaceSession;
  Sprint?: RaceSession;
}

export interface CalendarResponse {
  MRData: {
    RaceTable: {
      season: string;
      Races: CalendarRace[];
    };
  };
}