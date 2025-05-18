import findExistUser from "@/utils/findExistUser";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
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
        { error: "رمز وارد شده باید بیشتر از ۴ رقم باشد." },
        { status: 422 }
      );

    const isExistUser = await findExistUser(email);
    if (!isExistUser)
      return NextResponse.json(
        { error: "اطلاعات وارد شده معتبر نیست." },
        { status: 422 }
      );

    const verifyUserRes = await fetch(process.env.GET_TOKEN_API, {
      method: "POST",
      body: JSON.stringify({ username: email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const verifyUserData = await verifyUserRes.json();
    if (!verifyUserData.token)
      return NextResponse.json(
        { error: "اطلاعات وارد شده معتبر نیست" },
        { status: 422 }
      );

    const cookie = await cookies();

    cookie.set({
      name: "token",
      value: verifyUserData.token,
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 72,
    });

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در ارتباط با سرور پیش آمده است." },
      { status: 500 }
    );
  }
}
