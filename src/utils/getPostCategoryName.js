const getPostCategoryName = async (categoryId, token) => {
  try {
    const categoryRes = await fetch(
      `${process.env.API_URI}/categories/${categoryId}?_fields=id,name,slug`,
      {
        headers: {
          authorization: token ? `Bearer ${token}` : null,
        },
        cache: "force-cache",
      }
    );
    const categoryData = await categoryRes.json();

    return {
      id: categoryData.id,
      name: categoryData.name,
      slug: categoryData.slug,
    };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getPostCategoryName;
