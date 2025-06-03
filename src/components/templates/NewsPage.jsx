import FilterDetails from "../elements/FilterDetails";
import FilterElements from "../elements/FilterElements";
import NewsCard from "../module/NewsCard";

function NewsPage({ data, filter }) {
  return (
    <>
      {Object.keys(filter).length === 0 ? (
        <div className="w-full px-2 mt-2 mb-4">
          <FilterElements />
        </div>
      ) : (
        <FilterDetails
          category={filter.categories ? data[0]?.category.name : null}
          search={filter.search ? filter.search : null}
          length={data?.length}
        />
      )}

      {data?.length === 0 ? (
        <div className="w-full flex items-center justify-center mt-4 mb-8">
          <span className="px-4 py-2 rounded-lg text-background bg-secondary">
            محتوایی برای نمایش وجود ندارد.
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col items-start justify-start gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 px-2">
          {data?.map((item) => (
            <NewsCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default NewsPage;
