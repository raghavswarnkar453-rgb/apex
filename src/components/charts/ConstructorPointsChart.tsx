"use client";

import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { Card } from "@/components/ui";
import ChartTooltip from "./ChartTooltip";
interface ConstructorData {
  name: string;
  points: number;
}

interface Props {
  data: ConstructorData[];
}
import ChartCard from "./ChartCard";
const COLORS = [
  "#ef4444",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#a855f7",
  "#ec4899",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#6366f1",
];

export default function ConstructorPointsChart({
  data,
}: Props) {
  return (
    <ChartCard
  title="Constructor Championship"
  subtitle="Current standings"
>
      <h2 className="mb-8 text-2xl font-bold">
        Constructor Championship
      </h2>

      <div className="h-[420px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="points"
              nameKey="name"
              outerRadius={140}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

           <Tooltip
  content={<ChartTooltip />}
/>

            <Legend />

          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}