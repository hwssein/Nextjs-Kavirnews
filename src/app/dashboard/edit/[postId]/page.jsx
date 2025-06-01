import Loader from "@/components/elements/Loader";
import ShowError from "@/components/module/ShowError";
import EditNewsPage from "@/components/templates/EditNewsPage";
import getPostData from "@/serverAction/getPostData";
import React, { Suspense } from "react";

async function EditNews({ params }) {
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
        <EditNewsPage data={postData?.data} />
      </Suspense>
    </>
  );
}

export default EditNews;
