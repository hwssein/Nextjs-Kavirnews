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
      <div className="w-full flex flex-col items-start justify-start gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 mt-1">
        {randomData?.map((item) => (
          <NewsCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default RandomNews;
