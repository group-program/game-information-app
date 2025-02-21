const articles = [
    { id: 1, title: "記事タイトル1", excerpt: "記事の概要がここに入ります。" },
    { id: 2, title: "記事タイトル2", excerpt: "別の記事の概要がここに入ります。" },
    { id: 3, title: "記事タイトル3", excerpt: "他の記事の概要がここに入ります。" },
    { id: 4, title: "記事タイトル4", excerpt: "他の記事の概要がここに入ります。" },
    { id: 5, title: "記事タイトル5", excerpt: "他の記事の概要がここに入ります。" },
    { id: 6, title: "記事タイトル6", excerpt: "他の記事の概要がここに入ります。" },
    { id: 7, title: "記事タイトル7", excerpt: "他の記事の概要がここに入ります。" },
    { id: 8, title: "記事タイトル8", excerpt: "他の記事の概要がここに入ります。" },
    { id: 9, title: "記事タイトル9", excerpt: "他の記事の概要がここに入ります。" },
    { id: 10, title: "記事タイトル10", excerpt: "他の記事の概要がここに入ります。" },
    { id: 11, title: "記事タイトル11", excerpt: "他の記事の概要がここに入ります。" },
    { id: 12, title: "記事タイトル12", excerpt: "他の記事の概要がここに入ります。" },
    { id: 13, title: "記事タイトル13", excerpt: "他の記事の概要がここに入ります。" },
    { id: 14, title: "記事タイトル14", excerpt: "他の記事の概要がここに入ります。" },
    { id: 15, title: "記事タイトル15", excerpt: "他の記事の概要がここに入ります。" },
    { id: 16, title: "記事タイトル16", excerpt: "他の記事の概要がここに入ります。" },
    { id: 17, title: "記事タイトル17", excerpt: "他の記事の概要がここに入ります。" },
    { id: 18, title: "記事タイトル18", excerpt: "他の記事の概要がここに入ります。" },
    { id: 19, title: "記事タイトル19", excerpt: "他の記事の概要がここに入ります。" },
    { id: 20, title: "記事タイトル20", excerpt: "他の記事の概要がここに入ります。" },
    ]

const ArticleCard = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {articles.map((article) => (
            <div
            key={article.id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
            <h2 className="text-2xl font-semibold text-black">{article.title}</h2>
            <p className="text-gray-600 mt-2">{article.excerpt}</p>
            <a href={`/article/${article.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                続きを読む
            </a>
            </div>
        ))}
        </div>
    )
    }

export default ArticleCard