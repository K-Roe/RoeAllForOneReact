import SEO from "../components/SEO";
import { testimonials } from "../data/siteContent";

const outcomes = [
  "Children can make choices with less pressure to speak",
  "Parents and carers can understand needs more quickly",
  "Schools and nurseries can introduce visual support in a consistent way",
  "Feedback helps shape future communication and learning features",
];

export default function Impact() {
  return (
    <main className="min-h-screen px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <SEO
        title="Impact | BrightSenApps"
        description="BrightSenApps impact, parent feedback, school feedback, development journey, and real-world outcomes from Bright Speak."
        path="/impact"
      />
      <div className="mx-auto max-w-7xl">
        <section className="max-w-4xl">
          <span className="eyebrow text-brand-mint">Impact</span>
          <h1 className="headline mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Learning from real families and real settings
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Bright Speak is shaped through feedback from parents, carers, early
            years settings, and the wider SEND community. The aim is practical
            progress: clearer communication, calmer moments, and tools that fit
            into everyday life.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3" aria-label="Feedback">
          {testimonials.map((item) => (
            <blockquote key={item.source} className="surface p-7">
              <p className="text-lg leading-relaxed text-mist">"{item.quote}"</p>
              <footer className="mt-5 text-sm font-bold text-brand-sky">
                {item.source}
              </footer>
            </blockquote>
          ))}
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="surface p-8">
            <h2 className="font-display text-3xl font-bold text-frost">
              Development journey
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              Bright Speak started from lived experience and has grown through
              app store releases, family feedback, association with Tapestry, and
              ongoing conversations with people who support children with SEND.
            </p>
          </article>
          <article className="surface p-8">
            <h2 className="font-display text-3xl font-bold text-frost">
              Real-world outcomes
            </h2>
            <ul className="mt-5 space-y-3 text-mist">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-mint" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
