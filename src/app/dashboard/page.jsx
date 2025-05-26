import Loader from "@/components/elements/Loader";
import DashboardPage from "@/components/templates/DashboardPage";
import getUserPost from "@/serverAction/getUserPosts";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function Dashboard() {
  const session = await getSession();
  if (!session || session.error) redirect("/signin");

  const getUserPostData = await getUserPost(session.id);

  if (session.id) {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <DashboardPage session={session} postData={getUserPostData?.data} />
        </Suspense>
      </>
    );
  }
}

export default Dashboard;
