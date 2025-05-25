"use client";

import { useState, useEffect, useActionState, useRef } from "react";

import uploadPost from "@/serverAction/uploadPost";

import Toast from "./Toast";
import DashboardImageForm from "../elements/DashboardImageForm";

import { Loader } from "lucide-react";

function DashboardUserForm() {
  const [imageBlobUrl, setImageBlobUrl] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const imageRef = useRef(null);

  const [state, formAction, isPending] = useActionState(uploadPost, {
    message: "",
    error: "",
  });

  useEffect(() => {
    if (state.message) {
      setToastMessage(state.message);

      setImageBlobUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return "";
      });

      if (imageRef.current) {
        imageRef.current.value = null;
      }

      const timeoutId = setTimeout(() => {
        setToastMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else if (state.error) {
      setToastMessage(state.error);
    }
  }, [state]);

  return (
    <>
      <form
        action={formAction}
        className="w-full flex flex-col items-start justify-start gap-4"
      >
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-start md:justify-center gap-4">
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-start gap-4">
              <div className="w-full flex flex-col items-start justify-start gap-2">
                <label htmlFor="post-title">عنوان</label>
                <input
                  type="text"
                  id="post-title"
                  name="title"
                  className="w-full border border-stroke bg-surface px-2 py-1.5 sm:py-2 rounded-lg"
                />
              </div>

              <div className="w-full h-[38px] md:h-[42px] bg-surface border border-stroke rounded-lg flex flex-col items-start justify-start gap-2">
                <select
                  name="category"
                  defaultValue=""
                  required
                  className="w-full px-1 flex flex-col items-start justify-start gap-2 bg-surface rounded-lg"
                >
                  <option value="" disabled hidden>
                    دسته بندی
                  </option>
                  <option value="social">اجتماعی</option>
                  <option value="economics">اقتصاد</option>
                  <option value="politic">سیاست</option>
                  <option value="technology">فناوری</option>
                  <option value="sport">ورزش</option>
                </select>
              </div>
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-2">
              <label htmlFor="post-summary">خلاصه مطلب</label>
              <textarea
                name="summary"
                id="post-summary"
                className="w-full resize-none h-[76px] md:h-[42px] border border-stroke bg-surface px-2 py-1.5 sm:py-2 rounded-lg"
              ></textarea>
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-2">
              <label htmlFor="post-description">توضیحات</label>
              <textarea
                name="description"
                id="post-description"
                rows={5}
                cols={50}
                className="w-full border border-stroke bg-surface px-2 py-1.5 sm:py-2 rounded-lg"
              ></textarea>
            </div>
          </div>

          <DashboardImageForm
            imageBlobUrl={imageBlobUrl}
            setImageBlobUrl={setImageBlobUrl}
            setToastMessage={setToastMessage}
            imageRef={imageRef}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full md:w-fit flex items-center justify-center text-nowrap border border-primary bg-primary px-4 py-1.5 sm:py-2 rounded-lg text-white hover:brightness-90 custom-transition cursor-pointer"
        >
          {isPending ? <Loader /> : "ارسال"}
        </button>
      </form>
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default DashboardUserForm;
