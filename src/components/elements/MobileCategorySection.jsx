"use client";

import categoriesConstant from "@/constant/categories";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function MobileCategorySection() {
  const router = useRouter();

  const [category, setCategory] = useState("");

  const handleCategory = (event) => {
    if (!event.target.value && !category) return;

    router.push(category);
  };

  return (
    <>
      <div className="w-full h-10 flex md:hidden items-center justify-start gap-3">
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full h-full border border-stroke rounded-md px-2 bg-white text-sm text-icon appearance-none"
        >
          <option value="" hidden disabled>
            دسته بندی
          </option>

          {categoriesConstant.map((item, index) => {
            return (
              <option key={index} value={item?.slug}>
                {item.title}
              </option>
            );
          })}
        </select>

        <button
          aria-label="دکمه فیلتر"
          onClick={(e) => handleCategory(e)}
          className="w-fit px-4 sm:px-6 py-2 text-nowrap bg-primary rounded-md hover:brightness-90 custom-transition cursor-pointer"
        >
          <Filter className="w-6 h-6 text-white" />
        </button>
      </div>
    </>
  );
}

export default MobileCategorySection;
