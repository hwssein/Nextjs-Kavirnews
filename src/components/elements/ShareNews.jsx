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
        className="w-fit text-icon text-sm flex items-center justify-start gap-2 bg-surface hover:bg-secondary hover:text-background p-2 rounded-lg custom-transition cursor-pointer"
      >
        <Share2 className="w-4 h-4" />

        <span>اشتراک گذاری</span>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default ShareNews;
