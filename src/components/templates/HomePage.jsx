import FilterElements from "../elements/FilterElements";
import SectionTitle from "../elements/SectionTitle";
import HomeCategory from "../module/HomeCategory";
import HomeHeader from "../module/HomeHeader";
import MainSlider from "../module/MainSlider";
import NewsTicker from "../module/NewsTicker";
import RandomNews from "../module/RandomNews";

function HomePage({ allPosts, categoriesPosts }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <HomeHeader />

        <HomeCategory />

        <MainSlider categoriesPosts={categoriesPosts} />

        <RandomNews data={allPosts} />

        <NewsTicker data={allPosts} />

        <RandomNews data={allPosts} />
      </div>
    </>
  );
}

export default HomePage;
