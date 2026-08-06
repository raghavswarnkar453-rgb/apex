import type { Race } from "@/types/race";

export interface RaceStatus {
  status:
    | "SCHEDULED"
    | "PRACTICE"
    | "QUALIFYING"
    | "SPRINT"
    | "RACE LIVE"
    | "COMPLETED";

  telemetry:
    | "ONLINE"
    | "STANDBY";
}

function getSessionDate(
  date?: string,
  time?: string
) {
  if (!date || !time) return null;

  return new Date(`${date}T${time}`);
}

export function getRaceStatus(
  race: Race
): RaceStatus {

  const now = new Date();

  const fp1 = getSessionDate(
    race.FirstPractice?.date,
    race.FirstPractice?.time
  );

  const fp2 = getSessionDate(
    race.SecondPractice?.date,
    race.SecondPractice?.time
  );

  const fp3 = getSessionDate(
    race.ThirdPractice?.date,
    race.ThirdPractice?.time
  );

  const sprint = getSessionDate(
    race.Sprint?.date,
    race.Sprint?.time
  );

  const quali = getSessionDate(
    race.Qualifying?.date,
    race.Qualifying?.time
  );

  const raceDate = getSessionDate(
    race.date,
    race.time
  );

  if (
    fp1 &&
    now < fp1
  ) {
    return {
      status: "SCHEDULED",
      telemetry: "STANDBY",
    };
  }

  if (
    fp1 &&
    fp2 &&
    now >= fp1 &&
    now < fp2
  ) {
    return {
      status: "PRACTICE",
      telemetry: "ONLINE",
    };
  }

  if (
    fp3 &&
    quali &&
    now >= fp3 &&
    now < quali
  ) {
    return {
      status: "PRACTICE",
      telemetry: "ONLINE",
    };
  }

  if (
    sprint &&
    raceDate &&
    now >= sprint &&
    now < raceDate
  ) {
    return {
      status: "SPRINT",
      telemetry: "ONLINE",
    };
  }

  if (
    quali &&
    raceDate &&
    now >= quali &&
    now < raceDate
  ) {
    return {
      status: "QUALIFYING",
      telemetry: "ONLINE",
    };
  }

  if (
    raceDate &&
    now >= raceDate &&
    now <
      new Date(
        raceDate.getTime() +
          2 * 60 * 60 * 1000
      )
  ) {
    return {
      status: "RACE LIVE",
      telemetry: "ONLINE",
    };
  }

  if (
    raceDate &&
    now >
      new Date(
        raceDate.getTime() +
          2 * 60 * 60 * 1000
      )
  ) {
    return {
      status: "COMPLETED",
      telemetry: "STANDBY",
    };
  }

  return {
    status: "SCHEDULED",
    telemetry: "STANDBY",
  };
}