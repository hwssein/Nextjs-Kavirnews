"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import EditForm from "../module/EditForm";
import Toast from "../module/Toast";
import editPost from "@/serverAction/editPost";
import { useRouter } from "next/navigation";
import SectionTitle from "../elements/SectionTitle";

function EditNewsPage({ data }) {
  const router = useRouter();

  const [form, setForm] = useState({
    id: "",
    title: "",
    category: "",
    summary: "",
    description: "",
  });
  const [imageBlobUrl, setImageBlobUrl] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const imageRef = useRef(null);

  const [state, formAction, isPending] = useActionState(editPost, {
    message: "",
    error: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        id: data.id || "",
        title: data.title || "",
        category: data.category?.slug || "",
        summary: data.summary || "",
        description: data.description || "",
      });
      setImageBlobUrl(data.image);
    }
  }, [data]);

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

      router.back();

      return () => clearTimeout(timeoutId);
    }

    if (state.error) {
      setToastMessage(state.error);

      const timeoutId = setTimeout(() => {
        setToastMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [state]);

  const handleChangeForm = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start px-2">
        <SectionTitle text="ویرایش خبر" />

        <EditForm
          form={form}
          handleChangeForm={handleChangeForm}
          setToastMessage={setToastMessage}
          formAction={formAction}
          isPending={isPending}
          imageBlobUrl={imageBlobUrl}
          setImageBlobUrl={setImageBlobUrl}
          imageRef={imageRef}
        />
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default EditNewsPage;
