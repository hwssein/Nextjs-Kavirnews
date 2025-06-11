"use client";

import React, { useState } from "react";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

function HomeSearchInput() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.stopPropagation();

    if (!searchValue) return;

    const valueRegex = /[<>{}[\]()'"`;$]/g;

    const safeValue = searchValue.replace(valueRegex, "");

    router.push(`/news?search=${safeValue}`);
  };

  return (
    <>
      <div className="w-full p-2 mt-2 max-w-md flex items-center justify-between gap-3 border-b border-b-stroke focus-within:border-b-primary custom-transition">
        <div className="w-full flex items-center gap-3">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />

          <input
            type="text"
            value={searchValue || ""}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="جستجو در بین اخبار ..."
            className="w-[calc(100%-20px)] text-sm text-icon bg-transparent outline-none placeholder:text-icon p-2 sm:py-2.5"
          />
        </div>

        {searchValue && (
          <span
            onClick={handleSearch}
            className="w-fit bg-primary px-3 sm:px-4 py-1.5 sm:py-2 text-background rounded-md cursor-pointer hover:brightness-90 custom-transition"
          >
            جستجو
          </span>
        )}
      </div>
    </>
  );
}

export default HomeSearchInput;
