const getPostCategoryId = async (category) => {
  try {
    if (!category) return { error: "لطفا دسته بندی را انتخاب کنید." };

    const res = await fetch(
      `${process.env.API_URI}/categories?slug=${category}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    return data[0].id;
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getPostCategoryId;
