"use client";

import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function RemoveSearchQuery() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleRemoveQueries = () => {
    const params = new URLSearchParams(searchParams.toString());

    ["categories", "search"].forEach((item) => {
      params.delete(item);
    });

    router.push("/news");
  };
  return (
    <>
      <button
        onClick={handleRemoveQueries}
        className="w-fit flex items-center justify-center font-light gap-1 text-danger cursor-pointer"
      >
        <X /> پاک کردن
      </button>
    </>
  );
}

export default RemoveSearchQuery;
