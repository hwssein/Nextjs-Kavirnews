import Image from "next/image";
import ShareNews from "../elements/ShareNews";
import { Calendar, FolderOpen, User2 } from "lucide-react";
import RandomNews from "../module/RandomNews";
import SectionTitle from "../elements/SectionTitle";
import ImageNewsCard from "../elements/ImageNewsCard";

function PostDetailsPage({ data: postData, allPosts }) {
  const convertDate = new Date(postData?.date).toLocaleDateString(
    "fa-IR-u-ca-persian",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-8 mt-8 px-2">
        <div className="w-full flex items-center justify-start">
          <h1 className="w-full font-bold text-lg lg:text-xl text-primary">
            {postData.title}
          </h1>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full lg:w-[50%] aspect-[4/3] rounded-lg overflow-hidden relative">
            {postData?.image ? (
              <Image
                src={postData?.image}
                fill
                sizes="768px"
                alt={postData.title}
                className="w-full h-full rounded-lg inset-0 object-cover"
              />
            ) : (
              <ImageNewsCard />
            )}
          </div>

          <div className="w-full flex flex-wrap items-center sm:items-start justify-between sm:justify-start gap-4">
            <div className="w-fit text-icon text-sm flex items-center justify-center gap-2 p-2">
              <FolderOpen className="w-5 h-5 text-primary" />
              <span>{postData?.category.name}</span>
            </div>

            <div className="w-fit text-icon text-sm flex items-center justify-center gap-2 p-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{convertDate}</span>
            </div>

            <div className="w-fit text-icon text-sm flex items-center justify-center gap-2 p-2">
              <User2 className="w-5 h-5 text-primary" />
              <span>{postData?.author.name}</span>
            </div>

            <ShareNews />
          </div>
        </div>

        <div className="w-full flex items-center justify-start">
          <h3 className="w-full p-4 sm:p-6 bg-surface rounded-lg font-semibold text-icon text-base">
            {postData.summary}
          </h3>
        </div>

        <div className="w-full lg:w-[50%] relative flex items-start justify-start gap-2 group">
          <span className="w-fit rounded-full px-1 py-2 inline-block bg-primary mt-2 group-hover:bg-secondary custom-transition"></span>

          <div className="w-full inline-block text-icon text-base/relaxed mb-4">
            {postData.description.split("\n").map((line, index) => (
              <p
                key={index}
                className="mb-2 text-icon text-base leading-loose text-justify whitespace-pre-wrap"
              >
                {line.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start">
        <div className="w-full px-2">
          <SectionTitle text="خبر‌های داغ" />
        </div>

        <RandomNews data={allPosts} />
      </div>
    </>
  );
}

export default PostDetailsPage;
