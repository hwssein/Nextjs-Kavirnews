"use client";

import Image from "next/image";
import { Minus, Plus, UploadCloud } from "lucide-react";
import { useState } from "react";

function DashboardImageForm({
  imageBlobUrl,
  setImageBlobUrl,
  setToastMessage,
  imageRef,
}) {
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleFormImageChange = (event) => {
    const { files } = event.target;
    if (!files || !files[0]) return;

    const file = files[0];

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      setToastMessage("لطفا فرمت صحیح عکس را وارد کنید.");
      return;
    }

    if (file.size > 1 * 1024 * 1024) {
      setToastMessage("حداکثر حجم عکس ۱ مگابایت است.");
      return;
    }

    if (imageBlobUrl) {
      URL.revokeObjectURL(imageBlobUrl);
    }

    const imageObjectUrl = URL.createObjectURL(file);
    setImageBlobUrl(imageObjectUrl);
    setToastMessage("");
  };

  const handleDeleteImageUrl = (event) => {
    event.stopPropagation();

    if (imageBlobUrl) {
      URL.revokeObjectURL(imageBlobUrl);
      setImageBlobUrl("");
    }

    if (imageRef.current) {
      imageRef.current.value = null;
    }

    setFileInputKey(Date.now());
    setToastMessage("");
  };

  return (
    <div
      onClick={() => imageRef.current?.click()}
      className="w-full lg:w-[30%] lg:h-full lg:min-h-[392px] lg:mt-8 border border-stroke flex flex-col items-center justify-center gap-4 bg-surface text-stroke rounded-lg p-8 cursor-pointer"
    >
      <div className="w-48 sm:w-60 lg:w-44 relative aspect-[4/3]">
        {imageBlobUrl ? (
          <Image
            src={imageBlobUrl}
            fill
            sizes="(max-width: 648px): 200px, 640px"
            alt="uploaded image"
            className="w-full h-full rounded-md object-cover"
          />
        ) : (
          <UploadCloud className="w-full h-full p-6" />
        )}
      </div>

      {imageBlobUrl ? (
        <span
          onClick={handleDeleteImageUrl}
          className="px-3 py-2 border border-stroke hover:border-danger hover:text-danger rounded-lg flex items-center justify-center gap-1 font-bold custom-transition"
        >
          حذف تصویر <Minus />
        </span>
      ) : (
        <span className="px-3 py-2 border border-stroke rounded-lg flex items-center justify-center gap-1 font-bold">
          افزودن تصویر <Plus />
        </span>
      )}

      <input
        key={fileInputKey}
        type="file"
        name="image"
        accept="image/png, image/jpeg"
        ref={imageRef}
        onChange={handleFormImageChange}
        className="hidden"
      />
    </div>
  );
}

export default DashboardImageForm;
