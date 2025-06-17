import Image from "next/image";
import React from "react";

function HomeHeader() {
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full h-[320px] relative">
          <div className="w-full h-full relative aspect-video rounded-md">
            <Image
              src="/images/header.jpg"
              alt="header"
              fill
              sizes="1440px"
              priority={true}
              className="w-full h-full object-cover rounded-md"
            ></Image>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-80%"></div>

          <div className="w-full h-full absolute top-0 right-0 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-4 px-2">
            <span className="w-fit rounded-md text-center font-medium text-lg text-icon bg-background/50 p-2">
              در دنیایی که هر ثانیه‌اش پر از اتفاق است
            </span>

            <span className="w-fit rounded-md text-center text-icon bg-background/40 p-2">
              ما اینجاییم برای خبرهای واقعی، بی‌وقفه و بی‌سانسور. اینجا جاییه که
              خبر، زنده‌ست.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
