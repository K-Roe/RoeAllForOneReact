import { useState, useEffect } from "react";

export default function AndroidPhone({ images = [], interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-[320px] h-[650px] bg-black rounded-[40px] border-[6px] border-gray-700 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
      
      {/* Android top bar */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-full z-20"></div>

      {/* Screen */}
      <div className="w-full h-full rounded-[32px] overflow-hidden bg-black">
        {images.length > 0 && (
          <img
            src={images[index]}
            className="w-full h-full object-cover transition-opacity duration-700"
          />
        )}
      </div>
    </div>
  );
}
