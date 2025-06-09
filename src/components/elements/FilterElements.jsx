"use client";

import CategorySection from "../module/CategorySection";
import MobileCategorySection from "./MobileCategorySection";
import SearchInput from "./SearchInput";

function FilterElements() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center md:items-start justify-center gap-3 sm:gap-6 px-2">
      <MobileCategorySection />

      <CategorySection />

      <SearchInput />
    </div>
  );
}

export default FilterElements;
