"use server";

const findExistUserById = async (id) => {
  if (!id) {
    return false;
  }

  try {
    const API_URI = process.env.API_URI;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    const res = await fetch(`${API_URI}/users/${id}`, {
      headers: {
        authorization: `Basic ${Buffer.from(`${API_USER}:${API_KEY}`).toString(
          "base64"
        )}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return false;
    }

    const data = await res.json();

    if (!data || !data.id) {
      return false;
    }

    return {
      id: data.id,
      name: data.name,
      role: data.roles?.[0] || "subscriber",
      email: data.email,
    };
  } catch (error) {
    console.error("Error in findExistUserById:", error);
    return { error: "مشکلی در ارتباط با سرور پیش آمد" };
  }
};

export default findExistUserById;
