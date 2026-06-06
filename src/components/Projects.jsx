import { Link } from "react-router-dom";
import BrightSpeakStoreBadges from "./BrightSpeakStoreBadges";
import TapestryAssociation from "./TapestryAssociation";
import { brightSpeakFeatures, testimonials } from "../data/siteContent";
import { brightSpeakScreenAlts } from "../constants/brightSpeakScreens";
import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";

const screens = [screen1, screen2, screen3, screen4];

export default function Projects() {
  return (
    <>
      <section
        id="products"
        className="relative scroll-mt-28 px-6 py-24 text-frost lg:px-20"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-sky/5 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl animate-fade">
            <span className="eyebrow text-brand-sky">Our products</span>
            <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl">
              <span className="gradient-text">Bright Speak</span> leads our SEND
              communication work
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              BrightSenApps focuses on accessible educational technology that
              families, schools, nurseries, and SEND professionals can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <article className="surface surface-hover group relative overflow-hidden p-8 lg:col-span-7">
              <span className="relative mb-4 inline-flex w-fit rounded-full bg-brand-sky/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-sky">
                Flagship app
              </span>
              <h3 className="relative font-display text-3xl font-bold text-frost">
                Bright Speak
              </h3>
              <p className="relative mt-4 max-w-2xl text-mist leading-relaxed">
                A free AAC-style communication and learning app for children who
                benefit from visual support, including non-verbal children,
                autistic children, and children with additional learning needs.
              </p>

              <TapestryAssociation variant="card" />
              <BrightSpeakStoreBadges className="relative mt-6" />

              <div className="relative mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {screens.map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={brightSpeakScreenAlts[i]}
                    className="aspect-[9/16] min-w-0 rounded-2xl border border-white/10 object-cover"
                    loading="lazy"
                  />
                ))}
              </div>

              <div className="relative mt-8 flex flex-wrap gap-3">
                <Link to="/bright-speak" className="btn-primary">
                  Explore Bright Speak
                </Link>
                <Link to="/impact" className="btn-ghost">
                  See impact
                </Link>
              </div>
            </article>

            <aside className="grid gap-8 lg:col-span-5">
              <article className="surface p-8">
                <h3 className="font-display text-2xl font-bold text-frost">
                  What it supports
                </h3>
                <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-mist sm:grid-cols-2">
                  {brightSpeakFeatures.slice(0, 8).map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-mint" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="surface p-8">
                <span className="mb-4 inline-flex w-fit rounded-full bg-brand-coral/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-coral">
                  In development
                </span>
                <h3 className="font-display text-2xl font-bold text-frost">
                  Future tools
                </h3>
                <p className="mt-3 text-mist leading-relaxed">
                  BrightSenApps is growing beyond one app. New ideas will stay
                  grounded in calm design, accessibility, family feedback, and
                  practical support for SEND settings.
                </p>
                <Link to="/schools" className="btn-ghost mt-6">
                  Partner with us
                </Link>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-frost lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow text-brand-mint">Impact</span>
            <h2 className="headline mt-5 text-3xl sm:text-4xl">
              Built around real communication needs
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.source} className="surface p-6">
                <p className="text-mist leading-relaxed">"{item.quote}"</p>
                <footer className="mt-5 text-sm font-bold text-brand-sky">
                  {item.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
