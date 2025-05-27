"use server";

import getImageSource from "@/utils/getImageSource";
import getPostCategoryName from "@/utils/getPostCategoryName";
import striptags from "striptags";

const getCategoriesLatestPosts = async () => {
  try {
    const categoriesRes = await fetch(`${process.env.API_URI}/categories`, {
      cache: "force-cache",
    });
    const categoriesData = await categoriesRes.json();

    const categoryPost = await Promise.all(
      categoriesData.map(async (item) => {
        const res = await fetch(
          `${process.env.API_URI}/posts?categories=${item.id}&_embed&per_page=1&orderby=date&order=desc&_fields=id,title,content,excerpt,categories,featured_media,date`,
          {
            cache: "no-store",
          }
        );
        const post = await res.json();
        return post?.[0] || null;
      })
    );

    const posts = await Promise.all(
      categoryPost
        .filter((item) => item !== null)
        .map(async (item) => {
          const {
            id,
            title,
            excerpt,
            content,
            featured_media,
            categories,
            date,
          } = item;

          const postData = {
            id,
            title: striptags(title?.rendered || ""),
            summary: striptags(excerpt?.rendered || ""),
            description: striptags(content?.rendered || ""),
            date,
          };

          if (featured_media) {
            const image = await getImageSource(featured_media, "");
            if (image && !image.error) {
              postData.image = image;
            }
          }

          if (Array.isArray(categories) && categories[0]) {
            const category = await getPostCategoryName(categories[0], "");
            if (category && !category.error) {
              postData.category = category;
            }
          }

          return postData;
        })
    );

    return { message: "success", data: posts };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getCategoriesLatestPosts;
