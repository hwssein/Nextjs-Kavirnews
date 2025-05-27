import HomePage from "@/components/templates/HomePage";
import getPost from "@/serverAction/getPost";

async function Home() {
  const newsData = await getPost();

  if (!newsData || newsData.error) {
    return (
      <>
        <div className="w-full flex items-center justify-center mt-4">
          <span className="px-4 py-2 rounded-lg text-background bg-secondary">
            مشکلی پیش آمده است، لطفا دوباره امتحان کنید.
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <HomePage data={newsData} />
    </>
  );
}

export default Home;
