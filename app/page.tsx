import Image from "next/image";
import { articles } from "@/app/data/articles";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>記事一覧</h1>
      <div>
        {articles.map((article) => (
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
