const getUploadedImageUrl = async (file, token) => {
  try {
    if (!file) return { error: "لطفا تصویر مورد نظر را انتخاب کنید." };

    const fileFormData = new FormData();
    fileFormData.append("file", file, file.name);

    const res = await fetch(`${process.env.API_URI}/media`, {
      method: "POST",
      body: fileFormData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data?.data?.status === 401)
      return { error: "برای ایجاد پست سطح خود را ارتقا دهید." };

    return {
      id: data.id,
      url: data.source_url,
    };
  } catch (error) {
    console.error(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getUploadedImageUrl;
