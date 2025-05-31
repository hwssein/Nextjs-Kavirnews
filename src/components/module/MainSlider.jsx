"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../elements/PrimaryButton";

function MainSlider({ categoriesPosts }) {
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full flex items-center justify-start border-b border-stroke mt-1 mb-2">
          <span className="py-2 font-semibold text-icon">جدید‌ترین اخبار</span>
        </div>

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
            <SwiperSlide key={item.id} className="w-full">
              <div className="w-full h-[560px] md:h-[450px] xl:h-[400px] flex flex-col items-start justify-start gap-1 md:gap-2 bg-surface p-2 md:p-4 rounded-lg overflow-hidden">
                <div className="w-full xl:hidden flex items-center justify-between text-sm mb-2 bg-background rounded-md p-2">
                  <div className="flex items-center gap-2 text-icon">
                    <span>دسته بندی:</span>
                    <span className="text-secondary">{item.category.name}</span>
                  </div>

                  <div className="flex items-center gap-2 text-icon">
                    <span>تاریخ انتشار:</span>
                    <span className="text-secondary">
                      {new Date(item.date).toLocaleDateString(
                        "fa-IR-u-ca-persian",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>

                <div className="w-full flex-1 flex flex-col md:flex-row items-start justify-start gap-2 md:gap-7">
                  <div className="w-full xl:max-w-[38%] md:flex-1 max-h-[320px] md:max-h-full md:h-full aspect-[4/3] md:aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      priority={index === 0}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="w-full xl:max-w-[63%] flex-1 flex flex-col items-start justify-start md:justify-between md:h-full gap-2">
                    <div className="w-full flex-1 flex flex-col items-start justify-start gap-2 overflow-hidden">
                      <h2 className="w-full py-2 font-medium text-base">
                        {item.title}
                      </h2>

                      <div className="w-full flx-1 flex items-start justify-start">
                        <h3 className="w-full text-icon line-clamp-3 md:line-clamp-none leading-relaxed">
                          {item.summary}
                        </h3>
                      </div>

                      <div className="hidden w-full xl:flex flex-col items-start justify-start gap-4 mt-4">
                        <div className="w-fit flex items-center justify-start gap-2 bg-background px-4 py-2 rounded-lg text-icon text-sm">
                          <span>دسته بندی:</span>
                          <span className="text-secondary">
                            {item.category.name}
                          </span>
                        </div>

                        <div className="w-fit flex items-center justify-start gap-2 bg-background px-4 py-2 rounded-lg text-icon text-sm">
                          <span>تاریخ انتشار:</span>
                          <span className="text-secondary">
                            {new Date(item.date).toLocaleDateString(
                              "fa-IR-u-ca-persian",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-end">
                      <Link href={`/news/${item.id}`}>
                        <PrimaryButton text="ادامه مطلب" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default MainSlider;
