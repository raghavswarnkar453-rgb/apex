import type { NewsArticle } from "@/types/news";

import NewsCard from "./NewsCard";

interface Props {
  articles: NewsArticle[];
}

export default function NewsGrid({
  articles,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <NewsCard
  key={article.link}
  article={article}
/>
      ))}
    </div>
  );
}