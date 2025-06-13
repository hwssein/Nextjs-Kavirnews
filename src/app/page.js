import ShowError from "@/components/module/ShowError";
import HomePage from "@/components/templates/HomePage";
import getCategoriesLatestPosts from "@/serverAction/getCategoriesLatestPosts";
import getPost from "@/serverAction/getPost";

export const dynamic = "force-dynamic";

async function Home() {
  const allPosts = await getPost();
  const categoriesPosts = await getCategoriesLatestPosts();

  if (
    allPosts?.data?.length === 0 ||
    allPosts.error ||
    categoriesPosts?.data?.length === 0 ||
    categoriesPosts.error
  ) {
    return (
      <>
        <ShowError />
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
