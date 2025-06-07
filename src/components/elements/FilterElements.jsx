"use client";

import CategorySection from "../module/CategorySection";
import SearchInput from "./SearchInput";

function FilterElements() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 px-2">
      <CategorySection />

      <div className="w-full md:w-[60%] lg:w-full">
        <SearchInput />
      </div>
    </div>
  );
}

export default FilterElements;
