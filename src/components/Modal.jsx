export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/80 backdrop-blur-md"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-card/95 p-8 text-frost shadow-2xl backdrop-blur-xl animate-fade">
        <button
          type="button"
          className="absolute right-4 top-4 rounded-lg px-2 py-1 text-lg text-mist transition hover:bg-white/10 hover:text-frost"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>
        <div className="pr-6">{children}</div>
      </div>
    </div>
  );
}
