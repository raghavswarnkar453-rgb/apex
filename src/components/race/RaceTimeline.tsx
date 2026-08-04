import { Card } from "@/components/ui";

interface RaceSession {
  date: string;
  time: string;
}

interface TimelineItem {
  name: string;
  session: RaceSession;
}

interface RaceTimelineProps {
  sessions: TimelineItem[];
  formatDate: (date: string) => string;
  formatTime: (
    date: string,
    time: string
  ) => string;
}

export default function RaceTimeline({
  sessions,
  formatDate,
  formatTime,
}: RaceTimelineProps) {
  return (
    <Card className="overflow-hidden border border-white/10 bg-white/[0.03]">
      <div className="border-b border-white/10 px-8 py-6">
        <h2 className="text-2xl font-bold">
          Weekend Schedule
        </h2>
      </div>

      {sessions.map((item) => (
        <div
          key={item.name}
          className="grid grid-cols-[180px_1fr] border-b border-white/5 px-8 py-5 transition-colors hover:bg-white/5"
        >
          <span className="font-semibold">
            {item.name}
          </span>

          <div>
            <p>
              {formatDate(item.session.date)}
            </p>

            <p className="mt-1 text-zinc-500">
              {formatTime(
                item.session.date,
                item.session.time
              )}
            </p>
          </div>
        </div>
      ))}
    </Card>
  );
}