"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Link from "next/link";

function NewsTicker({ data }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const dataObj = data?.map((item) => {
        return {
          id: item.id,
          title: item.title,
        };
      });

      setNews(dataObj);
    }
  }, [data]);

  return (
    <div className="w-screen bg-primary py-6 relative right-[calc(50%-50vw)] mt-1">
      <div className="w-full max-w-[1400px] mx-auto overflow-hidden">
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
          {news.map((item) => (
            <SwiperSlide
              key={item.id}
              className="!w-fit flex items-center px-2"
            >
              <Link href={`/news/${item?.id}`} className="flex items-center">
                <strong className="text-base font-normal text-background whitespace-nowrap">
                  {item?.title}
                </strong>
                <div className="w-2 h-2 rounded-full bg-background mx-4" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NewsTicker;
