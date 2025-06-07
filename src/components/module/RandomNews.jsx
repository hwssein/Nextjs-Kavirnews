"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function RandomNews({ data }) {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const shuffledData = [...data].sort(() => 0.5 - Math.random()).slice(0, 4);
    setRandomData(shuffledData);
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        {randomData?.map((item) => (
          <NewsCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default RandomNews;
