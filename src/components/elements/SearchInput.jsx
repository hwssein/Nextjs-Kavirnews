"use client";

import { useState } from "react";

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
      <div className="w-full flex items-center justify-start gap-3">
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="جستجو"
          className="w-full h-10 text-sm text-icon bg-white placeholder:text-icon p-2 border border-stroke rounded-md focus:border-primary"
        />

        <button
          aria-label="دکمه جستجو"
          onClick={handleSearch}
          className="w-fit px-4 sm:px-6 py-2 text-nowrap bg-primary rounded-md hover:brightness-90 custom-transition cursor-pointer"
        >
          <Search className="w-6 h-6 text-white" />
        </button>
      </div>
    </>
  );
}

export default SearchInput;
