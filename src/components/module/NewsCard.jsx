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
      className="group h-full overflow-hidden rounded-md bg-white shadow hover:shadow-lg custom-image-transition flex flex-col"
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

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between text-xs text-icon">
          <span className="font-semibold text-primary">
            {data?.category?.name || "دسته‌بندی"}
          </span>
          <span>{postDate}</span>
        </div>

        <h2 className="mb-2 text-lg font-bold line-clamp-2">{data?.title}</h2>

        <p className="text-sm text-icon line-clamp-3">{data?.summary}</p>
      </div>
    </Link>
  );
}

export default NewsCard;
