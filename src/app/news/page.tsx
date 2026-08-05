import { Container, Section } from "@/components/ui";

import NewsHeader from "@/components/news/NewsHeader";
import NewsGrid from "@/components/news/NewsGrid";
import FeaturedNews from "@/components/news/FeaturedNews";
import { getNews } from "@/services/news";
import NewsContent from "@/components/news/NewsContent";
export default async function NewsPage() {
  const articles = await getNews();

  

  return (
    <Section>
      <Container>
        <NewsHeader />

        

       {articles.length > 0 ? (
  <>
    <NewsContent
     articles={articles}
    />
  </>
) : (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center text-zinc-400">
    No news articles are available right now.
  </div>
)}
      </Container>
    </Section>
  );
}