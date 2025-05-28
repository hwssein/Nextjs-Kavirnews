import HomePage from "@/components/templates/HomePage";
import getCategoriesLatestPosts from "@/serverAction/getCategoriesLatestPosts";
import getPost from "@/serverAction/getPost";

async function Home() {
  const allPosts = await getPost();
  const categoriesPosts = await getCategoriesLatestPosts();

  if (!allPosts || allPosts.error) {
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
      <HomePage
        allPosts={allPosts?.data}
        categoriesPosts={categoriesPosts?.data}
      />
    </>
  );
}

export default Home;
