import findExistUserById from "@/utils/findExistUserById";
import verifyToken from "@/utils/verifyToken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { token } = await req.json();

    if (!token)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شودید." },
        { status: 401 }
      );

    const verifiedToken = await verifyToken(token);
    if (!verifiedToken)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شودید." },
        { status: 401 }
      );

    const findUser = await findExistUserById(verifiedToken);
    if (!findUser)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید." },
        { status: 401 }
      );

    return NextResponse.json({ userData: findUser }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "مشکلی در ارتباط با سرور پیش آمده است.",
    });
  }
}
