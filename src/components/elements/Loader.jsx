function Loader() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col gap-2 p-8 sm:p-2">
        <div className="w-full sm:w-3/6 text-center text-3xl font-bold text-primary">
          KaviR.News
        </div>
        <div className="loader w-full sm:w-3/6 text-primary"></div>
      </div>
    </>
  );
}

export default Loader;
