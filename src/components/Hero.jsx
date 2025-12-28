import AndroidPhone from "../components/AndroidPhone";
import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center px-8 lg:px-20 py-20 text-white overflow-hidden">

      {/* Floating Shapes */}
      <div className="absolute w-72 h-72 bg-sky-500/30 blur-3xl rounded-full top-10 left-10 animate-float"></div>
      <div className="absolute w-72 h-72 bg-pink-400/30 blur-3xl rounded-full bottom-10 right-10 animate-float-delayed"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="animate-fade">
          <span className="inline-block mb-6 px-6 py-3 rounded-full text-sm border border-white/30 bg-white/10 text-blue-100 tracking-wide shadow-xl shadow-sky-400/20">
            🌈 Autism & SEN Focused App Developer
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.15] mb-8 pb-1 bg-gradient-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
            Building Mobile Apps  
            That Support, Empower  
            & Give A Voice 💙
          </h1>

          <p className="text-xl text-blue-100 leading-loose mb-10 max-w-2xl">
            I’m Karl — I build calm, thoughtful and supportive React Native apps
            designed specially for Autism & SEN users. My focus is emotional
            comfort, accessibility and real-world impact.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-sky-400 text-black hover:bg-sky-500 transition shadow-xl shadow-sky-400/40"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/60 hover:bg-white/10 transition shadow-xl shadow-white/10"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* RIGHT PHONE */}
        <div className="flex justify-center lg:justify-end animate-fade-slow">
          <AndroidPhone
            images={[screen1, screen2, screen3, screen4]}
            interval={3000}
          />
        </div>

      </div>
    </section>
  );
}
