"use client";

import React, { useState } from "react";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

function SearchInput() {
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
      <div className="w-full md:w-[60%] lg:w-full flex items-center justify-start gap-2 p-2">
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="جستجو ... "
          className="w-full  h-10 text-right bg-background rounded-lg p-2"
        />

        <button
          aria-label="دکمه جستجو"
          onClick={handleSearch}
          className="w-fit h-10 px-4 py-2 text-nowrap border border-primary bg-primary rounded-lg text-white hover:brightness-90 custom-transition cursor-pointer"
        >
          <Search />
        </button>
      </div>
    </>
  );
}

export default SearchInput;
