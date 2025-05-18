"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SigninForm from "../module/SigninForm";

function SigninPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [signinMessage, setSigninMessage] = useState("");

  const handleChangeValue = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: name === "email" ? value.toLowerCase().trim() : value.trim(),
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (data.error) {
      setSigninMessage(data.error);
      return;
    }

    if (data.message) location.replace("/");
  };

  return (
    <>
      <div className="w-full max-w-2xl flex flex-col items-center justify-start gap-8 mx-auto p-2">
        <div className="w-full flex items-center justify-start">
          <span
            onClick={() => router.back()}
            className="p-2 text-icon bg-surface rounded-lg cursor-pointer"
          >
            <ArrowRight />
          </span>
        </div>

        <p className="w-full text-center text-primary font-medium">
          ورود به حساب
        </p>

        <Image
          src="/images/signin.png"
          width={300}
          height={300}
          alt="signup image"
          priority={true}
        />

        {signinMessage && (
          <p className="w-full flex items-center justify-center text-danger animate-pulse">
            {signinMessage}
          </p>
        )}

        <SigninForm
          form={form}
          handleChangeValue={handleChangeValue}
          isShowPassword={isShowPassword}
          setIsShowPassword={setIsShowPassword}
          handleSubmit={handleLogin}
        />
      </div>
    </>
  );
}

export default SigninPage;
