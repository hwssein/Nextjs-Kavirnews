import { verify } from "jsonwebtoken";

const verifyToken = async (token) => {
  try {
    const SECRET_KEY = process.env.SECRET_KEY;
    const result = verify(token, SECRET_KEY);

    return result.data.user.id;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default verifyToken;
