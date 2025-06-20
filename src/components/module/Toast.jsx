import { useEffect } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-2 right-2 max-w-xs bg-surface bg-opacity-80 text-black px-8 py-4 rounded-lg shadow z-50 text-sm border-2 border-stroke">
      {message}
    </div>
  );
}

export default Toast;
