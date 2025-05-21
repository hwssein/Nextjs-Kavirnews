"use server";

import { cookies } from "next/headers";
import getPostCategoryId from "../utils/getPostCategoryId";
import getUploadedImageUrl from "../utils/getUploadedImageUrl";
import { revalidatePath } from "next/cache";

const uploadPost = async (form) => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    if (!token) return { error: "لطفا وارد حساب کاربری خود شوید." };

    const categoryId = await getPostCategoryId(form.category);
    if (categoryId.error) return { error: categoryId.error };

    const imageUrl = await getUploadedImageUrl(form.image, token);
    if (imageUrl.error) return { error: imageUrl.error };

    if (imageUrl.id) {
      const res = await fetch(`${process.env.API_URI}/posts`, {
        method: "POST",
        body: JSON.stringify({
          status: "publish",
          categories: [categoryId],
          title: form.title,
          content: form.description,
          excerpt: form.summary,
          featured_media: +imageUrl.id,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status !== 201)
        return {
          error: "مشکلی در فرایند ایجاد پست پیش آمده، دوباره امتحان کنید.",
        };

      revalidatePath("/dashboard");

      return { message: "با موفقیت ذخیره شد." };
    } else {
      return {
        error: "مشکلی در فرایند ایجاد پست پیش آمده، دوباره امتحان کنید.",
      };
    }
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default uploadPost;
