import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const supportAreas = [
  "Introduce Bright Speak as a free visual communication tool",
  "Use child profiles and custom content to reflect familiar vocabulary",
  "Support transitions, food and drink choices, emotions, and common phrases",
  "Share feedback that helps improve SEND communication technology",
];

export default function Schools() {
  return (
    <main className="min-h-screen px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <SEO
        title="Schools and Organisations | BrightSenApps"
        description="BrightSenApps works with schools, nurseries, SENCOs, care providers, and partners through Bright Speak pilots, feedback programmes, and SEND technology collaboration."
        path="/schools"
      />
      <div className="mx-auto max-w-7xl">
        <section className="max-w-4xl">
          <span className="eyebrow text-brand-sky">Schools and organisations</span>
          <h1 className="headline mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Practical communication support for education and care settings
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            BrightSenApps works with schools, nurseries, SENCOs, care providers,
            charities, and partner organisations that want accessible SEND tools
            shaped by real-world use.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {supportAreas.map((area) => (
            <article key={area} className="surface p-7">
              <h2 className="font-display text-xl font-bold text-frost">
                {area}
              </h2>
            </article>
          ))}
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Pilot opportunities",
              body: "Use Bright Speak with a small group, gather observations, and help us understand what settings need next.",
            },
            {
              title: "Feedback programmes",
              body: "Share practical feedback on usability, vocabulary, routines, emotional support, and accessibility.",
            },
            {
              title: "Partnerships",
              body: "Explore charitable, education, funding, or technology partnerships that keep family access free.",
            },
          ].map((item) => (
            <article key={item.title} className="surface p-7">
              <h2 className="font-display text-2xl font-bold text-brand-sky">
                {item.title}
              </h2>
              <p className="mt-4 text-mist leading-relaxed">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-brand-sky/25 bg-brand-sky/[0.07] p-8 text-center sm:p-10">
          <h2 className="font-display text-3xl font-bold text-frost">
            Interested in working with BrightSenApps?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            Tell us about your setting, the children you support, and the type of
            communication support you are looking for.
          </p>
          <a href="/#contact" className="btn-primary mt-8">
            Contact us
          </a>
          <Link to="/bright-speak" className="btn-ghost ml-0 mt-3 sm:ml-3 sm:mt-8">
            View Bright Speak
          </Link>
        </section>
      </div>
    </main>
  );
}
