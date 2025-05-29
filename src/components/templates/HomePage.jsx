import SearchInput from "../elements/SearchInput";
import HomeCategory from "../module/HomeCategory";
import HomeHeader from "../module/HomeHeader";
import MainSlider from "../module/MainSlider";
import NewsTicker from "../module/NewsTicker";
import RandomNews from "../module/RandomNews";

function HomePage({ allPosts, categoriesPosts }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <HomeHeader />

        <div className="w-full px-2 mt-1">
          <div className="w-full flex items-center justify-start border-b border-stroke mb-2">
            <span className="py-2 font-semibold text-icon">جستجوی خبر</span>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-start md:justify-between lg:gap-10 gap-2 bg-secondary/20 rounded-lg p-1 md:p-2">
            <HomeCategory />

            <SearchInput />
          </div>
        </div>

        <MainSlider categoriesPosts={categoriesPosts} />

        <RandomNews data={allPosts} />

        <NewsTicker data={allPosts} />

        <RandomNews data={allPosts} />
      </div>
    </>
  );
}

export default HomePage;
