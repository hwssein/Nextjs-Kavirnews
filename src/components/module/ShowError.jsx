function ShowError({ text }) {
  return (
    <div className="w-full flex items-center justify-center my-6 px-2">
      <span className="px-4 py-2 rounded-lg text-background bg-secondary">
        {text || "مشکلی پیش آمده است، لطفا دوباره امتحان کنید."}
      </span>
    </div>
  );
}

export default ShowError;
