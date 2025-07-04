import Image from "next/image";
import Link from "next/link";
import ImageNewsCard from "../elements/ImageNewsCard";

function MiniNewsCard({ item }) {
  return (
    <Link
      href={`/news/${item?.id}`}
      target="_blank"
      className="w-full bg-white flex flex-col sm:flex-row items-start sm:items-center gap-4 group shadow hover:shadow-lg custom-image-transition p-4 rounded-md"
    >
      <div className="w-full sm:w-[200px] aspect-video relative overflow-hidden rounded-md shrink-0">
        {item?.image ? (
          <Image
            src={item?.image}
            alt={item?.title}
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-cover group-hover:scale-105 custom-image-transition"
          />
        ) : (
          <ImageNewsCard />
        )}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <h2 className="font-bold text-base sm:text-lg line-clamp-2 sm:line-clamp-3">
          {item?.title}
        </h2>
        <p className="text-sm line-clamp-2 text-icon">{item?.summary}</p>
      </div>
    </Link>
  );
}

export default MiniNewsCard;
