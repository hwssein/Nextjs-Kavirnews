"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Toast from "../module/Toast";
import DeletePostBtn from "./DeletePostBtn";

function UserPostCardButton({ postId }) {
  const router = useRouter();

  const [toastMessage, setToastMessage] = useState("");

  const handleEditPost = async (event) => {
    event.stopPropagation();

    router.push(`/dashboard/edit/${postId}`);
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

        <DeletePostBtn postId={postId} />
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default UserPostCardButton;
