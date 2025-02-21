import { NextRequest, NextResponse } from "next/server";

// 仮のデータ
const articles = [
  { id: "1", title: "記事タイトル1", content: "記事の内容1" },
  { id: "2", title: "記事タイトル2", content: "記事の内容2" },
];

export async function GET(request: NextRequest, context: { params: { id?: string } }) {
  // `params` を await で取得
  const params = await context.params;
  const articleId = params?.id;

  if (!articleId) {
    console.error("記事IDが取得できませんでした");
    return NextResponse.json({ error: "記事IDがありません" }, { status: 400 });
  }

  console.log("API received ID:", articleId); // デバッグログ

  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    console.error("記事が見つかりません:", articleId);
    return NextResponse.json({ error: "記事が見つかりません" }, { status: 404 });
  }

  return NextResponse.json(article);
}
