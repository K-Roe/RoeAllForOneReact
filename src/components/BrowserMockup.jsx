import { useState, useEffect } from "react";

export default function BrowserMockup({ slides = [], interval = 3500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides, interval]);

  const hasSlides = slides.length > 0;
  const current = hasSlides ? slides[index] : null;

  return (
    <div className="relative w-full animate-fade-slow">
      <div
        className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-brand-amber/35 via-brand-violet/25 to-brand-sky/20 opacity-90 blur-lg"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-ink-card/95 shadow-panel backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400/90" aria-hidden />
          <span className="size-2.5 rounded-full bg-brand-amber/90" aria-hidden />
          <span className="size-2.5 rounded-full bg-brand-mint/90" aria-hidden />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-mist">
            <span className="text-white/40" aria-hidden>
              🔒
            </span>
            <span className="truncate font-medium text-frost/90">
              {hasSlides ? "madebygeeks · shop" : "yourbusiness.co.uk"}
            </span>
          </div>
        </div>

        {hasSlides ? (
          <div className="relative aspect-[16/10] w-full bg-[#0c1017] sm:aspect-[16/9]">
            <img
              src={current.src}
              alt={current.alt}
              className="size-full object-cover object-top transition-opacity duration-700"
            />
            {slides.length > 1 && (
              <div
                className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5"
                aria-hidden
              >
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-4 bg-brand-amber"
                        : "w-1.5 bg-white/25"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4 p-6">
            <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-brand-amber/50 to-white/25" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.04]" />
              <div className="h-16 rounded-2xl border border-white/10 bg-gradient-to-br from-brand-sky/15 to-transparent" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-white/[0.08]" />
              <div className="h-2 w-5/6 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-4/6 rounded-full bg-white/[0.05]" />
            </div>
            <div className="inline-flex rounded-xl bg-brand-amber/20 px-3 py-1.5 text-xs font-bold text-brand-amber">
              Book / Contact
            </div>
          </div>
        )}
      </div>
      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-widest text-mist">
        {hasSlides ? "Made by Geeks — storefront & admin" : "Example web build"}
      </p>
    </div>
  );
}
