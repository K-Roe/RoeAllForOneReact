import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { organisationSchema, values } from "../data/siteContent";

export default function About() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <SEO
        title="About BrightSenApps | Accessible SEND technology"
        description="BrightSenApps creates accessible communication and learning apps for children with SEND, autism, and communication difficulties."
        path="/about"
        schema={organisationSchema}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <section className="max-w-4xl">
          <span className="eyebrow text-brand-sky">About BrightSenApps</span>
          <h1 className="headline mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            We build accessible digital tools for children who need clearer ways
            to communicate and learn
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mist sm:text-xl">
            BrightSenApps was founded to create practical, inclusive technology
            for children with special educational needs, communication
            difficulties, autism, and additional learning needs.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-mist">
            Our work began with a simple belief: communication support should be
            calm, affordable, accessible, and shaped by the people who use it.
            Bright Speak is our flagship product and the foundation for a wider
            family of SEND tools.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2" aria-label="Company values">
          {values.map((value) => (
            <article key={value.title} className="surface p-7">
              <h2 className="font-display text-2xl font-bold text-frost">
                {value.title}
              </h2>
              <p className="mt-3 text-mist leading-relaxed">{value.body}</p>
            </article>
          ))}
        </section>

        <section className="surface mt-14 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow text-brand-mint">Our direction</span>
              <h2 className="headline mt-5 text-3xl sm:text-4xl">
                A growing organisation with a clear mission
              </h2>
              <p className="mt-5 text-mist leading-relaxed">
                BrightSenApps is developing into a team-led organisation with
                product, project, family, and education perspectives working
                together. The website now reflects that mission: parents and
                professionals can find the product, understand the values, meet
                the team, and start a conversation.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link to="/team" className="btn-primary">
                Meet the team
              </Link>
              <Link to="/schools" className="btn-ghost">
                Work with us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
