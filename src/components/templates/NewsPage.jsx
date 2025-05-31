import FilterElements from "../elements/FilterElements";
import RemoveSearchQuery from "../elements/RemoveSearchQuery";
import NewsCard from "../module/NewsCard";

function NewsPage({ data, filter }) {
  return (
    <>
      {Object.keys(filter).length === 0 ? (
        <div className="w-full px-2 mt-2 mb-4">
          <FilterElements />
        </div>
      ) : (
        <div className="w-full flex items-center justify-start gap-2 mb-2 mt-2 px-2">
          <span className="py-2 font-semibold text-icon">
            فیلتر شده بر اساس:
          </span>

          {filter?.categories && (
            <span className="w-fit text-secondary">
              {data[0]?.category.name}
            </span>
          )}
          {filter?.search && (
            <span className="w-fit text-secondary">{filter?.search}</span>
          )}

          <span>/</span>

          <span className="py-2 font-semibold text-icon">تعداد نتایج:</span>

          <span className="w-fit text-secondary">{data?.length}</span>

          <span>/</span>

          <RemoveSearchQuery />
        </div>
      )}

      {data?.length === 0 ? (
        <div className="w-full flex items-center justify-center mt-4 mb-8">
          <span className="px-4 py-2 rounded-lg text-background bg-secondary">
            محتوایی برای نمایش وجود ندارد.
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col items-start justify-start gap-x-4 gap-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {data?.map((item) => (
            <NewsCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default NewsPage;
