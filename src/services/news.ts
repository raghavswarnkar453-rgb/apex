import Parser from "rss-parser";

import { RSS_FEEDS } from "@/constants/rssFeeds";

import type { NewsArticle } from "@/types/news";

const parser = new Parser();

export async function getNews(): Promise<NewsArticle[]> {
  const articles: NewsArticle[] = [];

  await Promise.all(
    RSS_FEEDS.map(async (feed) => {
      try {
        const rss = await parser.parseURL(feed.url);

        rss.items.forEach((item) => {
          articles.push({
            title: item.title ?? "",
            description:
              item.contentSnippet ??
              item.content ??
              "",
            link: item.link ?? "",
            pubDate: item.pubDate ?? "",
            source: feed.name,
            image: "",
          });
        });
      } catch {
        console.warn(
          `[RSS] ${feed.name} is unavailable`
        );
      }
    })
  );

  // Remove duplicate articles
  const uniqueArticles = articles.filter(
    (article, index, self) =>
      index ===
      self.findIndex(
        (a) => a.link === article.link
      )
  );

  // Sort newest first
  uniqueArticles.sort((a, b) => {
    const dateA = a.pubDate
      ? new Date(a.pubDate).getTime()
      : 0;

    const dateB = b.pubDate
      ? new Date(b.pubDate).getTime()
      : 0;

    return dateB - dateA;
  });

  // Return only the latest 30
  return uniqueArticles.slice(0, 30);
}