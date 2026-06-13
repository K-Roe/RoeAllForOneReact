import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const releasedUpdates = [
  {
    title: "Bright Speak v1.22 Released",
    date: "June 2026",
    summary:
      "A major update focused on accessibility, communication, and learning. This release added the child to the People Mini Game, introduced Universal Colour Accessibility Mode, improved audio playback when devices are in silent mode, added correct and incorrect feedback prompts, prevented repeated answers in activities, enhanced custom content management, and included bug fixes, performance improvements, and stability updates throughout the app.",
  },
  {
    title: "Over 12 Months of Continuous Improvements",
    date: "Since Launch",
    summary:
      "Bright Speak has grown through regular updates shaped by feedback from families, carers, educators, and schools. Improvements include custom animals and people, expanded communication content, mini games, learning activities, speech enhancements, accessibility features, visual updates, performance optimisations, and hundreds of refinements designed to create a better experience for every child.",
  },
];

const upcomingUpdates = [
  {
    title: "Learning Section Expansion",
    status: "In development",
    summary:
      "New educational activities are being added to help children learn numbers, counting, simple maths, and other core skills through engaging, interactive experiences.",
  },
  {
    title: "More Parent Customisation",
    status: "In development",
    summary:
      "Parent controls are being expanded to support more custom content, personalised learning activities, and new ways to tailor Bright Speak around each child's individual needs.",
  },
];

const timeline = [
  {
    version: "v1.22",
    date: "June 2026",
    changes: [
      "Universal Colour Accessibility Mode",
      "Child added to the People Mini Game",
      "Improved audio playback",
      "Correct and incorrect feedback prompts",
      "Reduced repeated answers in activities",
      "Bug fixes and performance improvements",
    ],
  },
  {
    version: "v1.20+",
    date: "Recent updates",
    changes: [
      "Custom animal content improvements",
      "Parent content management updates",
      "Mini game refinements",
      "Speech and interaction improvements",
    ],
  },
];

export default function Updates() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <SEO
        title="Updates | BrightSenApps"
        description="Latest BrightSenApps updates, Bright Speak release notes, development progress, accessibility improvements, and community announcements."
        path="/updates"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <section className="max-w-4xl">
          <span className="eyebrow text-brand-sky">Updates</span>

          <h1 className="headline mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            What's New & Coming Soon
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mist sm:text-xl">
            Follow the latest releases from BrightSenApps, discover recent
            improvements to Bright Speak, and see what our team is building
            next.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-4">
          <div className="surface surface-hover p-6 text-center">
            <h3 className="font-display text-4xl font-bold text-brand-sky">
              380+
            </h3>
            <p className="mt-2 text-mist">Downloads</p>
          </div>

          <div className="surface surface-hover p-6 text-center">
            <h3 className="font-display text-4xl font-bold text-brand-mint">
              1.22
            </h3>
            <p className="mt-2 text-mist">Current Version</p>
          </div>

          <div className="surface surface-hover p-6 text-center">
            <h3 className="font-display text-4xl font-bold text-brand-sky">
              12+
            </h3>
            <p className="mt-2 text-mist">Months Building</p>
          </div>

          <div className="surface surface-hover p-6 text-center">
            <h3 className="font-display text-4xl font-bold text-brand-mint">
              100%
            </h3>
            <p className="mt-2 text-mist">Free & Ad-Free</p>
          </div>
        </section>

        <section className="mt-14" aria-label="Recently released updates">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand-mint">Just released</span>

            <h2 className="headline mt-5 text-3xl sm:text-4xl">
              Recent updates now available
            </h2>

            <p className="mt-4 leading-relaxed text-mist">
              Explore the latest releases, feature improvements, app store
              updates, and enhancements that families, carers, educators, and
              schools can start using today.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {releasedUpdates.map((update) => (
              <article key={update.title} className="surface surface-hover p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-sky">
                  {update.date}
                </p>

                <h3 className="mt-4 font-display text-2xl font-bold text-frost">
                  {update.title}
                </h3>

                <p className="mt-4 leading-relaxed text-mist">
                  {update.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-label="Work in progress">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand-sky">In progress</span>

            <h2 className="headline mt-5 text-3xl sm:text-4xl">
              What we are working on next
            </h2>

            <p className="mt-4 leading-relaxed text-mist">
              Upcoming features, roadmap notes, early testing, and improvements
              currently being shaped by feedback from families, carers,
              educators, and schools.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {upcomingUpdates.map((update) => (
              <article key={update.title} className="surface surface-hover p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-sky">
                  {update.status}
                </p>

                <h3 className="mt-4 font-display text-2xl font-bold text-frost">
                  {update.title}
                </h3>

                <p className="mt-4 leading-relaxed text-mist">
                  {update.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-label="Version timeline">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand-mint">Release timeline</span>

            <h2 className="headline mt-5 text-3xl sm:text-4xl">
              Bright Speak changelog
            </h2>

            <p className="mt-4 leading-relaxed text-mist">
              A clear look at recent improvements and the progress being made
              across Bright Speak.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {timeline.map((item) => (
              <article key={item.version} className="surface surface-hover p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-2xl font-bold text-frost">
                    {item.version}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-sky">
                    {item.date}
                  </p>
                </div>

                <ul className="mt-5 grid gap-3 text-mist sm:grid-cols-2">
                  {item.changes.map((change) => (
                    <li key={change} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-mint" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="surface mt-14 p-8 sm:p-10">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand-mint">Community driven</span>

            <h2 className="headline mt-5 text-3xl sm:text-4xl">
              Built with feedback from real families
            </h2>

            <p className="mt-5 leading-relaxed text-mist">
              Bright Speak continues to evolve through feedback from families,
              carers, educators, and schools. Every update helps create a more
              accessible, engaging, and supportive communication experience for
              children.
            </p>
          </div>
        </section>

        <section className="surface surface-hover mt-14 p-8 text-center sm:p-10">
          <h2 className="headline text-3xl sm:text-4xl">
            Want to help shape Bright Speak?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-mist">
            Feedback helps guide what we build next. If you have an idea,
            suggestion, or feature request, BrightSenApps would love to hear
            from you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/#contact" className="btn-primary">
              Send Feedback
            </a>

            <Link to="/bright-speak" className="btn-ghost">
              View Bright Speak
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
