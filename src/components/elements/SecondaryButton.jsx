function SecondaryButton({ text }) {
  return (
    <button className="w-fit border border-primary text-nowrap px-4 py-1.5 sm:py-2 rounded-lg text-primary hover:brightness-90 custom-transition cursor-pointer">
      {text}
    </button>
  );
}

export default SecondaryButton;
