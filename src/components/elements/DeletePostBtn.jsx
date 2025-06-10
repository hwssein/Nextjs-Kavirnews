"use client";
import deletePost from "@/serverAction/deletePost";

import { Loader } from "lucide-react";
import { useState } from "react";
import Toast from "../module/Toast";

function DeletePostBtn({ postId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleDeletePost = async (event) => {
    event.stopPropagation();

    const isOk = confirm("از حذف خبر اطمینان دارید؟");

    if (!isOk) return;

    setIsLoading(true);

    const deleteRes = await deletePost(postId);

    if (deleteRes.error) {
      setToastMessage(deleteRes.error);
      setIsLoading(false);
      return;
    }

    if (deleteRes.message) {
      setToastMessage(deleteRes.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        disabled={isLoading}
        onClick={handleDeletePost}
        className={`w-fit text-sm sm:text-base px-2 py-1 bg-danger ${
          isLoading ? "brightness-90" : "brightness-100"
        } rounded-lg text-background hover:brightness-90 custom-transition cursor-pointer`}
      >
        {isLoading ? <Loader /> : "حذف"}
      </button>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default DeletePostBtn;
