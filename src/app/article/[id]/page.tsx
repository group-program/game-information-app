import { notFound } from "next/navigation";

interface Props {
  params: { id?: string };
}

export default async function ArticlePage({ params }: Props) {
  // `params` を非同期に取得する
  const id = await Promise.resolve(params.id);

  console.log("Fetching article ID:", id);

  if (!id) {
    console.error("params.id が undefined です");
    return notFound();
  }

  // APIから記事データを取得
  const response = await fetch(`http://localhost:3000/api/article/${id}`);

  if (!response.ok) {
    console.error(`API request failed: ${response.statusText}`);
    return notFound();
  }

  const article = await response.json();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="mt-4">{article.content}</p>
    </div>
  );
}
