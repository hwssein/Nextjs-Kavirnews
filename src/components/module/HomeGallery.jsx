"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionTitle from "../elements/SectionTitle";
import Link from "next/link";

function HomeGallery({ data }) {
  const [topImage, setTopImage] = useState([]);

  useEffect(() => {
    const newData = [...data]
      .filter((item) => item.image)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 15)
      .map((item) => {
        return {
          id: item.id,
          image: item.image,
          title: item.title,
        };
      });

    setTopImage(newData);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col">
        <SectionTitle text="گالری تصاویر" />
        <div className="w-full h-[325px] border border-stroke p-4.5 rounded-md">
          <div className="w-full h-full overflow-hidden grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 rounded-md">
            {topImage.map((item) => (
              <Link
                key={item?.id}
                href={`/news/${item?.id}`}
                target="_blank"
                className="w-full min-w-24 min-h-24 relative overflow-hidden cursor-pointer group"
              >
                <Image
                  src={item?.image}
                  width={100}
                  height={100}
                  alt={`kavirnews gallery - image ${item?.id}`}
                  className="w-full h-full object-cover"
                ></Image>

                <div className="w-full h-0 group-hover:h-full opacity-0 group-hover:opacity-100 absolute bottom-0 right-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent flex flex-col items-start justify-end p-2 custom-image-transition">
                  <span className="w-full line-clamp-2 text-white text-sm">
                    {item?.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeGallery;
