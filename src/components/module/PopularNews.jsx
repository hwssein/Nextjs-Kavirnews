"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SectionTitle from "../elements/SectionTitle";

function PopularNews({ data }) {
  const [topTitle, setTopTitle] = useState([]);

  useEffect(() => {
    const newData = [...data]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10)
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
        };
      });

    setTopTitle(newData);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center justify-start my-4">
          <span className="font-bold text-icon">پربازدید‌های روز</span>
        </div>

        <div className="w-full h-[325px] grid grid-rows-10 border border-stroke p-4.5 rounded-md overflow-hidden">
          {topTitle?.map((item) => (
            <Link
              key={item?.id}
              href={`/news/${item?.id}`}
              target="_blank"
              className="w-full h-full overflow-hidden flex items-center justify-start gap-2 hover:text-primary custom-transition cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary custom-transition"></span>
              <span className="w-full truncate">{item?.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularNews;
