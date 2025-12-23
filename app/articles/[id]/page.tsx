// ダミーデータをインポートします
import { articles } from "@/app/data/articles";

// react-markdownライブラリをインポートします
// このライブラリが、Markdown形式の文字列をHTMLに変換してくれます
import ReactMarkdown from "react-markdown";

// 記事ページのコンポーネント
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // URLからidを取得します
  const { id } = await params;

  // idは文字列なので、数字に変換します
  const articleId = parseInt(id);

  // articles配列の中から、idが一致する記事を探します
  const article = articles.find((a) => a.id === articleId);

  // 記事が見つからなかった場合
  if (!article) {
    return (
      <div>
        <h1>記事が見つかりません</h1>
        <p>指定されたIDの記事は存在しません。</p>
      </div>
    );
  }

  // 記事が見つかった場合、記事の内容を表示します
  return (
    <div>
      <h1>{article.title}</h1>
      <p>カテゴリ: {article.category}</p>
      <p>公開日: {article.publishedAt}</p>

      {/* ReactMarkdownコンポーネントを使って、Markdown形式の本文をHTMLに変換して表示します */}
      <ReactMarkdown>{article.content}</ReactMarkdown>
    </div>
  );
}
