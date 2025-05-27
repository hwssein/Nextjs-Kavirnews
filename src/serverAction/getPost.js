"use server";

const getPost = async () => {
  try {
    const res = await fetch(
      `${process.env.API_URI}/posts?_embed&_fields=id,title,content,excerpt,categories,featured_media,date,_embedded.author`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    if (!res.ok) return { error: "مشکلی در ارتباط با سرور پیش آمده است." };

    return data;
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است" };
  }
};

export default getPost;
