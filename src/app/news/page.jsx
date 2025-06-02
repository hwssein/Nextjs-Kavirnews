import Loader from "@/components/elements/Loader";
import ShowError from "@/components/module/ShowError";
import NewsPage from "@/components/templates/NewsPage";
import getFilteredPosts from "@/serverAction/getFilteredPosts";
import getPost from "@/serverAction/getPost";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

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
        <ShowError />
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
