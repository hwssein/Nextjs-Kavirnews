"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import SigninForm from "../module/SigninForm";

import { ArrowRight } from "lucide-react";

function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [signupMessage, setSignupMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleChangeValue = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: name === "email" ? value.toLowerCase().trim() : value.trim(),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        setSignupMessage(data.error);
        setIsPending(false);
        return;
      }

      if (data.message) router.replace("/");
    } catch (error) {
      console.log(error);
      setIsPending(false);
    }
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
          ثبت نام در کویرنیوز
        </p>

        <Image
          src="/images/signup.png"
          width={300}
          height={300}
          alt="signup image"
          priority={true}
        />

        {signupMessage && (
          <p className="w-full flex items-center justify-center text-danger animate-pulse">
            {signupMessage}
          </p>
        )}

        <SigninForm
          form={form}
          handleChangeValue={handleChangeValue}
          isShowPassword={isShowPassword}
          setIsShowPassword={setIsShowPassword}
          handleSubmit={handleSubmit}
          isPending={isPending}
        />
      </div>
    </>
  );
}

export default SignupPage;
