import SigninPage from "@/components/templates/SigninPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";

async function Signin() {
  const session = await getSession();
  if (session && session.id) redirect("/dashboard");

  return (
    <>
      <SigninPage />
    </>
  );
}

export default Signin;
