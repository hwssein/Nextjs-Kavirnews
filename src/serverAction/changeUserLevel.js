"use server";

import getSession from "@/utils/getSession";
import { revalidatePath } from "next/cache";

const changeUserLevel = async () => {
  try {
    const API_URI = process.env.API_URI;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    const user = await getSession();
    if (!user || user.error)
      return { error: "لطفا وارد حساب کاربری خود شوید." };

    const res = await fetch(`${API_URI}/users/${user?.id}`, {
      method: "PUT",
      body: JSON.stringify({ roles: ["author"] }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Basic ${Buffer.from(`${API_USER}:${API_KEY}`).toString(
          "base64"
        )}`,
      },
    });

    if (res.status !== 200)
      return { error: "مشکلی پیش آمده،دوباره امتحان کنید." };

    revalidatePath("/dashboard");

    return { message: "با موفقیت تغییر کرد." };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است" };
  }
};

export default changeUserLevel;
