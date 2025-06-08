import categoriesConstant from "@/constant/categories";
import { Users, DollarSign, Landmark, Monitor, Dumbbell } from "lucide-react";
import Link from "next/link";
import HomeSearchInput from "../elements/HomeSearchInput";

function HomeCategory() {
  const icons = {
    Users,
    DollarSign,
    Landmark,
    Monitor,
    Dumbbell,
  };

  return (
    <div className="w-full p-2 flex flex-col items-center justify-center gap-6">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <span className="w-full text-center text-xl font-semibold">
          جستجو بر اساس دسته بندی
        </span>
        <span className="w-full text-center text-icon font-light">
          مشاهده‌ آخرین اخبار روز دنیا در هر دسته بندی
        </span>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {categoriesConstant.map((item, index) => {
          const Icon = icons[item.icon ?? null];

          return (
            <Link
              href={item.slug}
              key={index}
              className="w-fit py-3 sm:py-4 px-6 sm:px-8 bg-white rounded-md border border-stroke flex flex-col items-center gap-2 hover:bg-primary custom-transition group"
            >
              {Icon && (
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white custom-transition" />
              )}
              <span className="text-sm group-hover:text-white custom-transition">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>

      <HomeSearchInput />
    </div>
  );
}

export default HomeCategory;
