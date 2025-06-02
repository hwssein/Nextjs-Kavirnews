"use server";

import findExistUserById from "@/utils/findExistUserById";
import verifyToken from "@/utils/verifyToken";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const changeUserName = async (userName, userId) => {
  try {
    const API_URI = process.env.API_URI;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    if (!token)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید." },
        { status: 401 }
      );

    const verifiedToken = await verifyToken(token);
    if (!verifiedToken) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شودید." },
        { status: 401 }
      );
    }

    const user = await findExistUserById(verifiedToken);
    if (!user) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید." },
        { status: 401 }
      );
    }

    if (+user.id === +userId) {
      const res = await fetch(`${API_URI}/users/${+user.id}`, {
        method: "PUT",
        body: JSON.stringify({ name: userName }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Basic ${Buffer.from(
            `${API_USER}:${API_KEY}`
          ).toString("base64")}`,
        },
      });

      if (res.status !== 200)
        throw new Error("مشکلی در ارتباط با سرور پیش آمده است");

      revalidatePath("/dashboard");

      return { message: "با موفقیت تغییر کرد" };
    } else {
      return { error: "لطفا وارد حساب کاربری خود شوید." };
    }
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است" };
  }
};

export default changeUserName;
