import verifyToken from "./verifyToken";
import findExistUserById from "./findExistUserById";
import { cookies } from "next/headers";

const getSession = async () => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    if (!token) {
      return null;
    }

    const userId = await verifyToken(token);

    if (!userId) {
      cookie.delete("token");
      return null;
    }

    const user = await findExistUserById(userId);

    if (!user || user.error) {
      cookie.delete("token");
      return null;
    }

    return user;
  } catch (error) {
    console.log("Error in getSession:", error);
    return { error: "مشکلی در ارتباط با سرور پیش آمده است." };
  }
};

export default getSession;
