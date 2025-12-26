import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/app/data/articles";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const validCategories = ["nutrition", "mental", "ai"];
  if (!validCategories.includes(category)) {
    notFound();
  }

  const filteredArticles = articles.filter(
    (article) => article.category === category
  );

  const categoryNames = {
    nutrition: "栄養",
    mental: "精神",
    ai: "AI体験談やその他",
  };

  return (
    <div>
      <h1>
        {categoryNames[category as keyof typeof categoryNames]}カテゴリの記事
      </h1>
      <div>
        {filteredArticles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <div>
              <h2>{article.title}</h2>
              <p>カテゴリ: {article.category}</p>
              <p>公開日: {article.publishedAt}</p>
              <p>{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
