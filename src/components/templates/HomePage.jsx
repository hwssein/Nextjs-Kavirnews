import HomeCategory from "../module/HomeCategory";
import MainSlider from "../module/MainSlider";

function HomePage({ allPosts, categoriesPosts }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <HomeCategory />

        <MainSlider categoriesPosts={categoriesPosts} />
      </div>
    </>
  );
}

export default HomePage;
