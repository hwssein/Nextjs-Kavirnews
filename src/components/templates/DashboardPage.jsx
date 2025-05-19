import DashboardUserProfileCard from "../module/DashboardUserProfileCard";

function DashboardPage({ session }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-2 p-2">
        <DashboardUserProfileCard session={session} />
      </div>
    </>
  );
}

export default DashboardPage;
