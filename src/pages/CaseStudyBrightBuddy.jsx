import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import screen1 from "../assets/brightbuddy1.png";
import screen2 from "../assets/brightbuddy2.png";
import screen3 from "../assets/brightbuddy3.png";

export default function CaseStudyBrightBuddy() {
  return (
    <main className="min-h-screen px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <SEO
        title="Future SEND tools | BrightSenApps"
        description="BrightSenApps is exploring future accessible digital tools for routines, emotions, confidence, and communication support."
        path="/case-study/brightBuddy"
      />
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow text-brand-coral">Future tools</span>

        <h1 className="headline mt-6 text-5xl sm:text-6xl">
          BrightBuddy
        </h1>

        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-mist">
          BrightBuddy is an early concept for routine, emotion, and confidence
          support. It remains part of the BrightSenApps development journey, but
          Bright Speak is the current flagship product and primary public focus.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Purpose",
              b: "Support children who benefit from visual routines, gentle reassurance, and emotional regulation tools.",
            },
            {
              t: "Design focus",
              b: "Calm screens, predictable structure, low sensory load, and accessible visual guidance.",
            },
            {
              t: "Status",
              b: "Concept and development exploration. Future work will be shaped by family and professional feedback.",
            },
          ].map((c) => (
            <article key={c.t} className="surface p-6">
              <h2 className="font-display text-lg font-bold text-brand-coral">
                {c.t}
              </h2>
              <p className="mt-2 text-mist leading-relaxed">{c.b}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="headline text-3xl sm:text-4xl">
            Concept screens
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-mist">
            Early design thinking for future BrightSenApps tools.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[screen1, screen2, screen3].map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`BrightBuddy concept screen ${i + 1}`}
                className="rounded-3xl border border-white/10 shadow-panel"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-brand-coral/25 bg-brand-coral/[0.08] p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-frost">
            Bright Speak comes first
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-mist">
            The organisation is currently focused on improving Bright Speak,
            supporting family access, and learning from schools and partners.
          </p>
          <Link to="/bright-speak" className="btn-primary mt-8 inline-flex">
            View Bright Speak
          </Link>
        </div>
      </div>
    </main>
  );
}
