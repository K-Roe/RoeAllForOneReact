import SEO from "../components/SEO";
import karlPhoto from "../assets/Karl.jpg";
import joelPhoto from "../assets/Joel.png";

const team = [
  {
    name: "Karl Aboltins-Roe",
    role: "Founder",
    image: karlPhoto,
    alt: "Karl Aboltins-Roe",
    email: "karlaboltins-roe@brightsenapps.com",
    body: "Karl founded BrightSenApps after seeing first-hand how important accessible communication support can be for children with additional needs. He brings together parent experience, software development, and a practical focus on tools families can actually use.",
  },
  {
    name: "Joel",
    role: "Co-Founder / Project Manager",
    image: joelPhoto,
    alt: "Joel, Co-Founder and Project Manager",
    email: "joelbellis@brightsenapps.com",
    body: "Joel supports product direction, project planning, delivery, and long-term growth. His role helps BrightSenApps stay organised, purposeful, and focused on the needs of families, schools, and partner organisations.",
  },
];

export default function Team() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <SEO
        title="Meet the Team | BrightSenApps"
        description="Meet the BrightSenApps team behind Bright Speak, including founder Karl Aboltins-Roe and co-founder/project manager Joel."
        path="/team"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-20"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <section className="max-w-4xl">
          <span className="eyebrow text-brand-sky">Meet the team</span>
          <h1 className="headline mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            People building calmer communication technology
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mist">
            BrightSenApps is growing carefully around a shared mission: making
            accessible digital tools that support communication, learning, and
            confidence for children with SEND.
          </p>
        </section>

        <section className="mt-14 space-y-8" aria-label="Team profiles">
          {team.map((person, index) => (
            <article
              key={person.name}
              className="surface surface-hover grid overflow-hidden md:grid-cols-12 md:items-stretch"
            >
              <div
                className={`flex bg-slate-50 p-4 sm:p-6 md:col-span-5 lg:col-span-4 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <img
                    src={person.image}
                    alt={person.alt}
                    className="max-h-full w-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-7 sm:p-8 md:col-span-7 lg:col-span-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-sky">
                  {person.role}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-frost">
                  {person.name}
                </h2>
                <p className="mt-4 text-mist leading-relaxed">{person.body}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="btn-ghost mt-6"
                  aria-label={`Email ${person.name} at ${person.email}`}
                >
                  {person.email}
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="surface mt-10 border-dashed p-7">
          <h2 className="font-display text-2xl font-bold text-frost">
            Designed to grow
          </h2>
          <p className="mt-3 max-w-3xl text-mist leading-relaxed">
            Future team members, advisors, volunteers, clinical specialists, and
            education partners can be added here as BrightSenApps develops.
          </p>
        </section>
      </div>
    </main>
  );
}
