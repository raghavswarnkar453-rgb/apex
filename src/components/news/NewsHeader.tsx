import { Badge } from "@/components/ui";

export default function NewsHeader() {
  return (
    <div className="mb-16">
      <Badge variant="primary">
        FORMULA ONE NEWS
      </Badge>

      <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
        Latest Headlines
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
        Stay up to date with the latest Formula One news, team updates,
        driver announcements, race analysis, and championship stories.
      </p>
    </div>
  );
}