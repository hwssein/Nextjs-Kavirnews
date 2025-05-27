"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import deletePost from "@/serverAction/deletePost";

import Toast from "../module/Toast";
import { Loader } from "lucide-react";

function UserPostCardButton({ postId }) {
  const router = useRouter();

  const [toastMessage, setToastMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEditPost = async (event) => {
    event.stopPropagation();

    router.push(`/dashboard/edit/${postId}`);
  };

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
      <div className="w-full flex items-center justify-end gap-4">
        <button
          onClick={handleEditPost}
          className="w-fit px-2 py-1 bg-secondary rounded-lg text-background hover:brightness-90 custom-transition cursor-pointer"
        >
          ویرایش
        </button>

        <button
          disabled={isLoading}
          onClick={handleDeletePost}
          className="w-fit px-2 py-1 bg-danger rounded-lg text-background hover:brightness-90 custom-transition cursor-pointer"
        >
          {isLoading ? <Loader /> : "حذف"}
        </button>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default UserPostCardButton;
