export interface ConstructorRef {
  constructorId: string;
  name: string;
  nationality: string;
  url?: string;
}

export interface ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: ConstructorRef;
}

export interface ConstructorResponse {
  MRData: {
    ConstructorTable: {
      Constructors: ConstructorRef[];
    };
  };
}