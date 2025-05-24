"use server";

import { cookies } from "next/headers";
import striptags from "striptags";

const getUserPost = async (userId) => {
  try {
    if (!userId) return { error: "userId not found" };

    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    const res = await fetch(
      `${process.env.API_URI}/posts?author=${userId}&_fields=id,title,content,excerpt,featured_media`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    const data = await res.json();

    const postData = await Promise.all(
      data?.map(async (item) => {
        if (!item?.featured_media) {
          return {
            id: item?.id,
            title: striptags(item?.title.rendered),
            summary: striptags(item?.excerpt.rendered),
            description: striptags(item?.content.rendered),
          };
        }

        const getImageRes = await fetch(
          `${process.env.API_URI}/media/${item.featured_media}?_fields=source_url`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
            cache: "no-store",
          }
        );

        const getImageData = await getImageRes.json();

        return {
          id: item?.id,
          title: striptags(item?.title.rendered),
          summary: striptags(item?.excerpt.rendered),
          description: striptags(item?.content.rendered),
          image: getImageData?.source_url,
        };
      })
    );

    return postData;
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getUserPost;
