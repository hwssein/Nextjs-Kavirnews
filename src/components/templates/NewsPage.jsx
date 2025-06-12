import FilterDetails from "../elements/FilterDetails";
import FilterElements from "../elements/FilterElements";
import SectionTitle from "../elements/SectionTitle";
import NewsCard from "../module/NewsCard";
import ShowError from "../module/ShowError";

function NewsPage({ data, filter }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-4 px-2">
        {Object.keys(filter).length === 0 ? (
          <FilterElements />
        ) : (
          <FilterDetails
            category={
              filter.categories && data?.length > 0
                ? data[0]?.category.name
                : null
            }
            search={filter.search ? filter.search : null}
            length={data?.length}
          />
        )}

        <SectionTitle text="آخرین خبر" />

        {data?.length === 0 ? (
          <ShowError text="محتوایی برای نمایش وجود ندارد." />
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.map((item) => (
              <NewsCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default NewsPage;
