import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

/* BrightSpeak Screens */
import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";

/* BrightBuddy Screens */
import bb1 from "../assets/brightbuddy1.png";
import bb2 from "../assets/brightbuddy2.png";
import bb3 from "../assets/brightbuddy3.png";

export default function Projects() {
  const [openBrightSpeak, setOpenBrightSpeak] = useState(false);
  const [openBrightBuddy, setOpenBrightBuddy] = useState(false);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 lg:px-20 text-white overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16 animate-fade">
          <span className="inline-block mb-4 px-5 py-2 rounded-full text-sm border border-white/30 bg-white/10 text-blue-100">
            ⭐ My Work
          </span>

          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 pb-2 bg-gradient-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-blue-100 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Apps crafted with care, accessibility and real-world impact.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* BRIGHTSPEAK */}
          <div className="group relative bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl hover:scale-[1.02] transition">
            <div className="absolute -top-5 left-6 px-4 py-2 bg-sky-400 text-black rounded-full text-sm font-semibold shadow-xl">
              Flagship App
            </div>

            <h3 className="text-2xl font-bold mb-3 text-sky-300">
              BrightSpeak
            </h3>

            <p className="text-blue-100 leading-relaxed mb-6">
              A communication app helping non-verbal autistic children
              express emotions and needs using visual tools.
            </p>
            <div className="flex gap-4 items-center">
              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.roe.brightSpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>

              {/* App Store */}
              <a
                href="https://apps.apple.com/gb/app/bright-speak/id6758393898"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-gb?size=250x83"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>


            {/* Screens */}
            <div className="flex gap-3 mb-6">
              {[screen1, screen2, screen3, screen4].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-1/3 h-36 object-cover rounded-xl border border-white/20 shadow-lg"
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setOpenBrightSpeak(true)}
                className="px-4 py-2 bg-sky-400 text-black rounded-lg font-semibold hover:bg-sky-500 transition"
              >
                Learn More
              </button>

              <Link
                to="/case-study/brightspeak"
                className="px-4 py-2 border border-white/40 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Case Study
              </Link>
            </div>
          </div>

          {/* BRIGHTBUDDY */}
          <div className="group relative bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl hover:scale-[1.02] transition">
            <div className="absolute -top-5 left-6 px-4 py-2 bg-pink-400 text-black rounded-full text-sm font-semibold shadow-xl">
              In Development
            </div>

            <h3 className="text-2xl font-bold mb-3 text-pink-300">
              BrightBuddy
            </h3>

            <p className="text-blue-100 leading-relaxed mb-6">
              A calm support app to help autistic children with routines,
              emotions and confidence.
            </p>

            {/* Screens */}
            <div className="flex gap-3 mb-6">
              {[bb1, bb2, bb3].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-1/3 h-36 object-cover rounded-xl border border-white/20 shadow-lg"
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setOpenBrightBuddy(true)}
                className="px-4 py-2 bg-pink-400 text-black rounded-lg font-semibold hover:bg-pink-500 transition"
              >
                Learn More
              </button>

              <Link
                to="/case-study/brightbuddy"
                className="px-4 py-2 border border-white/40 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Case Study
              </Link>
            </div>
          </div>

          {/* COMING SOON */}
          <div className="group relative bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl hover:scale-[1.02] transition">
            <div className="absolute -top-5 left-6 px-4 py-2 bg-purple-400 text-black rounded-full text-sm font-semibold shadow-xl">
              Coming Soon
            </div>

            <h3 className="text-2xl font-bold mb-3 text-purple-300">
              Next SEN App
            </h3>

            <p className="text-blue-100 leading-relaxed mb-6">
              Another supportive SEN-focused mobile app is currently in design.
            </p>

            <div className="h-36 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl mb-6">
              <p className="text-blue-200 opacity-70">More Soon…</p>
            </div>

            <button className="px-4 py-2 border border-white/40 rounded-lg font-semibold hover:bg-white/10 transition">
              Stay Updated
            </button>
          </div>

        </div>
      </div>

      {/* ===================== POPUPS ===================== */}

      {/* BrightSpeak Modal */}
      <Modal open={openBrightSpeak} onClose={() => setOpenBrightSpeak(false)}>
        <h2 className="text-3xl font-bold mb-3 text-sky-300">BrightSpeak</h2>

        <p className="text-blue-100 leading-relaxed mb-6">
          BrightSpeak helps non-verbal autistic children communicate emotions,
          needs and thoughts through visual tools, calm UI and supportive design.
        </p>

        <div className="flex gap-3 mb-6">
          {[screen1, screen2, screen3, screen4].map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-1/3 h-40 object-cover rounded-xl border border-white/20"
            />
          ))}
        </div>

        <Link
          to="/case-study/brightspeak"
          className="px-5 py-3 bg-sky-400 text-black rounded-lg font-semibold hover:bg-sky-500 transition"
        >
          View Full Case Study
        </Link>
      </Modal>

      {/* BrightBuddy Modal */}
      <Modal open={openBrightBuddy} onClose={() => setOpenBrightBuddy(false)}>
        <h2 className="text-3xl font-bold mb-3 text-pink-300">BrightBuddy</h2>

        <p className="text-blue-100 leading-relaxed mb-6">
          BrightBuddy helps autistic children feel calmer, more confident and supported
          using gentle visuals, routine helpers and emotional reassurance tools.
        </p>

        <div className="flex gap-3 mb-6">
          {[bb1, bb2, bb3].map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-1/3 h-40 object-cover rounded-xl border border-white/20"
            />
          ))}
        </div>

        <Link
          to="/case-study/brightbuddy"
          className="px-5 py-3 bg-pink-400 text-black rounded-lg font-semibold hover:bg-pink-500 transition"
        >
          View Full Case Study
        </Link>
      </Modal>
    </section>
  );
}
