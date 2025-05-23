import Loader from "@/components/elements/Loader";
import SignupPage from "@/components/templates/SignupPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function Signup() {
  const session = await getSession();
  if (session && session.id) redirect("/dashboard");

  return (
    <>
      <Suspense fallback={<Loader />}>
        <SignupPage />
      </Suspense>
    </>
  );
}

export default Signup;
