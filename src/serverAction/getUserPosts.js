"use server";

import { cookies } from "next/headers";
import striptags from "striptags";
import getImageSource from "@/utils/getImageSource";
import getPostCategoryName from "@/utils/getPostCategoryName";

const getUserPosts = async (userId) => {
  try {
    if (!userId) return { error: "شناسه کاربر یافت نشد." };

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const res = await fetch(
      `${process.env.API_URI}/posts?author=${userId}&_fields=id,title,content,excerpt,featured_media,categories`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    const posts = await Promise.all(
      data.map(async (post) => {
        const { id, title, excerpt, content, featured_media, categories } =
          post;

        const postData = {
          id,
          title: striptags(title?.rendered || ""),
          summary: striptags(excerpt?.rendered || ""),
          description: striptags(content?.rendered || ""),
        };

        if (featured_media) {
          const image = await getImageSource(featured_media, token);
          if (image && !image.error) {
            postData.image = image;
          }
        }

        if (Array.isArray(categories) && categories[0]) {
          const category = await getPostCategoryName(categories[0], token);
          if (category && !category.error) {
            postData.category = category;
          }
        }

        return postData;
      })
    );

    return { message: "success", data: posts };
  } catch (error) {
    console.log("getUserPosts error:", error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getUserPosts;
