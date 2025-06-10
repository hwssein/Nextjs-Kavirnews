"use client";

import { useEffect, useState } from "react";
import MiniNewsCard from "./MiniNewsCard";

function SliderHotNews({ allPosts: data }) {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const shuffledData = [...data].sort(() => 0.5 - Math.random()).slice(0, 2);
    setRandomData(shuffledData);
  }, []);

  return (
    <>
      <div className="hidden lg:flex flex-col items-start justify-center w-full gap-6 lg:h-[500px] p-0.5">
        {randomData.map((item) => (
          <MiniNewsCard key={item?.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default SliderHotNews;
