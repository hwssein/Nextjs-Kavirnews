import FilterElements from "../elements/FilterElements";
import SectionTitle from "../elements/SectionTitle";
import HomeHeader from "../module/HomeHeader";
import MainSlider from "../module/MainSlider";
import NewsTicker from "../module/NewsTicker";
import RandomNews from "../module/RandomNews";

function HomePage({ allPosts, categoriesPosts }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <HomeHeader />

        <div className="w-full px-2">
          <SectionTitle text={"جستجو‌ی خبر"} />

          <FilterElements />
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
