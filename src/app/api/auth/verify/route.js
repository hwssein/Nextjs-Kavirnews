import findExistUserById from "@/utils/findExistUserById";
import verifyToken from "@/utils/verifyToken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function getUserDataFromToken(token) {
  if (!token) {
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری خود شودید." },
      { status: 401 }
    );
  }

  const verifiedToken = await verifyToken(token);
  if (!verifiedToken) {
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری خود شودید." },
      { status: 401 }
    );
  }

  const user = await findExistUserById(verifiedToken);
  if (!user) {
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری خود شوید." },
      { status: 401 }
    );
  }

  return NextResponse.json({ userData: user }, { status: 200 });
}

export async function POST(req) {
  try {
    const { token } = await req.json();
    return await getUserDataFromToken(token);
  } catch (error) {
    console.error("POST /api/auth/verify error:", error);
    return NextResponse.json(
      { error: "مشکلی در ارتباط با سرور پیش آمده است." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    return await getUserDataFromToken(token);
  } catch (error) {
    console.error("GET /api/auth/verify error:", error);
    return NextResponse.json(
      { error: "مشکلی در ارتباط با سرور پیش آمده است." },
      { status: 500 }
    );
  }
}
