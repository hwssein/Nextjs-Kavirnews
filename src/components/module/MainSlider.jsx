"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";

import SectionTitle from "../elements/SectionTitle";
import SliderCard from "./SliderCard";
import SliderHotNews from "./SliderHotNews";

function MainSlider({ categoriesPosts, allPosts }) {
  return (
    <>
      <div className="w-full px-2">
        <SectionTitle text={"جدیدترین اخبار"} />

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          modules={[Autoplay, Mousewheel]}
          className="w-full px-2"
        >
          {categoriesPosts.map((item, index) => (
            <SwiperSlide key={item?.id}>
              <div className="w-full flex items-start justify-between gap-6">
                <SliderCard post={item} isPriority={index === 0} />

                <SliderHotNews allPosts={allPosts} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default MainSlider;
