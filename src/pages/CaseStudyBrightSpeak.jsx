import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";

export default function CaseStudyBrightSpeak() {
  return (
    <section className="min-h-screen px-8 lg:px-20 py-20 text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-14">
        <span className="inline-block mb-5 px-6 py-2 rounded-full text-sm border border-white/30 bg-white/10 text-blue-100">
          ⭐ Case Study
        </span>

        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 pb-2 bg-gradient-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
          BrightSpeak
        </h1>

        <p className="text-blue-100 text-xl max-w-4xl leading-relaxed">
          BrightSpeak is a React Native mobile app designed to help non-verbal autistic
          children communicate more confidently through calm, visual and emotionally
          supportive tools — bridging the gap between children, families and schools.
        </p>
      </div>

      {/* HERO CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-sky-300 mb-2">🎯 Purpose</h3>
          <p className="text-blue-100">
            Empower children who struggle with verbal communication to express needs,
            emotions and thoughts without stress.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-sky-300 mb-2">🧠 Design Focus</h3>
          <p className="text-blue-100">
            Calm UI, accessibility-first experience, low cognitive load, and emotional
            reassurance throughout interactions.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-sky-300 mb-2">👨‍👩‍👦 Who It Helps</h3>
          <p className="text-blue-100">
            Non-verbal autistic children, parents, teachers, SEN support teams and carers.
          </p>
        </div>

      </div>

      {/* PROBLEM & SOLUTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-sky-300 mb-4">❌ The Problem</h2>
          <p className="text-blue-100 leading-relaxed">
            Many autistic children struggle to communicate verbally. This can lead to
            frustration, anxiety, emotional overwhelm and difficulty expressing needs—
            while parents and teachers are left guessing how to help.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-sky-300 mb-4">✅ The Solution</h2>
          <p className="text-blue-100 leading-relaxed">
            BrightSpeak provides a safe, visual communication bridge — allowing children
            to express emotions, choices and needs through intuitive icons, calming
            visuals and supportive UI feedback.
          </p>
        </div>

      </div>

      {/* SCREENSHOTS */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
          Screens & Experience
        </h2>

        <p className="text-blue-100 max-w-3xl mx-auto mb-10">
          Designed to feel friendly, safe and approachable — while still being powerful,
          clear and structured.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[screen1, screen2, screen3, screen4].map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-2xl border border-white/20 shadow-xl shadow-black/40"
            />
          ))}
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <div className="max-w-6xl mx-auto bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl mb-20">
        <h2 className="text-4xl font-bold text-sky-300 mb-4">
          ♿ Accessibility & SEN Focus
        </h2>

        <ul className="text-blue-100 leading-loose text-lg">
          <li>✔ Calming colour palette</li>
          <li>✔ Minimal clutter / reduced overwhelm</li>
          <li>✔ Large, friendly UI elements</li>
          <li>✔ Emotionally safe design choices</li>
          <li>✔ Supports emotional regulation & confidence</li>
        </ul>
      </div>

      {/* TECH */}
      <div className="max-w-6xl mx-auto bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl mb-20">
        <h2 className="text-4xl font-bold text-sky-300 mb-4">
          🛠️ Tech
        </h2>

        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100">
            React Native
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100">
            Expo
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100">
            Android
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          This is just the beginning 💙
        </h2>

        <p className="text-blue-100 max-w-3xl mx-auto mb-8">
          BrightSpeak will continue to grow with more tools, emotional support
          features, visual communication options and SEN-driven enhancements.
        </p>

        <a
          href="/"
          className="px-7 py-3 bg-sky-400 text-black rounded-lg font-semibold hover:bg-sky-500 transition"
        >
          Back To Portfolio
        </a>
      </div>
    </section>
  );
}
