import FilterDetails from "../elements/FilterDetails";
import FilterElements from "../elements/FilterElements";
import NewsCard from "../module/NewsCard";
import ShowError from "../module/ShowError";

function NewsPage({ data, filter }) {
  return (
    <>
      {Object.keys(filter).length === 0 ? (
        <div className="w-full px-2 my-4">
          <FilterElements />
        </div>
      ) : (
        <div className="w-full px-2 my-4">
          <FilterDetails
            category={
              filter.categories && data?.length > 0
                ? data[0]?.category.name
                : null
            }
            search={filter.search ? filter.search : null}
            length={data?.length}
          />
        </div>
      )}
      {data?.length === 0 ? (
        <ShowError text="محتوایی برای نمایش وجود ندارد." />
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
          {data?.map((item) => (
            <NewsCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default NewsPage;
