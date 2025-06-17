"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SigninForm from "../module/SigninForm";
import Toast from "../module/Toast";

function SigninPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleChangeValue = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: name === "email" ? value.toLowerCase().trim() : value.trim(),
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsPending(true);

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        setToastMessage(data.error);
        setIsPending(false);
        return;
      }

      if (data.message) location.replace("/");
    } catch (error) {
      console.log(error);
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="w-full h-full inset-0 absolute -z-10 bg-primary/7"></div>

      <div className="w-full max-w-2xl flex flex-col items-center justify-start gap-8 mx-auto px-2 py-3">
        <div className="w-full flex items-center justify-start">
          <span
            onClick={() => router.back()}
            className="p-2 text-icon rounded-lg cursor-pointer"
          >
            <ArrowRight />
          </span>
        </div>

        <p className="w-full text-center text-primary font-semibold text-xl">
          ورود به حساب
        </p>

        <Image
          src="/images/signin.png"
          width={300}
          height={300}
          alt="signup image"
          priority={true}
        />

        <SigninForm
          form={form}
          handleChangeValue={handleChangeValue}
          isShowPassword={isShowPassword}
          setIsShowPassword={setIsShowPassword}
          handleSubmit={handleLogin}
          isPending={isPending}
        />
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default SigninPage;
