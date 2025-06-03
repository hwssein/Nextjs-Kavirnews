import Image from "next/image";
import Link from "next/link";

function NewsCard({ data }) {
  return (
    <>
      <Link href={`/news/${data?.id}`} className="w-full shadow rounded-lg">
        <div className="w-full flex flex-col items-start justify-start">
          <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={data?.image || "/images/image-unavailable.png"}
              width={300}
              height={200}
              alt={data?.title}
              className="w-full h-full rounded-lg"
            ></Image>
          </div>

          <div className="w-full flex flex-col items-start justify-start bg-surface rounded-b-lg">
            <div className="w-full h-[70px] flex items-center justify-start p-2">
              <h2 className="w-full font-semibold line-clamp-2">
                {data?.title}
              </h2>
            </div>

            <div className="w-full h-[100px] bg-secondary/10 rounded-b-lg flex items-center p-2">
              <h3 className="w-full line-clamp-3 text-icon">{data?.summary}</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default NewsCard;
