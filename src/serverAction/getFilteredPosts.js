"use server";

import getImageSource from "@/utils/getImageSource";
import getPostCategoryName from "@/utils/getPostCategoryName";
import striptags from "striptags";

const getFilteredPosts = async (category, search) => {
  if (!category && !search)
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };

  try {
    let categoryId = null;

    if (category) {
      const categoryIdRes = await fetch(
        `${process.env.API_URI}/categories?slug=${category}&_fields=id`,
        {
          cache: "force-cache",
        }
      );

      if (!categoryIdRes.ok)
        return { error: "مشکلی در ارتباط با سرور پیش آمده است." };

      const categoryIdData = await categoryIdRes.json();
      if (!categoryIdData || categoryIdData.length === 0)
        return { error: "دسته‌بندی مورد نظر پیدا نشد." };

      categoryId = categoryIdData[0].id;
    }

    const searchParams = new URLSearchParams();

    if (categoryId) searchParams.append("categories", categoryId);
    if (search) searchParams.append("search", search);

    searchParams.append("_embed", "");
    searchParams.append(
      "_fields",
      "id,title,content,excerpt,categories,featured_media,date"
    );

    const postRes = await fetch(
      `${process.env.API_URI}/posts?${searchParams.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!postRes.ok) return { error: "مشکلی در ارتباط با سرور پیش آمده است." };

    const postData = await postRes.json();

    const posts = await Promise.all(
      postData.map(async (item) => {
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

export default getFilteredPosts;
