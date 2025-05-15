import findExistUser from "@/utils/findExistUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const API_URI = process.env.API_URI;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    const { email, password } = await req.json();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRegexResult = emailRegex.test(email);

    if (!email || !password || !emailRegexResult)
      return NextResponse.json(
        { error: "اطلاعات وارد شده معتبر نیست." },
        { status: 422 }
      );

    if (password.length < 4)
      return NextResponse.json(
        { error: "رمز وارد شده باید بیشتر از ۴ رقمم باشد." },
        { status: 422 }
      );

    const isExistUser = await findExistUser(email);
    if (isExistUser)
      return NextResponse.json(
        { error: "کاربری با این مشخصات وجود دارد." },
        { status: 409 }
      );

    const userData = {
      username: email.split("@")[0],
      email: email,
      password: password,
      role: "subscriber",
    };

    const postUserData = await fetch(`${API_URI}/users`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        authorization: `Basic ${Buffer.from(`${API_USER}:${API_KEY}`).toString(
          "base64"
        )}`,
      },
    });

    if (postUserData.status !== 201)
      return NextResponse.json(
        { error: "مشکلی در فرایند ثبت نام پیش آمد." },
        { status: 400 }
      );

    return NextResponse.json(
      { message: "با موفقیت ثبت نام کردید." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در ارتباط با سرور پیش آمده است" },
      { status: 500 }
    );
  }
}
