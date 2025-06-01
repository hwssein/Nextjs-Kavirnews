import DeletePostBtn from "../elements/DeletePostBtn";
import SectionTitle from "../elements/SectionTitle";
import NewsCard from "../module/NewsCard";

function AdminPage({ data }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-4 px-2">
        <SectionTitle text={"صفحه ادمین"} />

        <div className="w-full flex flex-col items-start justify-start gap-x-4 gap-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {data?.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col items-center justify-start relative"
            >
              <NewsCard data={item} />

              <span className="w-fit absolute bottom-4 left-4">
                <DeletePostBtn postId={item?.id} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
