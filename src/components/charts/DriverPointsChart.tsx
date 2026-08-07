"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartTooltip from "./ChartTooltip";

import ChartCard from "./ChartCard";
interface DriverData {
  name: string;
  points: number;
}

interface DriverPointsChartProps {
  data: DriverData[];
}

export default function DriverPointsChart({
  data,
}: DriverPointsChartProps) {
  return (
    <ChartCard
  title="Driver Championship"
  subtitle="Current season points"
>


      

      <div className="h-[420px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <CartesianGrid
  vertical={false}
  stroke="#27272a"
  strokeDasharray="4 4"
/>

            
            <XAxis
  axisLine={false}
  tickLine={false}
  dataKey="name"
  interval={0}
  angle={-45}
  textAnchor="end"
  height={80}
  tick={{
  fill: "#a1a1aa",
  fontSize: 12,
  fontWeight: 600,
}}
/>

            <YAxis
  axisLine={false}
  tickLine={false}
  tick={{
    fill: "#a1a1aa",
    fontSize: 12,
  }}
/>

<Tooltip
  cursor={{
    fill: "rgba(239,68,68,0.08)",
  }}
  content={<ChartTooltip />}
/>
            <Bar
  dataKey="points"
  radius={[10, 10, 0, 0]}
  fill="#ef4444"
  maxBarSize={42}
/>
<Bar
  dataKey="points"
  radius={[10, 10, 0, 0]}
  fill="#ef4444"
  maxBarSize={42}
  animationDuration={1200}
/>
<ChartCard
  title="Driver Championship"
  subtitle="Current season points"
>
  <div className="h-[420px]">
    ...
  </div>
</ChartCard>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}