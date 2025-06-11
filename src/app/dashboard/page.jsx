import Loader from "@/components/elements/Loader";
import DashboardPage from "@/components/templates/DashboardPage";
import { dashboardMetaData } from "@/config/metadata";
import getUserPost from "@/serverAction/getUserPosts";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata = dashboardMetaData;

async function Dashboard() {
  const session = await getSession();
  if (!session || session.error) redirect("/");

  if (session?.id) {
    const getUserPostData = await getUserPost(session.id);

    return (
      <>
        <Suspense fallback={<Loader />}>
          <DashboardPage
            session={session}
            postData={getUserPostData?.data || []}
          />
        </Suspense>
      </>
    );
  }
}

export default Dashboard;
