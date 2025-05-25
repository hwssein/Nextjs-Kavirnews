import Image from "next/image";

function PostDetailsPage({ data }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-2 mt-2">
        <span className="w-full h-px bg-stroke block"></span>

        <div className="w-full px-2 flex items-center justify-start">
          <h1 className="w-full p-2 bg-secondary rounded-lg font-medium text-background text-justify">
            {data.title}
          </h1>
        </div>

        <div className="w-full mt-2 px-2 max-w-[640px] sm:max-w-[400px] lg:max-w-[640px] flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src={data.image}
            width={640}
            height={400}
            alt={data.title}
            className="w-full h-fit rounded-lg"
          />
        </div>

        <div className="w-full md:w-[640px] px-2 flex items-center justify-start mt-2">
          <strong className="w-full px-2 py-6 bg-surface rounded-lg font-normal text-base text-justify">
            {data.summary}
          </strong>
        </div>

        <div className="w-full relative px-2 mt-2 flex items-start justify-start gap-2 group">
          <span className="w-fit rounded-lg px-1 py-2 inline-block bg-primary mt-1 group-hover:bg-secondary custom-transition"></span>

          <p className="w-full inline-block text-justify text-icon text-base/relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default PostDetailsPage;
