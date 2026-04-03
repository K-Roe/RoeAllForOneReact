const items = [
  {
    title: "Landing & brochure sites",
    desc: "One polished page (or a few) that explains what you do, shows credibility, and makes it easy to get in touch.",
    tag: "Fast launch",
  },
  {
    title: "Small business websites",
    desc: "Multi-page builds with contact flows, imagery and room to grow — built so updates stay straightforward.",
    tag: "Full site",
  },
  {
    title: "Performance & accessibility",
    desc: "Quick loads, readable type, sensible contrast — the same care I put into SEN-first product design.",
    tag: "Quality bar",
  },
  {
    title: "Collaboration",
    desc: "You share goals and content; I handle structure, UI and implementation. Clear milestones, no jargon.",
    tag: "Hands-on",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 border-y border-white/[0.06] bg-gradient-to-b from-brand-amber/[0.07] via-ink-soft/80 to-transparent py-24 text-frost"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-64 w-full bg-gradient-to-b from-brand-amber/15 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl animate-fade">
            <span className="eyebrow text-brand-amber">Client websites</span>
            <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl">
              <span className="gradient-text-warm">Website builds</span>
              <br />
              <span className="text-frost">you won’t scroll past.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
              This section sits right under the hero on purpose — if you need a
              site for your business, non-profit, studio or personal brand,
              you&apos;re in the right place. I take on a limited number of web
              projects so every build gets proper attention.
            </p>
          </div>

          <div className="surface max-w-md shrink-0 border-brand-amber/25 p-6 lg:text-right">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-amber">
              Typical fit
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              Trades, therapists, coaches, local shops, creators, charities —
              anyone who wants something clean and credible online.
            </p>
            <a href="#contact" className="btn-warm mt-5 w-full lg:ml-auto lg:w-auto">
              Request a website quote
            </a>
          </div>
        </div>

        <div className="section-divider my-16" />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map(({ title, desc, tag }) => (
            <article
              key={title}
              className="surface surface-hover group relative overflow-hidden p-8"
            >
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-mist">
                  {tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-frost">
                {title}
              </h3>
              <p className="mt-3 text-mist leading-relaxed">{desc}</p>
              <div
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-amber/10 opacity-0 blur-2xl transition group-hover:opacity-100"
                aria-hidden
              />
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-stretch justify-between gap-6 rounded-3xl border border-brand-amber/25 bg-ink-card/90 p-8 shadow-glow-warm sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="font-display text-xl font-bold text-frost">
              Ready when you are
            </p>
            <p className="mt-2 max-w-xl text-mist">
              Send a short note about your business, timeline and any examples you
              like. I&apos;ll respond with a sensible plan — even if it&apos;s
              just pointing you in the right direction.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0 self-center">
            Email to get started
          </a>
        </div>
      </div>
    </section>
  );
}
