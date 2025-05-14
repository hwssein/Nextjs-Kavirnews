function SecondaryButton({ text }) {
  return (
    <button className="w-fit border border-primary text-nowrap px-4 py-2 rounded-xl text-primary hover:brightness-110 custom-transition cursor-pointer">
      {text}
    </button>
  );
}

export default SecondaryButton;
