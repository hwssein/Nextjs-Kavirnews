"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const deletePost = async (postId) => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    if (!token) return { error: "لطفا وارد حساب کاربری خود شوید." };

    const res = await fetch(`${process.env.API_URI}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (data.status !== "trash")
      return { error: "مشکلی در ارتباط با سرور پیش آمده است." };

    revalidatePath("/dashboard");
    return { message: "با موفقیت حذف شد" };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default deletePost;
