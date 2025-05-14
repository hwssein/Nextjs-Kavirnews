function PrimaryButton({ text }) {
  return (
    <button className="w-fit text-nowrap bg-primary px-4 py-2 rounded-xl text-white hover:brightness-90 custom-transition cursor-pointer">
      {text}
    </button>
  );
}

export default PrimaryButton;
