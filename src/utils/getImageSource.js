const getImageSource = async (imageId, token) => {
  try {
    const getImageRes = await fetch(
      `${process.env.API_URI}/media/${imageId}?_fields=source_url`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
        cache: "force-cache",
      }
    );

    const getImageData = await getImageRes.json();
    return getImageData?.source_url || null;
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getImageSource;
