export default function BrowserMockup() {
  return (
    <div className="relative w-full max-w-[min(100%,360px)] animate-fade-slow">
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
              yourbusiness.co.uk
            </span>
          </div>
        </div>
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
      </div>
      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-widest text-mist">
        Example web build
      </p>
    </div>
  );
}
