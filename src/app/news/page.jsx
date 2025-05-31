import Loader from "@/components/elements/Loader";
import NewsPage from "@/components/templates/NewsPage";
import getFilteredPosts from "@/serverAction/getFilteredPosts";
import getPost from "@/serverAction/getPost";
import { Suspense } from "react";

async function News({ searchParams }) {
  const searchedParams = await searchParams;

  let posts = null;

  if (Object.keys(searchedParams).length !== 0) {
    posts = await getFilteredPosts(
      searchedParams?.categories,
      searchedParams?.search
    );
  } else {
    posts = await getPost();
  }

  if (!posts || posts.error) {
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
      <Suspense fallback={<Loader />}>
        <NewsPage data={posts?.data} filter={searchedParams} />
      </Suspense>
    </>
  );
}

export default News;
