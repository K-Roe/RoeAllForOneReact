import { Link } from "react-router-dom";
import screen1 from "../assets/brightbuddy1.png";
import screen2 from "../assets/brightbuddy2.png";
import screen3 from "../assets/brightbuddy3.png";

export default function CaseStudyBrightBuddy() {
  return (
    <section className="min-h-screen px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow text-brand-coral">Case study</span>

        <h1 className="headline mt-6 text-5xl sm:text-6xl">
          <span className="bg-gradient-to-r from-brand-coral via-frost to-brand-violet bg-clip-text text-transparent">
            BrightBuddy
          </span>
        </h1>

        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-mist">
          BrightBuddy is a supportive SEN-focused mobile app designed to help
          autistic children feel calmer, more confident and more understood. It
          provides visual guidance, emotional reassurance and simple communication
          tools that make daily life a little easier for children, families and
          schools.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Purpose",
              b: "Help children who struggle with routines, emotions and transitions feel safer, supported and in control.",
            },
            {
              t: "Design focus",
              b: "Calm UI, accessibility-first thinking, low sensory overwhelm, predictable structure and gentle emotional reassurance.",
            },
            {
              t: "Who it helps",
              b: "Autistic children, non-verbal users, parents, teachers, SEN teams and carers looking for supportive tools.",
            },
          ].map((c) => (
            <div key={c.t} className="surface p-6">
              <h3 className="font-display text-lg font-bold text-brand-coral">
                {c.t}
              </h3>
              <p className="mt-2 text-mist leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="surface p-8">
            <h2 className="font-display text-2xl font-bold text-brand-coral">
              The problem
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              Many autistic children struggle with sudden changes, communication
              barriers and emotional regulation. This can lead to overwhelm,
              frustration and anxiety — while families and teachers try to
              understand and support them without always knowing how.
            </p>
          </div>
          <div className="surface p-8">
            <h2 className="font-display text-2xl font-bold text-brand-mint">
              The solution
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              BrightBuddy offers a safe, calm digital space with visual supports,
              emotion tools and simple guidance that helps children express
              themselves, understand their routine and feel supported every step of
              the way.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="headline text-3xl sm:text-4xl">
            <span className="bg-gradient-to-r from-brand-coral via-frost to-brand-amber bg-clip-text text-transparent">
              Screens &amp; experience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-mist">
            Each screen is designed to feel friendly, predictable and supportive
            — helping children feel safe while still providing powerful tools for
            real everyday situations.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[screen1, screen2, screen3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="rounded-3xl border border-white/10 shadow-panel"
              />
            ))}
          </div>
        </div>

        <div className="surface mt-20 p-8 sm:p-10">
          <h2 className="font-display text-3xl font-bold text-brand-coral">
            Accessibility &amp; SEN focus
          </h2>
          <ul className="mt-6 space-y-2 text-lg leading-relaxed text-mist">
            <li>Calming colour palette</li>
            <li>Minimal clutter to reduce overwhelm</li>
            <li>Large, friendly UI elements</li>
            <li>Predictable structure and flow</li>
            <li>Supports emotional regulation &amp; communication</li>
          </ul>
        </div>

        <div className="surface mt-10 p-8 sm:p-10">
          <h2 className="font-display text-3xl font-bold text-frost">Tech</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {["React Native", "Expo", "Android"].map((x) => (
              <span
                key={x}
                className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-mist"
              >
                {x}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-brand-coral/25 bg-gradient-to-br from-brand-coral/10 to-transparent p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-frost">
            This is just the beginning
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-mist">
            BrightBuddy will continue to grow with more emotional tools, visual
            communication options and SEN-driven features — shaped by real
            families, real experiences and real needs.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-2xl bg-brand-coral px-7 py-3.5 text-sm font-bold text-ink shadow-lg transition hover:brightness-110"
          >
            Back to portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
