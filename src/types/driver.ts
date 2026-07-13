export interface DriverStanding {
  position: string;
  points: string;
  wins: string;

  driver: {
    driverId: string;
    code?: string;

    givenName: string;
    familyName: string;

    nationality: string;
  };

  constructor: {
    name: string;
  };
}