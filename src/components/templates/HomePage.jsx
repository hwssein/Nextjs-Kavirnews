import HomeCategory from "../module/HomeCategory";

function HomePage({ data }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <HomeCategory />
      </div>
    </>
  );
}

export default HomePage;
