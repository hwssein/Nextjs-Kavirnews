"use server";

import getSession from "@/utils/getSession";
import { cookies } from "next/headers";

const deleteUser = async (userId) => {
  try {
    const API_URI = process.env.API_URI;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    const cookie = await cookies();

    const session = await getSession();
    if (!session || !session.id || session.id !== userId)
      return { error: "لطفا وارد حساب کاربری خود شوید." };

    const res = await fetch(
      `${API_URI}/users/${userId}?force=true&reassign=1`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Basic ${Buffer.from(
            `${API_USER}:${API_KEY}`
          ).toString("base64")}`,
        },
      }
    );

    if (!res.ok) return { error: "مشکلی در ارتباط با سرور پیش آ«ده است." };

    cookie.delete("token");

    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آ«ده است." };
  }
};

export default deleteUser;
