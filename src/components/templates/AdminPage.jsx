import SectionTitle from "../elements/SectionTitle";
import UserPostCardButton from "../elements/UserPostCardButton";
import NewsCard from "../module/NewsCard";

function AdminPage({ data }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start px-2">
        <SectionTitle text={"صفحه ادمین"} />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col items-center justify-start relative"
            >
              <NewsCard data={item} />

              <span className="w-fit absolute bottom-4 left-4">
                <UserPostCardButton postId={item?.id} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
