"use client";

import { useState } from "react";

import Toast from "./Toast";
import DashboardImageForm from "../elements/DashboardImageForm";
import uploadPost from "@/serverAction/uploadPost";
import { Loader } from "lucide-react";

function DashboardUserForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    summary: "",
    description: "",
    image: "",
    imageBlobUrl: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const uploadPostRes = await uploadPost(form);

      if (uploadPostRes.error) {
        setToastMessage(uploadPostRes.error);
        setIsLoading(false);
        return;
      }

      if (uploadPostRes.message) {
        setToastMessage(uploadPostRes.message);

        if (form.imageBlobUrl) {
          URL.revokeObjectURL(form.imageBlobUrl);
        }

        setForm({
          title: "",
          category: "",
          summary: "",
          description: "",
          image: "",
          imageBlobUrl: "",
        });

        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setToastMessage("مشکلی در ارتباط با سرور پیش آمده است.");
      return;
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmitForm}
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
                  value={form.title}
                  onChange={handleFormChange}
                  className="w-full border border-stroke bg-surface px-2 py-1.5 sm:py-2 rounded-lg"
                />
              </div>

              <div className="w-full h-[38px] md:h-[42px] bg-surface border border-stroke rounded-lg flex flex-col items-start justify-start gap-2">
                <select
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                  className="w-full px-1 flex flex-col items-start justify-start gap-2 bg-surface rounded-lg "
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
                value={form.summary}
                onChange={handleFormChange}
                className="w-full resize-none h-[76px] md:h-[42px] border border-stroke bg-surface px-2 py-1.5 sm:py-2 rounded-lg"
              ></textarea>
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-2">
              <label htmlFor="post-description">توضیحات</label>
              <textarea
                name="description"
                id="post-description"
                value={form.description}
                rows={5}
                cols={50}
                onChange={handleFormChange}
                className="w-full border border-stroke bg-surface px-2 py-1.5 sm:py-2 rounded-lg"
              ></textarea>
            </div>
          </div>

          <DashboardImageForm
            form={form}
            setForm={setForm}
            setToastMessage={setToastMessage}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-fit flex items-center justify-center text-nowrap border border-primary bg-primary px-4 py-1.5 sm:py-2 rounded-lg text-white hover:brightness-90 custom-transition cursor-pointer"
        >
          {isLoading ? <Loader /> : "ارسال"}
        </button>
      </form>
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default DashboardUserForm;
