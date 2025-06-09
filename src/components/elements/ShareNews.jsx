"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";
import Toast from "../module/Toast";

function ShareNews() {
  const [toastMessage, setToastMessage] = useState("");

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);

    setToastMessage("در حافظه کپی شد.");
  };
  return (
    <>
      <div
        onClick={handleShare}
        className="w-fit text-icon text-sm flex items-center justify-center gap-2 p-2 cursor-pointer rounded-md hover:bg-primary custom-transition group"
      >
        <Share2 className="w-5 h-5 text-primary group-hover:text-background custom-transition" />

        <span className="group-hover:text-background custom-transition">
          اشتراک گذاری
        </span>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default ShareNews;
