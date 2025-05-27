import Image from "next/image";
import ShareNews from "../elements/ShareNews";

function PostDetailsPage({ data }) {
  const convertDate = new Date(data?.date).toLocaleDateString(
    "fa-IR-u-ca-persian",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-2 mt-2">
        <div className="w-full px-2 flex items-center justify-start">
          <h1 className="w-full p-2 bg-secondary rounded-lg font-medium text-background text-justify">
            {data.title}
          </h1>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-2">
          <div className="w-full mt-2 px-2 max-w-[640px] sm:max-w-[400px] lg:max-w-[640px] flex items-center justify-center rounded-lg overflow-hidden">
            <Image
              src={data.image}
              width={640}
              height={400}
              alt={data.title}
              className="w-full h-fit rounded-lg"
            />
          </div>

          <div className="w-full flex flex-wrap sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-4 px-2 sm:mt-2">
            <div className="w-fit text-icon text-sm flex items-center justify-start gap-2 bg-surface p-2 rounded-lg">
              <span>دسته بندی:</span>
              <span className="text-secondary">{data?.category.name}</span>
            </div>

            <div className="w-fit text-icon text-sm flex items-center justify-start gap-2 bg-surface p-2 rounded-lg">
              <span>تاریخ انتشار:</span>
              <span className="text-secondary">{convertDate}</span>
            </div>

            <div className="w-fit text-icon text-sm flex items-center justify-start gap-2 bg-surface p-2 rounded-lg">
              <span>نویسنده:</span>
              <span className="text-secondary">{data?.author.name}</span>
            </div>

            <ShareNews />
          </div>
        </div>

        <div className="w-full px-2 flex items-center justify-start mt-2">
          <h3 className="w-full px-2 py-6 bg-surface rounded-lg font-normal text-base text-justify">
            {data.summary}
          </h3>
        </div>

        <div className="w-full relative px-2 mt-2 flex items-start justify-start gap-2 group">
          <span className="w-fit rounded-lg px-1 py-2 inline-block bg-primary mt-1 group-hover:bg-secondary custom-transition"></span>

          <div className="w-full inline-block text-justify text-icon text-base/relaxed mb-4">
            {data.description.split("\n").map((line, index) => (
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
    </>
  );
}

export default PostDetailsPage;
