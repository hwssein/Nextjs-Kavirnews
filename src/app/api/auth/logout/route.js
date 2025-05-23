import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookie = await cookies();
    cookie.delete("token");

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در ارتباط با سرور پیش آمده است" },
      { status: 500 }
    );
  }
}
