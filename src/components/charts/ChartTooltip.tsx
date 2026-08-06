interface Props {
  active?: boolean;
  payload?: {
    value: number;
    name: string;
  }[];
  label?: string;
}

export default function ChartTooltip({
  active,
  payload,
  label,
}: Props) {
  if (
    !active ||
    !payload ||
    payload.length === 0
  ) {
    return null;
  }

  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 shadow-2xl">
      <p className="font-semibold">
        {label}
      </p>

      <p className="mt-2 text-red-400">
        {payload[0].value} pts
      </p>
    </div>
  );
}