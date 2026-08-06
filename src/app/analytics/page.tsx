import {
  Container,
  Section,
} from "@/components/ui";
import ConstructorPointsChart from "@/components/charts/ConstructorPointsChart";
import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import StatsCards from "@/components/analytics/StatsCards";
import ComparisonCard from "@/components/analytics/ComparisonCard";
import SeasonOverview from "@/components/analytics/SeasonOverview";
import {
  getAnalyticsOverview,
  getDriverPointsChart,
  getConstructorPointsChart,
  getPerformanceInsights,
  getSeasonOverview,
  getTopDrivers,
  getChampionshipGap,
} from "@/services/analytics";
import SeasonProgress from "@/components/analytics/SeasonProgress";
import ChampionshipGap from "@/components/analytics/ChampionshipGap";
import TopDrivers from "@/components/analytics/TopDrivers";
import PerformanceInsights from "@/components/analytics/PerformanceInsights";
import DriverPointsChart from "@/components/charts/DriverPointsChart";
export default async function AnalyticsPage() {
const [
  overview,
  season,
  driverChart,
  constructorChart,
  topDrivers,
  insights,
  gap,
] = await Promise.all([
  getAnalyticsOverview(),
  getSeasonOverview(),
  getDriverPointsChart(),
  getConstructorPointsChart(),
  getTopDrivers(),
  getPerformanceInsights(),
  getChampionshipGap(),
]);
  
  return (
    <Section>
      <Container>

        <AnalyticsHeader />

        <StatsCards
          totalDrivers={
            overview.totalDrivers
          }
          totalConstructors={
            overview.totalConstructors
          }
          totalRaces={
            overview.totalRaces
          }
          totalPoints={
            overview.totalPoints
          }
        />
        <SeasonOverview
        leader={season.leader}
        leaderPoints={season.leaderPoints}
        constructor={season.constructor}
         constructorPoints={season.constructorPoints}
        completedRaces={season.completedRaces}
         totalRaces={season.totalRaces}
        />
        <div className="mb-12">
  <ComparisonCard
    driver={season.leader}
    driverPoints={season.leaderPoints}
    constructor={season.constructor}
    constructorPoints={season.constructorPoints}
  />
</div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
  <DriverPointsChart
    data={driverChart}
  />

  <ConstructorPointsChart
    data={constructorChart}
  />
</div>

<div className="mt-8 grid gap-8 xl:grid-cols-3">

  <TopDrivers
    drivers={topDrivers}
  />

  <ChampionshipGap
    leader={gap.leader}
    leaderPoints={gap.leaderPoints}
    second={gap.second}
    secondPoints={gap.secondPoints}
  />

  <SeasonProgress
    completedRaces={season.completedRaces}
    totalRaces={season.totalRaces}
  />

</div>

<div className="mt-8">
  <PerformanceInsights
    averagePoints={insights.averagePoints}
    highestPoints={insights.highestPoints}
    lowestPoints={insights.lowestPoints}
    totalDrivers={insights.totalDrivers}
  />
</div>
      </Container>
    </Section>
  );
}
