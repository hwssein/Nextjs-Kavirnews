"use client";

import dynamic from "next/dynamic";

import CategorySection from "../module/CategorySection";
import SearchInput from "./SearchInput";

const MobileCategorySection = dynamic(
  () => import("@/components/elements/MobileCategorySection"),
  { ssr: false }
);

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
