"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const logoutHandler = async () => {
  const cookie = await cookies();
  cookie.delete("token");

  redirect("/");
};

export default logoutHandler;
