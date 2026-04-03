export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 px-6 py-24 text-frost lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-violet/10 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Tell me what you&apos;re{" "}
              <span className="gradient-text">building next</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Websites, app ideas, partnerships — I read every message. For
              website enquiries, include your business name, what you need the
              site to achieve, and any deadline you&apos;re aiming for.
            </p>
            <ul className="mt-8 space-y-3 text-mist">
              <li className="flex gap-3">
                <span className="mt-1 font-bold text-brand-amber">①</span>
                <span>
                  <strong className="text-frost">Websites:</strong> ideal
                  pages, inspiration links, and whether you have text/photos
                  ready.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 font-bold text-brand-sky">②</span>
                <span>
                  <strong className="text-frost">Apps / SEN work:</strong> who
                  the product helps and what problem you&apos;re solving — no
                  pitch deck required.
                </span>
              </li>
            </ul>
          </div>

          <div className="surface p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-mist">
              Direct lines
            </p>
            <p className="mt-4 text-mist leading-relaxed">
              Prefer email? That&apos;s the best place to start — I&apos;ll
              follow up with clear next steps.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href="mailto:brightsenapps@brightsenapps.com" className="btn-warm justify-center">
                Email BrightSen
              </a>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/karl-aboltins-roe-249b0417b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 min-w-[140px]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/K-Roe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 min-w-[140px]"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/brightsenapps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 min-w-[140px]"
                >
                  Instagram
                </a>
              </div>
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-mist">
              Based in the UK · Remote-friendly for web projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
