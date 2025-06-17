"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

function NewsTicker({ data }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const dataObj = data?.map((item) => ({
        id: item.id,
        title: item.title,
      }));
      setNews(dataObj);
    }
  }, [data]);

  return (
    <div className="w-screen bg-primary py-6 relative right-[calc(50%-50vw)]">
      <div className="w-full max-w-[1420px] mx-auto overflow-hidden">
        <Swiper
          className="marquee-swiper"
          modules={[Autoplay]}
          slidesPerView="auto"
          loop={news.length > 4}
          allowTouchMove={false}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          observer={true}
          observeParents={true}
        >
          {news?.map((item) => (
            <SwiperSlide key={item.id} className="!w-fit !ml-0">
              <Link
                href={`/news/${item?.id}`}
                target="_blank"
                className="flex items-center"
              >
                <strong className="text-base font-normal text-white whitespace-nowrap bg-primary">
                  {item?.title}
                </strong>
                <div className="w-2 h-2 rounded-full bg-white mx-8" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NewsTicker;
