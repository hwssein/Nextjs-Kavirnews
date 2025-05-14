"use client";

import Image from "next/image";
import SigninForm from "../module/SigninForm";
import { useState } from "react";

function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChangeValue = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: name === "email" ? value.toLowerCase().trim() : value.trim(),
    });
  };

  return (
    <>
      <div className="w-full max-w-2xl flex flex-col items-center justify-start gap-8 mt-10 mx-auto">
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

        <SigninForm
          form={form}
          handleChangeValue={handleChangeValue}
          isShowPassword={isShowPassword}
          setIsShowPassword={setIsShowPassword}
        />
      </div>
    </>
  );
}

export default SignupPage;
