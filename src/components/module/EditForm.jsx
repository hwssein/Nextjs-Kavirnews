"use client";

import { useRouter } from "next/navigation";
import DashboardImageForm from "../elements/DashboardImageForm";
import { ChevronDown, Loader } from "lucide-react";

export default function EditForm({
  form,
  handleChangeForm,
  setToastMessage,
  formAction,
  isPending,
  imageBlobUrl,
  setImageBlobUrl,
  imageRef,
}) {
  const router = useRouter();

  return (
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
              value={form.title}
              onChange={handleChangeForm}
              className="w-full border border-stroke focus:border-primary custom-transition bg-surface p-2 rounded-lg"
            />
          </div>

          <div className="w-full lg:w-[30%] bg-surface rounded-lg relative">
            <select
              aria-label="انتخاب دسته بندی"
              name="category"
              value={form.category}
              onChange={handleChangeForm}
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
                value={form.summary}
                onChange={handleChangeForm}
                className="w-full resize-none h-32 border border-stroke focus:border-primary custom-transition bg-surface p-2 rounded-lg"
              ></textarea>
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-3">
              <label htmlFor="post-description">توضیحات</label>
              <textarea
                name="description"
                id="post-description"
                value={form.description}
                onChange={handleChangeForm}
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

      <input type="hidden" name="oldImage" value={imageBlobUrl || ""} />
      <input type="hidden" name="id" value={form.id || ""} />

      <div className="w-full flex items-center justify-between md:justify-start gap-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="w-full lg:w-32 border border-secondary bg-secondary hover:brightness-90 custom-transition text-white px-4 py-1.5 rounded-md cursor-pointer"
        >
          لغو
        </button>

        <button
          type="submit"
          disabled={isPending}
          className={`w-full lg:w-48 flex items-center justify-center border border-primary bg-primary ${
            isPending ? "brightness-90" : "brightness-100"
          } px-4 py-1.5 rounded-md text-white hover:brightness-90 custom-transition cursor-pointer`}
        >
          {isPending ? <Loader /> : "ویرایش"}
        </button>
      </div>
    </form>
  );
}
