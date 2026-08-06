import { Card } from "@/components/ui";

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-white/10 bg-white/[0.03] px-8 py-6">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-zinc-500">
            {subtitle}
          </p>
        )}
      </div>

      <div className="p-8">
        {children}
      </div>
    </Card>
  );
}