"use client";

import { useState } from "react";

import Toast from "./Toast";
import DashboardImageForm from "../elements/DashboardImageForm";

function DashboardUserForm() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    description: "",
    image: "",
  });
  const [toastMessage, setToastMessage] = useState("");

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex flex-col items-start justify-start gap-4">
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

          <div className="w-full flex flex-col items-start justify-start gap-2">
            <label htmlFor="post-summary">خلاصه مطلب</label>
            <textarea
              name="summary"
              id="post-summary"
              value={form.summary}
              rows={2}
              cols={50}
              onChange={handleFormChange}
              className="w-full border border-stroke bg-surface px-2 py-1.5 sm:py-2 rounded-lg"
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

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default DashboardUserForm;
