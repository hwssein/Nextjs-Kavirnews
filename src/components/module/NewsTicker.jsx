"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function NewsTicker({ data }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const filterTitle = data.map((item) => item.title);

    setNews(filterTitle);
  }, []);

  return (
    <>
      <div className="w-full relative">
        <div className="w-screen flex items-center justify-start bg-primary mt-1 absolute top-0 right-[calc(50%-50vw)]">
          <div className="w-full p-4 max-w-[1440px] m-auto flex items-center justify-start">
            <Swiper className="w-full">
              {news.map((item) => (
                <SwiperSlide className="w-fit">
                  <strong className="w-fit text-base font-normal text-background">
                    *{item}
                  </strong>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsTicker;
