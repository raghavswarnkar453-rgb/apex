import { getDriverStandings } from "./driver";
import { getConstructorStandings } from "./constructor";
import { getSeasonCalendar } from "./calendar";

import type { AnalyticsOverview } from "@/types/analytics";

export async function getAnalyticsOverview(): Promise<AnalyticsOverview> {
  const [
    drivers,
    constructors,
    races,
  ] = await Promise.all([
    getDriverStandings(),
    getConstructorStandings(),
    getSeasonCalendar(),
  ]);

  const totalPoints = drivers.reduce(
    (sum, driver) =>
      sum + Number(driver.points),
    0
  );

  return {
    totalDrivers: drivers.length,
    totalConstructors: constructors.length,
    totalRaces: races.length,
    totalPoints,
  };
}

export async function getDriverPointsChart() {
  const drivers =
    await getDriverStandings();

  return drivers
  .slice(0, 10)
  .map((driver) => ({
    name: driver.Driver.familyName,
    points: Number(driver.points),
  }));
}
export async function getConstructorPointsChart() {
  const constructors =
    await getConstructorStandings();

  return constructors.map(
    (constructor) => ({
      name:
        constructor.Constructor.name,
      points: Number(
        constructor.points
      ),
    })
  );
}
export async function getSeasonOverview() {
  const [
    drivers,
    constructors,
    races,
  ] = await Promise.all([
    getDriverStandings(),
    getConstructorStandings(),
    getSeasonCalendar(),
  ]);

  const completedRaces = races.filter(
    (race) => new Date(race.date) < new Date()
  ).length;

  return {
    leader: `${drivers[0].Driver.givenName} ${drivers[0].Driver.familyName}`,
    leaderPoints: Number(drivers[0].points),

    constructor:
      constructors[0].Constructor.name,

    constructorPoints: Number(
      constructors[0].points
    ),

    completedRaces,
    totalRaces: races.length,
  };
}
export async function getTopDrivers() {
  const drivers =
    await getDriverStandings();

  return drivers
    .slice(0, 5)
    .map((driver) => ({
      name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
      points: Number(driver.points),
    }));
}
export async function getPerformanceInsights() {
  const drivers =
    await getDriverStandings();

  const points = drivers.map(
    (driver) => Number(driver.points)
  );

  const total =
    points.reduce(
      (sum, value) => sum + value,
      0
    );

  return {
    averagePoints:
      total / points.length,
    highestPoints:
      Math.max(...points),
    lowestPoints:
      Math.min(...points),
    totalDrivers:
      points.length,
  };
}
export async function getChampionshipGap() {
  const drivers =
    await getDriverStandings();

  return {
    leader:
      `${drivers[0].Driver.givenName} ${drivers[0].Driver.familyName}`,

    leaderPoints:
      Number(drivers[0].points),

    second:
      `${drivers[1].Driver.givenName} ${drivers[1].Driver.familyName}`,

    secondPoints:
      Number(drivers[1].points),
  };
}