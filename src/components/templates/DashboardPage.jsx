import DashboardUserForm from "../module/DashboardUserForm";
import DashboardUserProfileCard from "../module/DashboardUserProfileCard";

function DashboardPage({ session }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-2 p-2">
        <DashboardUserProfileCard session={session} />

        <DashboardUserForm />
      </div>
    </>
  );
}

export default DashboardPage;
