import Link from "next/link";

export default function ArticleCard() {
  const articles = [
    { id: "1", title: "記事タイトル1", excerpt: "記事の概要がここに入ります。" },
    { id: "2", title: "記事タイトル2", excerpt: "別の記事の概要がここに入ります。" },
    { id: "3", title: "記事タイトル3", excerpt: "他の記事の概要がここに入ります。" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold text-black">{article.title}</h2>
          <p className="text-gray-600 mt-2">{article.excerpt}</p>
          <Link href={`/article/${article.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
            続きを読む
          </Link>
        </div>
      ))}
    </div>
  );
}
