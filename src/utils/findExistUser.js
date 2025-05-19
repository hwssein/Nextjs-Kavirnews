"use server";

const findExistUser = async (email) => {
  try {
    const API_URI = process.env.API_URI;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    const res = await fetch(`${API_URI}/users?search=${email}`, {
      headers: {
        authorization: `Basic ${Buffer.from(`${API_USER}:${API_KEY}`).toString(
          "base64"
        )}`,
      },
    });
    const data = await res.json();

    if (data.length === 0 || !data) return false;

    return {
      id: data[0].id,
      name: data[0].name,
      role: data[0].roles[0],
      email: data[0].email,
    };
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آمد" };
  }
};

export default findExistUser;
