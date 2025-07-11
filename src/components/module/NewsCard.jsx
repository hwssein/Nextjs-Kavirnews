import Image from "next/image";
import Link from "next/link";
import ImageNewsCard from "../elements/ImageNewsCard";

function NewsCard({ data }) {
  const postDate = new Date(data?.date || Date.now()).toLocaleDateString(
    "fa-IR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Link
      href={`/news/${data?.id}`}
      target="_blank"
      className="group w-full h-full overflow-hidden rounded-md bg-white shadow hover:shadow-lg custom-image-transition flex flex-col"
    >
      <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
        {data?.image ? (
          <Image
            src={data?.image}
            alt={data?.title}
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-cover group-hover:scale-105 custom-image-transition"
          />
        ) : (
          <ImageNewsCard />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 bg-transparent">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-semibold text-primary text-xs bg-white">
            {data?.category?.name || "دسته‌بندی"}
          </span>

          <span className="text-xs text-icon bg-white">{postDate}</span>
        </div>

        <h2 className="w-full h-[56px] mb-2 text-lg font-bold line-clamp-2">
          {data?.title}
        </h2>

        <p className="w-full text-sm text-icon line-clamp-3">{data?.summary}</p>
      </div>
    </Link>
  );
}

export default NewsCard;
