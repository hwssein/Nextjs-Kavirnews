import Image from "next/image";
import Link from "next/link";

function HomeCategory() {
  const categories = [
    {
      title: "اجتماع",
      image: "/images/social-category.jpg",
      slug: "/news?categories=social",
    },
    {
      title: "اقتصاد",
      image: "/images/economic-category.jpg",
      slug: "/news?categories=economic",
    },
    {
      title: "سیاست",
      image: "/images/politic-category.jpg",
      slug: "/news?categories=politic",
    },
    {
      title: "تکنولوژی",
      image: "/images/technology-category.jpg",
      slug: "/news?categories=technology",
    },
    {
      title: "ورزش",
      image: "/images/sport-category.jpg",
      slug: "/news?categories=sport",
    },
  ];

  return (
    <div className="w-full md:w-[40%] lg:w-full flex flex-wrap items-center justify-center sm:justify-between md:justify-start lg:justify-between gap-y-2 gap-x-4 p-2">
      {categories.map((item, index) => (
        <Link
          href={item.slug}
          key={index}
          className="w-[80px] h-[40px] rounded-lg relative group overflow-hidden"
        >
          <Image
            src={item.image}
            fill
            sizes="80px"
            alt={item.title}
            className="w-full h-full rounded-lg object-cover"
          />
          <span className="w-full h-full absolute top-0 right-0 flex items-center justify-center rounded-lg backdrop-blur-sm bg-transparent group-hover:bg-primary/30 group-hover:backdrop-blur-none custom-transition">
            <span className="w-full text-center text-sm text-background">
              #{item.title}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default HomeCategory;
