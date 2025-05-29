"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

function NewsTicker({ data }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setNews(data.map((item) => item.title));
    }
  }, [data]);

  return (
    <div className="w-screen bg-primary py-4 relative right-[calc(50%-50vw)] mt-1">
      <div className="w-full max-w-[1440px] mx-auto overflow-hidden">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          loop={true}
          allowTouchMove={false}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          spaceBetween={30}
          className="!overflow-visible"
        >
          {news.map((item, index) => (
            <SwiperSlide key={index} className="!w-fit flex items-center px-4">
              <div className="flex items-center">
                <strong className="text-base font-normal text-background whitespace-nowrap">
                  {item}
                </strong>
                <div className="w-2 h-2 rounded-full bg-background mx-4" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NewsTicker;
