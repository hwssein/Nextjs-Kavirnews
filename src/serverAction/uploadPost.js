"use server";

import { cookies } from "next/headers";
import getPostCategoryId from "../utils/getPostCategoryId";
import getUploadedImageUrl from "../utils/getUploadedImageUrl";
import { revalidatePath } from "next/cache";
import getSession from "@/utils/getSession";

const uploadPost = async (prevState, formData) => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    if (!token) return { error: "لطفا وارد حساب کاربری خود شوید." };

    const session = await getSession();

    if (session?.role !== "administrator" && session?.role !== "author")
      return { error: "لطفا سطح کاربری خود را ارتقا دهید." };

    const form = Object.fromEntries(formData.entries());

    if (!form.title || !form.category || !form.summary || !form.description) {
      return { error: "لطفاً تمام فیلدها را پر کنید." };
    }

    let imageUrl = {};
    if (form.image && form.image.size > 0) {
      imageUrl = await getUploadedImageUrl(form.image, token);
      if (imageUrl.error) return { error: imageUrl.error };
    }

    const categoryId = await getPostCategoryId(form.category);
    if (categoryId.error) return { error: categoryId.error };

    const res = await fetch(`${process.env.API_URI}/posts`, {
      method: "POST",
      body: JSON.stringify({
        status: "publish",
        categories: [categoryId],
        title: form.title,
        content: form.description,
        excerpt: form.summary,
        featured_media: imageUrl.id ? +imageUrl.id : undefined,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return {
        error: "مشکلی در فرایند ایجاد پست پیش آمده، دوباره امتحان کنید.",
      };
    }

    revalidatePath("/dashboard");
    return { message: "با موفقیت ذخیره شد." };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default uploadPost;
