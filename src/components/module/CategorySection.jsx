import Link from "next/link";

import categoriesConstant from "@/constant/categories";

import { Users, DollarSign, Landmark, Monitor, Dumbbell } from "lucide-react";

function CategorySection() {
  const icons = {
    Users,
    DollarSign,
    Landmark,
    Monitor,
    Dumbbell,
  };

  return (
    <div className="w-full hidden md:flex flex-wrap items-center justify-start xl:justify-between gap-4">
      {categoriesConstant.map((item, index) => {
        const Icon = icons[item?.icon ?? null];

        return (
          <Link
            href={item.slug}
            key={index}
            className="w-fit rounded-md flex items-center justify-center gap-2 bg-white hover:bg-primary custom-transition border border-stroke hover:border-primary px-4 py-2 group"
          >
            {Icon && (
              <Icon className="w-5 h-5 text-icon group-hover:text-white custom-transition" />
            )}

            <span className="text-sm text-icon group-hover:text-white custom-transition">
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default CategorySection;
