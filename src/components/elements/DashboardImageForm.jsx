"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { Image as ImageIcon, Minus, Plus } from "lucide-react";

function DashboardImageForm({ form, setForm, setToastMessage }) {
  const [imageUrl, setImageUrl] = useState("");

  const imageRef = useRef(null);

  const handleFormImageChange = (event) => {
    const { files } = event.target;

    if (!files[0]) return;

    if (!["image/png", "image/jpeg"].includes(files[0].type)) {
      setToastMessage("لطفا فرمت صحیح عکس را وارد کنید.");
      return;
    }

    if (files[0].size > 3 * 1024 * 1024) {
      setToastMessage("حداکثر حجم عکس ۳ مگابایت است.");
      return;
    }

    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    const imageObjectUrl = URL.createObjectURL(files[0]);
    setImageUrl(imageObjectUrl);

    setForm({ ...form, image: files[0] });
  };

  const handleDeleteImageUrl = (event) => {
    event.stopPropagation();

    URL.revokeObjectURL(imageUrl);
    setImageUrl("");
    setForm({ ...form, image: "" });

    if (imageRef.current) {
      imageRef.current.value = null;
    }
  };

  return (
    <>
      <div
        onClick={() => imageRef.current.click()}
        className="w-full border border-stroke flex flex-col items-center justify-center gap-4 bg-surface text-stroke rounded-lg p-10 cursor-pointer"
      >
        <span className="w-36">
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                width={200}
                height={200}
                alt="uploaded image"
              />
            </>
          ) : (
            <ImageIcon className="w-full h-full" />
          )}
        </span>

        {imageUrl ? (
          <span
            onClick={handleDeleteImageUrl}
            className="p-2 border border-stroke hover:border-danger hover:bg-danger hover:text-background rounded-lg flex items-center justify-center gap-1 font-bold custom-transition"
          >
            حذف تصویر <Minus />
          </span>
        ) : (
          <span className="p-2 border border-stroke rounded-lg flex items-center justify-center gap-1 font-bold">
            افزودن تصویر <Plus />
          </span>
        )}

        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          ref={imageRef}
          onChange={handleFormImageChange}
          className="hidden"
        />
      </div>
    </>
  );
}

export default DashboardImageForm;
