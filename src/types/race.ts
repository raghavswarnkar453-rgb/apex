export interface Race {
  season: string;
  round: string;

  raceName: string;

  date: string;
  time: string;

  circuit: {
    id: string;
    name: string;
    locality: string;
    country: string;
  };
}