import Image from "next/image";
import Link from "next/link";

import { Card, Badge } from "@/components/ui";

import type { NewsArticle } from "@/types/news";

interface Props {
  article: NewsArticle;
}

export default function FeaturedNews({
  article,
}: Props) {
  return (
    <Card className="mb-12 overflow-hidden p-0">

      <div className="grid lg:grid-cols-2">

        <div className="relative h-80 lg:h-full">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-white/5 text-zinc-500">
              No Image
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center p-10">

          <Badge variant="primary">
            FEATURED
          </Badge>

          <h2 className="mt-6 text-4xl font-bold leading-tight">
            {article.title}
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            {article.description}
          </p>

          <div className="mt-8 flex items-center justify-between">

            <span className="text-sm text-zinc-500">
              {article.source}
            </span>

            <Link
              href={article.link}
              target="_blank"
              className="font-semibold text-red-400 hover:text-red-300"
            >
              Read Article →
            </Link>

          </div>

        </div>

      </div>

    </Card>
  );
}