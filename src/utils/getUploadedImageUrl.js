const getUploadedImageUrl = async (file, token) => {
  try {
    if (!file) return { error: "لطفا تصویر مورد نظر رو انتخاب کنید." };

    const fileFormData = new FormData();
    fileFormData.append("file", file);

    const res = await fetch(`${process.env.API_URI}/media`, {
      method: "POST",
      body: fileFormData,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data?.data?.status === 401)
      return { error: "برای ایجاد پست سطح خود را ارتقا دهید." };

    return { id: data.id, url: data.source_url };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getUploadedImageUrl;
