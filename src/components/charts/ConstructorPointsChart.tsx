"use client";

import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";


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
  innerRadius={75}
  paddingAngle={3}
  stroke="rgba(255,255,255,0.08)"
  strokeWidth={2}
  animationDuration={1200}
  label={({ percent }) =>
    `${((percent ?? 0) * 100).toFixed(0)}%`
  }
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
  cursor={{
    fill: "rgba(239,68,68,0.08)",
  }}
  content={<ChartTooltip />}
/>

           <Legend
  verticalAlign="bottom"
  iconType="circle"
  wrapperStyle={{
    paddingTop: 20,
    color: "#a1a1aa",
    fontSize: 13,
  }}
/>

          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}