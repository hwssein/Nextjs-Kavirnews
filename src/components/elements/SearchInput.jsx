"use client";

import React, { useState } from "react";

import { EllipsisVertical } from "lucide-react";
import { Search } from "lucide-react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="w-full h-12 bg-surface rounded-xl flex items-center justify-start gap-5 px-4 py-3.5">
        <span className="w-5 h-5 flex items-center justify-center">
          <EllipsisVertical />
        </span>

        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="جستجو ... "
          className="w-full text-right "
        />

        <span className="w-5 h-5 flex items-center justify-center">
          <Search className="text-icon" />
        </span>
      </div>
    </>
  );
}

export default SearchInput;
