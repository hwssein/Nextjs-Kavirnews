import getPost from "@/serverAction/getPost";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const BASE_URL = process.env.BASE_URL || "https://kavirnews.vercel.app";
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/signup",
    "/signin",
    "/about-us",
    "/contact-us",
    "/dashboard",
    "/news",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
  }));

  let dynamicEntries = [];
  try {
    const allPosts = await getPost();

    dynamicEntries =
      allPosts?.data?.map((post) => ({
        url: `${BASE_URL}/news/${post.id}`,
        lastModified,
        changeFrequency: "daily",
      })) || [];
  } catch (error) {
    console.error("خطا در دریافت پست‌ها برای sitemap:", error);
  }

  return [...staticEntries, ...dynamicEntries];
}
