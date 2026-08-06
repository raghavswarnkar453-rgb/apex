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
import { Card } from "@/components/ui";
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


      <h2 className="mb-8 text-2xl font-bold">
        Driver Championship Points
      </h2>

      <div className="h-[420px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
            />

            <XAxis
  dataKey="name"
  interval={0}
  angle={-45}
  textAnchor="end"
  height={80}
  tick={{
    fill: "#a1a1aa",
    fontSize: 12,
  }}
/>

            <YAxis
              tick={{
                fill: "#a1a1aa",
              }}
            />

        <Tooltip
  content={<ChartTooltip />}
/>
            <Bar
              dataKey="points"
              radius={[8, 8, 0, 0]}
              fill="#ef4444"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}