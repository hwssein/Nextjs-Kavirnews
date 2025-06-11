function SectionTitle({ text }) {
  return (
    <div className="w-full flex items-center justify-start border-b border-stroke mt-2 mb-4">
      <span className="py-3 font-bold text-icon">{text}</span>
    </div>
  );
}

export default SectionTitle;
