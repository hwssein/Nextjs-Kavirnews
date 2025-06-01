import Loader from "@/components/elements/Loader";
import ShowError from "@/components/module/ShowError";
import PostDetailsPage from "@/components/templates/PostDetailsPage";
import getPostData from "@/serverAction/getPostData";
import { Suspense } from "react";

async function NewsDetails({ params }) {
  const { postId } = await params;

  const postData = await getPostData(postId);

  if (postData.error || !postData) {
    return (
      <>
        <ShowError text={postData?.error} />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <PostDetailsPage data={postData?.data} />
      </Suspense>
    </>
  );
}

export default NewsDetails;
