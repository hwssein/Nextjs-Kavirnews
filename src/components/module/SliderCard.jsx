import Image from "next/image";
import Link from "next/link";
import { FolderOpen, Calendar } from "lucide-react";
import ImageNewsCard from "../elements/ImageNewsCard";

function SliderCard({ post, isPriority }) {
  const postDate = new Date(post.date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/news/${post.id}`}
      target="_blank"
      className="group relative w-full h-[450px] md:h-[500px] rounded-lg overflow-hidden"
    >
      {post?.image ? (
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority={isPriority}
          sizes="(min-width: 768px) 80vw, 100vw"
          className="object-cover w-full h-full custom-image-transition group-hover:scale-105"
        />
      ) : (
        <ImageNewsCard />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col justify-end px-4 py-6 md:px-6 md:py-8 text-white">
        <div className="flex items-center gap-4 text-sm text-white/80 mb-2">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4" />
            <span>{post.category.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{postDate}</span>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight line-clamp-2">
          {post.title}
        </h2>
      </div>
    </Link>
  );
}

export default SliderCard;
