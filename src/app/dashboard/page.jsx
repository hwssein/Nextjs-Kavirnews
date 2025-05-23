import Loader from "@/components/elements/Loader";
import DashboardPage from "@/components/templates/DashboardPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function Dashboard() {
  const session = await getSession();
  if (!session || session.error) redirect("/signin");

  if (session.id) {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <DashboardPage session={session} />
        </Suspense>
      </>
    );
  }
}

export default Dashboard;
