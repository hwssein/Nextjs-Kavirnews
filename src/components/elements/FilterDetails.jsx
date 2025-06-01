import React from "react";
import RemoveSearchQuery from "./RemoveSearchQuery";

function FilterDetails({ category, search, length }) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-start sm:gap-2 my-2 px-2">
      <div className="w-full sm:w-fit flex items-center justify-start gap-2">
        <span className="py-2 font-light text-icon">فیلتر شده بر اساس:</span>

        {category && (
          <span className="w-fit text-secondary font-light">{category}</span>
        )}
        {search && (
          <span className="w-fit text-secondary font-light">{search}</span>
        )}
      </div>

      <span className="hidden sm:flex font-light">/</span>

      <div className="w-full sm:w-fit flex items-center justify-start gap-2">
        <span className="py-2 font-light text-icon">تعداد نتایج:</span>
        <span className="w-fit font-light text-secondary">{length}</span>
      </div>

      <span className="hidden sm:flex font-light">/</span>

      <RemoveSearchQuery />
    </div>
  );
}

export default FilterDetails;
