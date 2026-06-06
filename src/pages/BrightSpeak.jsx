import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import BrightSpeakStoreBadges from "../components/BrightSpeakStoreBadges";
import TapestryAssociation from "../components/TapestryAssociation";
import { brightSpeakFeatures, brightSpeakSchema } from "../data/siteContent";
import { brightSpeakScreenAlts } from "../constants/brightSpeakScreens";
import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";

const screens = [screen1, screen2, screen3, screen4];

export default function BrightSpeak() {
  return (
    <main className="min-h-screen px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <SEO
        title="Bright Speak | Free AAC communication app for SEND children"
        description="Bright Speak is a free AAC-style communication and learning app for children with SEND, autism, non-verbal communication needs, and additional learning needs."
        path="/bright-speak"
        schema={brightSpeakSchema}
      />
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow text-brand-sky">Bright Speak</span>
            <h1 className="headline mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A free AAC communication and learning app for children with SEND
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Bright Speak helps children communicate needs, feelings, choices,
              food and drink preferences, and learning concepts through clear
              visual supports.
            </p>
            <p className="mt-4 text-mist leading-relaxed">
              It is completely free, has no advertisements, and includes parent
              controls so adults can shape content around the child they support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrightSpeakStoreBadges />
              <Link to="/schools" className="btn-ghost">
                Schools and pilots
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-6">
            {screens.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={brightSpeakScreenAlts[i]}
                className="aspect-[9/16] rounded-3xl border border-white/10 object-cover shadow-panel"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <TapestryAssociation variant="block" />
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brightSpeakFeatures.map((feature) => (
            <article key={feature} className="surface p-6">
              <h2 className="font-display text-xl font-bold text-frost">
                {feature}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                Designed with clear visual structure, low cognitive load, and
                predictable interaction patterns for everyday communication.
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-brand-sky/25 bg-brand-sky/[0.07] p-8 text-center sm:p-10">
          <h2 className="font-display text-3xl font-bold text-frost">
            Built for families, useful for settings
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-mist leading-relaxed">
            Bright Speak can support home routines, school transitions, nursery
            communication, and early conversations with speech and language
            professionals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/impact" className="btn-primary">
              View impact
            </Link>
            <a href="/#contact" className="btn-ghost">
              Share feedback
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
