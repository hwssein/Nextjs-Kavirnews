export default function robots() {
  const BASE_URL = process.env.BASE_URL || "https://kavirnews.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/"],
    },

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
