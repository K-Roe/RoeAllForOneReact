import { useState, useEffect } from "react";

export default function AndroidPhone({ images = [], interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative">
      <div
        className="absolute -inset-[3px] rounded-[44px] bg-gradient-to-br from-brand-sky/50 via-brand-violet/30 to-brand-coral/35 opacity-90 blur-md"
        aria-hidden
      />
      <div className="relative w-[300px] overflow-hidden rounded-[40px] border border-white/20 bg-ink shadow-2xl sm:w-[320px]">
        <div className="flex h-7 items-center justify-center border-b border-white/10 bg-ink-soft">
          <div className="h-1.5 w-16 rounded-full bg-white/15" />
        </div>
        <div className="aspect-[9/18] w-full bg-black">
          {images.length > 0 && (
            <img
              src={images[index]}
              alt=""
              className="size-full object-cover transition-opacity duration-700"
            />
          )}
        </div>
      </div>
    </div>
  );
}
