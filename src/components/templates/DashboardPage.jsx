import DashboardUserForm from "../module/DashboardUserForm";
import DashboardUserProfileCard from "../module/DashboardUserProfileCard";
import UserPostCard from "../module/UserPostCard";

function DashboardPage({ session, postData }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-4 p-2">
        <DashboardUserProfileCard session={session} />

        <DashboardUserForm />

        <div className="w-full flex flex-col items-start justify-start gap-4 mt-4">
          <div className="w-full flex items-center justify-start border-b border-stroke">
            <span className="py-2 font-semibold text-icon">پست‌های من</span>
          </div>

          {!postData || postData.error || postData.length === 0 ? (
            <div className="w-full flex items-center justify-center gap-2">
              <span className="px-4 py-2 rounded-lg text-background bg-secondary">
                هنوز محتوایی اضافه نکرده اید.
              </span>
            </div>
          ) : (
            <div className="w-full flex flex-col items-start justify-start gap-2">
              {postData.map((item) => (
                <UserPostCard
                  key={item.id}
                  title={item.title}
                  summary={item.summary}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
