import Link from "next/link";
import HomeCategory from "../module/HomeCategory";
import HomeHeader from "../module/HomeHeader";
import MainSlider from "../module/MainSlider";
import NewsTicker from "../module/NewsTicker";
import RandomNews from "../module/RandomNews";
import HomeGallery from "../module/HomeGallery";
import PopularNews from "../module/PopularNews";

import { ArrowLeft } from "lucide-react";

function HomePage({ allPosts, categoriesPosts }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-8">
        <HomeHeader />

        <HomeCategory />

        <MainSlider categoriesPosts={categoriesPosts} allPosts={allPosts} />

        <RandomNews data={allPosts} />

        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6 px-2">
          <PopularNews data={allPosts} />

          <HomeGallery data={allPosts} />
        </div>

        <NewsTicker data={allPosts} />

        <RandomNews data={allPosts} />

        <div className="w-full flex items-center justify-center my-4">
          <Link
            href="/news"
            className="w-full flex items-center justify-center"
          >
            <span className="w-fit p-2 font-bold text-lg text-primary flex items-center justify-center gap-2">
              ادامه اخبار <ArrowLeft className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
