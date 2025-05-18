import { cookies } from "next/headers";

const getSession = async () => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    const res = await fetch(`${process.env.BASE_URL}/api/auth/verify`, {
      method: "POST",
      body: JSON.stringify(token ? { token } : false),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.error) return { error: data.error };

    return data.userData;
  } catch (error) {
    console.log(error);
    return { error: "مشکلی در ارتباط با سرور پیش آ«ده است." };
  }
};

export default getSession;
