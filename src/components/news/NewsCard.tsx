"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Card } from "@/components/ui";
import { timeAgo } from "@/lib/time";

import type { NewsArticle } from "@/types/news";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({
  article,
}: NewsCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <Card
        hover
        className="overflow-hidden p-0"
      >
        <div className="relative h-56 w-full bg-white/5">
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

        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-red-400">
            {article.source}
          </p>

          <h2 className="mt-3 line-clamp-2 text-2xl font-bold">
            {article.title}
          </h2>

          <p className="mt-4 line-clamp-3 text-zinc-400">
            {article.description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-zinc-500">
              {timeAgo(article.pubDate)}
            </span>

            <Link
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red-400 transition-colors hover:text-red-300"
            >
              Read →
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}