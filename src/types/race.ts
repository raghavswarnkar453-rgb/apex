export interface RaceLocation {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface Circuit {
  circuitId: string;
  circuitName: string;
  url: string;
  Location: RaceLocation;
}

export interface RaceSession {
  date: string;
  time: string;
}

export interface Race {
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