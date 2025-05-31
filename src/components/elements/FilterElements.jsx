"use client";

import HomeCategory from "../module/HomeCategory";
import SearchInput from "./SearchInput";

function FilterElements() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-start md:justify-between gap-2 lg:gap-14 bg-secondary/20 rounded-lg p-1 md:p-2">
        <HomeCategory />

        <div className="w-full md:w-[60%] lg:w-full">
          <SearchInput />
        </div>
      </div>
    </>
  );
}

export default FilterElements;
