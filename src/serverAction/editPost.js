"use server";

import getPostCategoryId from "@/utils/getPostCategoryId";
import getUploadedImageUrl from "@/utils/getUploadedImageUrl";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const editPost = async (prevState, formData) => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    if (!token) return { error: "لطفا وارد حساب کاربری خود شوید." };

    const form = Object.fromEntries(formData.entries());

    const { title, category, summary, description, id, oldImage, image } = form;

    if (!title || !category || !summary || !description || !id) {
      return { error: "لطفاً تمام فیلدها را پر کنید." };
    }

    let imageUrl = {};
    if (image && typeof image === "object" && image.size > 0) {
      imageUrl = await getUploadedImageUrl(image, token);
      if (imageUrl.error) return { error: imageUrl.error };
    }

    const categoryId = await getPostCategoryId(category);
    if (categoryId.error) return { error: categoryId.error };

    const updatedPost = {
      title,
      excerpt: summary,
      content: description,
      categories: [categoryId],
      status: "publish",
    };

    if (imageUrl.id) {
      updatedPost.featured_media = +imageUrl.id;
    }

    const res = await fetch(`${process.env.API_URI}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedPost),
    });

    if (!res.ok) {
      return {
        error: "مشکلی در فرایند ویرایش پست پیش آمده، دوباره امتحان کنید.",
      };
    }

    revalidatePath(`/dashboard/edit/${id}`);
    revalidatePath(`/news/${id}`);
    revalidatePath("/dashboard");
    return { message: "پست با موفقیت ویرایش شد." };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default editPost;
