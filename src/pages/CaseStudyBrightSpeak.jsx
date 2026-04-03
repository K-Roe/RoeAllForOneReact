import { Link } from "react-router-dom";
import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";

export default function CaseStudyBrightSpeak() {
  return (
    <section className="min-h-screen px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow text-brand-sky">Case study</span>

        <h1 className="headline mt-6 text-5xl sm:text-6xl">
          <span className="gradient-text">BrightSpeak</span>
        </h1>

        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-mist">
          BrightSpeak is a React Native mobile app designed to help non-verbal
          autistic children communicate more confidently through calm, visual and
          emotionally supportive tools — bridging the gap between children,
          families and schools.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Purpose",
              b: "Empower children who struggle with verbal communication to express needs, emotions and thoughts without stress.",
            },
            {
              t: "Design focus",
              b: "Calm UI, accessibility-first experience, low cognitive load, and emotional reassurance throughout interactions.",
            },
            {
              t: "Who it helps",
              b: "Non-verbal autistic children, parents, teachers, SEN support teams and carers.",
            },
          ].map((c) => (
            <div key={c.t} className="surface p-6">
              <h3 className="font-display text-lg font-bold text-brand-sky">
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
              Many autistic children struggle to communicate verbally. This can
              lead to frustration, anxiety, emotional overwhelm and difficulty
              expressing needs — while parents and teachers are left guessing how
              to help.
            </p>
          </div>
          <div className="surface p-8">
            <h2 className="font-display text-2xl font-bold text-brand-mint">
              The solution
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              BrightSpeak provides a safe, visual communication bridge —
              allowing children to express emotions, choices and needs through
              intuitive icons, calming visuals and supportive UI feedback.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="headline text-3xl sm:text-4xl">
            <span className="gradient-text">Screens &amp; experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-mist">
            Designed to feel friendly, safe and approachable — while still being
            powerful, clear and structured.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[screen1, screen2, screen3, screen4].map((img, i) => (
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
          <h2 className="font-display text-3xl font-bold text-brand-sky">
            Accessibility &amp; SEN focus
          </h2>
          <ul className="mt-6 space-y-2 text-lg leading-relaxed text-mist">
            <li>Calming colour palette</li>
            <li>Minimal clutter / reduced overwhelm</li>
            <li>Large, friendly UI elements</li>
            <li>Emotionally safe design choices</li>
            <li>Supports emotional regulation &amp; confidence</li>
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

        <div className="mt-20 rounded-3xl border border-brand-sky/25 bg-gradient-to-br from-brand-sky/10 to-transparent p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-frost">
            This is just the beginning
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-mist">
            BrightSpeak will continue to grow with more tools, emotional support
            features, visual communication options and SEN-driven enhancements.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            Back to portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
