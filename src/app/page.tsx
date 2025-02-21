import ArticleCard from "./components/ArticleCard";

const Home = () => {
  return (
    <>
    <h1>apex最新情報</h1>
    <div className="min-h-screen flex flex-col items-center bg-white text-black">
      <main className="flex flex-col items-center w-full p-6">
        <ArticleCard />
      </main>
    </div>
    </>
  );
}

export default Home