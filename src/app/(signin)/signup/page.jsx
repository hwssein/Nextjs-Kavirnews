import SignupPage from "@/components/templates/SignupPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";

async function Signup() {
  const session = await getSession();
  if (session && session.id) redirect("/dashboard");

  return (
    <>
      <SignupPage />
    </>
  );
}

export default Signup;
