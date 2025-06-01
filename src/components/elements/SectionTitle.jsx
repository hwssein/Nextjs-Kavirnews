import React from "react";

function SectionTitle({ text }) {
  return (
    <div className="w-full flex items-center justify-start border-b border-stroke my-2">
      <span className="py-2 font-semibold text-icon">{text}</span>
    </div>
  );
}

export default SectionTitle;
