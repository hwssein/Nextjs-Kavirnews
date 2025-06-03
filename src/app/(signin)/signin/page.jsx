import Loader from "@/components/elements/Loader";
import SigninPage from "@/components/templates/SigninPage";
import { signinMetaData } from "@/config/metadata";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata = signinMetaData;

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
