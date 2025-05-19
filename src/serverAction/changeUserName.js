"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const changeUserName = async (userName, userId) => {
  try {
    const API_URI = process.env.API_URI;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    const verifyUserRes = await fetch(
      `${process.env.BASE_URL}/api/auth/verify`,
      {
        method: "POST",
        body: JSON.stringify(token ? { token } : false),
        headers: { "Content-Type": "application/json" },
      }
    );

    const verifyUserData = await verifyUserRes.json();
    if (!verifyUserData || verifyUserData.error)
      return { error: "لطفا وارد حساب کاربری خود شوید." };

    if (+verifyUserData.userData.id === +userId) {
      const res = await fetch(`${API_URI}/users/${userId}`, {
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
