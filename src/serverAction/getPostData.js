"use server";

import { cookies } from "next/headers";
import striptags from "striptags";

const getPostData = async (postId) => {
  try {
    if (!postId) return { error: "مشکلی پیش آمده است، دوباره امتحان کنید." };

    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    const res = await fetch(
      `${process.env.API_URI}/posts/${postId}?&_fields=id,title,content,excerpt,featured_media`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        cache: "force-cache",
      }
    );

    const data = await res.json();

    if (!data?.featured_media) {
      return {
        message: "success",
        data: {
          id: data?.id,
          title: striptags(data?.title.rendered),
          summary: striptags(data?.excerpt.rendered),
          description: striptags(data?.content.rendered),
        },
      };
    }

    const getImageRes = await fetch(
      `${process.env.API_URI}/media/${data?.featured_media}?_fields=source_url`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
        cache: "force-cache",
      }
    );

    const getImageData = await getImageRes.json();

    return {
      message: "success",
      data: {
        id: data?.id,
        title: striptags(data?.title.rendered),
        summary: striptags(data?.excerpt.rendered),
        description: striptags(data?.content.rendered),
        image: getImageData?.source_url,
      },
    };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getPostData;
