import Image from "next/image";
import Link from "next/link";

function RandomNewsCard({ data }) {
  return (
    <>
      <Link href={`/news/${data?.id}`} className="w-full">
        <div className="w-full flex flex-col items-start justify-start p-2">
          <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={data?.image}
              width={300}
              height={200}
              alt={data?.title}
              className="w-full h-full rounded-lg"
            ></Image>
          </div>

          <div className="w-full flex flex-col items-start justify-start gap-2 bg-surface rounded-b-lg">
            <h2 className="w-full font-medium p-2 truncate">{data?.title}</h2>

            <div className="w-full h-[100px] bg-secondary/20 rounded-b-lg flex items-center p-2">
              <h3 className="w-full line-clamp-3 text-icon">{data?.summary}</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default RandomNewsCard;
