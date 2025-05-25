"use client";

import { useState } from "react";
import Toast from "../module/Toast";
import deletePost from "@/serverAction/deletePost";
import { Loader } from "lucide-react";

function UserPostCardButton({ postId }) {
  const [toastMessage, setToastMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletePost = async (event) => {
    event.stopPropagation();

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
        <button className="w-fit px-2 py-1 bg-secondary rounded-lg text-background hover:brightness-90 custom-transition cursor-pointer">
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
