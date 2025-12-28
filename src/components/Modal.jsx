export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white/10 border border-white/20 rounded-2xl p-8 max-w-2xl w-[95%] text-white shadow-2xl animate-fade">
        <button
          className="absolute top-3 right-4 text-xl hover:text-red-400"
          onClick={onClose}
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
}
