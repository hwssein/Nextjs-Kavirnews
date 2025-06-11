"use client";

import { useState, useEffect, useActionState, useRef } from "react";
import uploadPost from "@/serverAction/uploadPost";

import DashboardImageForm from "../elements/DashboardImageForm";

import { ChevronDown, Loader } from "lucide-react";
import SectionTitle from "../elements/SectionTitle";

function DashboardUserForm({ setToastMessage }) {
  const [imageBlobUrl, setImageBlobUrl] = useState("");
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
      <div className="w-full flex flex-col items-start justify-start">
        <SectionTitle text="افزودن خبر" />

        <form
          action={formAction}
          className="w-full flex flex-col items-start justify-start gap-4"
        >
          <div className="w-full flex flex-col items-start justify-start gap-8">
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-start gap-8">
              <div className="w-full lg:w-[70%] flex flex-col items-start justify-start gap-3">
                <label htmlFor="post-title">عنوان</label>
                <input
                  type="text"
                  id="post-title"
                  name="title"
                  className="w-full border border-stroke focus:border-primary custom-transition bg-surface p-2 rounded-lg"
                />
              </div>

              <div className="w-full lg:w-[30%] bg-surface rounded-lg relative">
                <select
                  aria-label="انتخاب دسته بندی"
                  name="category"
                  defaultValue=""
                  required
                  className="w-full h-[42px] appearance-none p-2 border border-stroke focus:border-primary custom-transition rounded-lg"
                >
                  <option value="" disabled hidden>
                    انتخاب دسته‌بندی
                  </option>
                  <option value="social">اجتماعی</option>
                  <option value="economics">اقتصاد</option>
                  <option value="politic">سیاست</option>
                  <option value="technology">فناوری</option>
                  <option value="sport">ورزش</option>
                </select>

                <ChevronDown className="w-4 h-4 text-icon absolute left-2 top-3.5" />
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-start lg:items-stretch justify-start gap-8">
              <div className="w-full lg:w-[70%] flex flex-col items-start justify-start gap-8">
                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <label htmlFor="post-summary">خلاصه مطلب</label>
                  <textarea
                    name="summary"
                    id="post-summary"
                    className="w-full resize-none h-32 border border-stroke focus:border-primary custom-transition bg-surface p-2 rounded-lg"
                  ></textarea>
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <label htmlFor="post-description">توضیحات</label>
                  <textarea
                    name="description"
                    id="post-description"
                    className="w-full h-48 resize-none border border-stroke focus:border-primary custom-transition bg-surface p-2 rounded-lg"
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
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`w-full lg:w-48 flex items-center justify-center border border-primary bg-primary ${
              isPending ? "brightness-90" : "brightness-100"
            } px-4 py-1.5 md:py-2 rounded-md text-white hover:brightness-90 custom-transition cursor-pointer`}
          >
            {isPending ? <Loader /> : "ارسال"}
          </button>
        </form>
      </div>
    </>
  );
}

export default DashboardUserForm;
