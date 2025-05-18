import DashboardPage from "@/components/templates/DashboardPage";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";

async function Dashboard() {
  const session = await getSession();
  if (!session || session.error) redirect("/signin");

  return (
    <>
      <DashboardPage />
    </>
  );
}

export default Dashboard;
