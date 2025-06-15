function SectionTitle({ text }) {
  return (
    <div className="w-full flex items-center justify-start border-b border-stroke mt-4 mb-6">
      <span className="py-3 font-bold text-icon">{text}</span>
    </div>
  );
}

export default SectionTitle;
