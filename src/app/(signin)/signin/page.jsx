import Loader from "@/components/elements/Loader";
import SigninPage from "@/components/templates/SigninPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function Signin() {
  const session = await getSession();
  if (session && session.id) redirect("/dashboard");

  return (
    <>
      <Suspense fallback={<Loader />}>
        <SigninPage />
      </Suspense>
    </>
  );
}

export default Signin;
