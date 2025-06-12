"use server";

import getSession from "@/utils/getSession";
import { revalidatePath } from "next/cache";

const changeUserName = async (userName, userId) => {
  try {
    const API_URI = process.env.API_URI;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    const user = await getSession();
    if (!user || user.error)
      return { error: "لطفا وارد حساب کاربری خود شوید." };

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
