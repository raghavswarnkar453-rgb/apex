"use client";

import { useMemo, useState } from "react";

import type { NewsArticle } from "@/types/news";

import FeaturedNews from "./FeaturedNews";
import NewsFilters from "./NewsFilters";
import NewsGrid from "./NewsGrid";
import NewsSearch from "./NewsSearch";

interface Props {
  articles: NewsArticle[];
}

export default function NewsContent({
  articles,
}: Props) {
  const [query, setQuery] =
    useState("");

  const [source, setSource] =
    useState("All");

  const sources = [
    ...new Set(
      articles.map(
        (article) => article.source
      )
    ),
  ];

  const filtered = useMemo(() => {
    const search =
      query.toLowerCase();

    return articles.filter((article) => {
      const matchesSearch =
        article.title
          .toLowerCase()
          .includes(search) ||
        article.description
          .toLowerCase()
          .includes(search);

      const matchesSource =
        source === "All" ||
        article.source === source;

      return (
        matchesSearch &&
        matchesSource
      );
    });
  }, [articles, query, source]);

  return (
    <>
      <NewsSearch
        value={query}
        onChange={setQuery}
      />

      <NewsFilters
        sources={sources}
        active={source}
        onChange={setSource}
      />

      <p className="mb-8 text-sm text-zinc-500">
        {filtered.length} Articles
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center text-zinc-400">
          No matching articles found.
        </div>
      ) : (
        <>
          <FeaturedNews
            article={filtered[0]}
          />

          <NewsGrid
            articles={filtered.slice(1)}
          />
        </>
      )}
    </>
  );
}