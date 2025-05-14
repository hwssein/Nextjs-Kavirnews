"use client";

import React, { useState } from "react";

import { EllipsisVertical } from "lucide-react";
import { Search } from "lucide-react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="w-full bg-surface rounded-lg flex items-center justify-start gap-5 px-4 py-1.5 sm:py-2">
        <EllipsisVertical className="text-icon" />

        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="جستجو ... "
          className="w-full text-right "
        />

        <Search className="text-icon" />
      </div>
    </>
  );
}

export default SearchInput;
