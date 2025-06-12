"use client";

import { useRouter } from "next/navigation";

import categoriesConstant from "@/constant/categories";
import { ChevronDown } from "lucide-react";

function MobileCategorySection() {
  const router = useRouter();

  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    if (!selectedCategory && !category) return;

    router.push(selectedCategory);
  };

  return (
    <>
      <div className="w-full h-10 flex md:hidden items-center justify-start relative">
        <select
          aria-label="انتخاب دسته بندی"
          name="category"
          defaultValue=""
          onChange={(e) => handleCategory(e)}
          className="w-full text-sm text-icon appearance-none p-2 border border-stroke focus:border-primary custom-transition rounded-md"
        >
          <option value="" hidden disabled>
            انتخاب دسته بندی
          </option>

          {categoriesConstant.map((item, index) => {
            return (
              <option key={index} value={item?.slug}>
                {item.title}
              </option>
            );
          })}
        </select>

        <ChevronDown className="w-4 h-4 text-icon absolute left-2 top-3" />
      </div>
    </>
  );
}

export default MobileCategorySection;
