import screen1 from "../assets/brightbuddy1.png";
import screen2 from "../assets/brightbuddy2.png";
import screen3 from "../assets/brightbuddy3.png";

export default function CaseStudyBrightBuddy() {
  return (
    <section className="min-h-screen px-8 lg:px-20 py-20 text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-14">
        <span className="inline-block mb-5 px-6 py-2 rounded-full text-sm border border-white/30 bg-white/10 text-blue-100">
          ⭐ Case Study
        </span>

        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 pb-2 bg-gradient-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
          BrightBuddy
        </h1>

        <p className="text-blue-100 text-xl max-w-4xl leading-relaxed">
          BrightBuddy is a supportive SEN-focused mobile app designed to help autistic children
          feel calmer, more confident and more understood. It provides visual guidance, emotional
          reassurance and simple communication tools that make daily life a little easier for children,
          families and schools.
        </p>
      </div>

      {/* HERO CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-sky-300 mb-2">🎯 Purpose</h3>
          <p className="text-blue-100">
            Help children who struggle with routines, emotions and transitions feel safer,
            supported and in control.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-sky-300 mb-2">🧠 Design Focus</h3>
          <p className="text-blue-100">
            Calm UI, accessibility-first thinking, low sensory overwhelm, predictable structure
            and gentle emotional reassurance.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-sky-300 mb-2">👨‍👩‍👦 Who It Helps</h3>
          <p className="text-blue-100">
            Autistic children, non-verbal users, parents, teachers, SEN teams and carers looking
            for supportive tools.
          </p>
        </div>

      </div>

      {/* PROBLEM & SOLUTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-sky-300 mb-4">❌ The Problem</h2>
          <p className="text-blue-100 leading-relaxed">
            Many autistic children struggle with sudden changes, communication barriers and
            emotional regulation. This can lead to overwhelm, frustration and anxiety — while
            families and teachers try to understand and support them without always knowing how.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-sky-300 mb-4">✅ The Solution</h2>
          <p className="text-blue-100 leading-relaxed">
            BrightBuddy offers a safe, calm digital space with visual supports, emotion tools and
            simple guidance that helps children express themselves, understand their routine and
            feel supported every step of the way.
          </p>
        </div>

      </div>

      {/* SCREENS */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
          Screens & Experience
        </h2>

        <p className="text-blue-100 max-w-3xl mx-auto mb-10">
          Each screen is designed to feel friendly, predictable and supportive — helping children
          feel safe while still providing powerful tools for real everyday situations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[screen1, screen2, screen3].map((img, i) => (
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
          <li>✔ Minimal clutter to reduce overwhelm</li>
          <li>✔ Large, friendly UI elements</li>
          <li>✔ Predictable structure and flow</li>
          <li>✔ Supports emotional regulation & communication</li>
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
          BrightBuddy will continue to grow with more emotional tools, visual communication
          options and SEN-driven features — shaped by real families, real experiences and real needs.
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
