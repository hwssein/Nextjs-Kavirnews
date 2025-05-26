import Loader from "@/components/elements/Loader";
import EditNewsPage from "@/components/templates/EditNewsPage";
import getPostData from "@/serverAction/getPostData";
import React, { Suspense } from "react";

async function EditNews({ params }) {
  const { postId } = await params;

  const postData = await getPostData(postId);

  if (postData.error || !postData) {
    return (
      <>
        <div className="w-full flex items-center justify-center mt-4">
          <span className="px-4 py-2 rounded-lg text-background bg-secondary">
            {postData?.error}
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <EditNewsPage data={postData?.data} />
      </Suspense>
    </>
  );
}

export default EditNews;
