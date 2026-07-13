export interface ConstructorRef {
  constructorId: string;
  name: string;
  nationality: string;
}

export interface DriverRef {
  driverId: string;
  permanentNumber?: string;
  code?: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: DriverRef;
  Constructors: ConstructorRef[];
}