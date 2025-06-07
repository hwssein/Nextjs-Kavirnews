import Image from "next/image";
import Link from "next/link";

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
      className="group h-full overflow-hidden rounded-lg bg-white shadow flex flex-col"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
        <Image
          src={data?.image || "/images/image-unavailable.png"}
          alt={data?.title || "Default title"}
          fill
          className="object-cover custom-transition group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
