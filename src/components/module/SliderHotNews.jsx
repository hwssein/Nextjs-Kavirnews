"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function SliderHotNews({ allPosts: data }) {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const shuffledData = [...data].sort(() => 0.5 - Math.random()).slice(0, 3);
    setRandomData(shuffledData);
  }, []);

  return (
    <>
      <div className="hidden lg:flex flex-col items-start justify-between w-full h-[450px] md:h-[500px] p-0.5">
        {randomData.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item?.id}`}
            target="_blank"
            className="w-full bg-white flex items-center gap-4 group shadow p-4 rounded-md"
          >
            <div className="w-[200px] aspect-video overflow-hidden relative rounded-md">
              <Image
                src={item?.image}
                fill
                sizes="200px"
                alt={item?.title}
                className="object-cover w-full h-full group-hover:scale-105 custom-image-transition"
              ></Image>
            </div>

            <div className="w-[calc(100%-200px)] flex flex-col gap-4">
              <span className="w-full font-bold text-lg">{item?.title}</span>
              <span className="w-full text-sm line-clamp-2">
                {item?.summary}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SliderHotNews;
