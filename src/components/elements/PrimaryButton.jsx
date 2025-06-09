function PrimaryButton({ text }) {
  return (
    <button className="w-full text-nowrap border border-primary bg-primary px-4 py-1.5 sm:py-2 rounded-lg text-white hover:brightness-90 custom-transition cursor-pointer">
      {text}
    </button>
  );
}

export default PrimaryButton;
