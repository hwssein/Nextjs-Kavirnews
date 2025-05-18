import Loader from "@/components/elements/Loader";
import DashboardPage from "@/components/templates/DashboardPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function Dashboard() {
  const session = await getSession();
  if (!session || session.error) redirect("/signin");

  return (
    <>
      <Suspense fallback={<Loader />}>
        <DashboardPage />
      </Suspense>
    </>
  );
}

export default Dashboard;
