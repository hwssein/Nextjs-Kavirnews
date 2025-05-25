import Image from "next/image";

function UserPostCard({ title, summary, description, image }) {
  return (
    <>
      <div className="w-full flex items-center justify-start gap-2">
        <div className="w-28 h-22 flex items-center justify-center overflow-hidden rounded-md">
          <Image
            src={image || "/images/image-unavailable.png"}
            width={250}
            height={250}
            alt={title}
            priority={false}
            loading="lazy"
            className="w-full rounded-md"
          />
        </div>

        <span className="w-px h-20 block bg-stroke"></span>

        <div className="w-[calc(100%-112px)] flex flex-col items-start justify-start gap-2">
          <h2 className="w-full font-medium truncate">{title}</h2>

          <p className="w-full line-clamp-2 text-icon">{summary}</p>
        </div>
      </div>
    </>
  );
}

export default UserPostCard;
