"use server";

import getImageSource from "@/utils/getImageSource";
import getPostCategoryName from "@/utils/getPostCategoryName";
import { cookies } from "next/headers";
import striptags from "striptags";

const getPostData = async (postId) => {
  try {
    if (!postId) return { error: "مشکلی پیش آمده است، دوباره امتحان کنید." };

    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    const res = await fetch(
      `${process.env.API_URI}/posts/${postId}?_embed&_fields=id,title,content,excerpt,categories,featured_media,date,_embedded.author`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: token ? `Bearer ${token}` : null,
        },
        cache: "default",
      }
    );

    const data = await res.json();
    if (!data?.id) return { error: "پست مورد نظر پیدا نشد." };

    let category = null;
    if (data?.categories[0]) {
      category = await getPostCategoryName(data?.categories[0], token);
      if (!category || category.error) category = null;
    }

    let image = null;
    if (data?.featured_media) {
      image = await getImageSource(data?.featured_media, token);
      if (!image || image.error) image = null;
    }

    return {
      message: "success",
      data: {
        id: data.id,
        title: striptags(data.title.rendered),
        summary: striptags(data.excerpt.rendered),
        description: striptags(data.content.rendered),
        image,
        category,
        date: data.date,
        author: {
          name: data._embedded.author[0].name,
          id: data._embedded.author[0].id,
        },
      },
    };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getPostData;
