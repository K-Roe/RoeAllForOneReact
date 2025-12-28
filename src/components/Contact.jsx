export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 lg:px-20 text-white overflow-hidden"
    >
      {/* soft glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block mb-5 px-6 py-2 rounded-full text-sm border border-white/30 bg-white/10 text-blue-100 shadow-lg shadow-sky-300/20">
          💬 Get In Touch
        </span>

        {/* Title */}
      <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 pb-2 bg-gradient-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent animate-fade">
        Let’s Work Together
      </h2>

        {/* Text */}
        <p className="text-blue-100 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Whether you want to collaborate, hire me, or talk about an Autism / SEN
          focused idea — I’d genuinely love to chat.  
          My goal is to build tools that **help real people** 💙
        </p>

        {/* Card */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-10 max-w-3xl mx-auto shadow-xl shadow-black/40 animate-fade">

          <p className="text-blue-100 text-lg leading-relaxed mb-6">
            Drop me a message anytime — I’m friendly, I care deeply about SEN work,
            and I’m always happy to listen.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">

            {/* Email */}
            <a
              href="mailto:Karlroe919286@msn.com"
              className="px-7 py-3 rounded-lg font-semibold bg-sky-400 text-black hover:bg-sky-500 transition shadow-xl shadow-sky-400/30"
            >
              📧 Email Me
            </a>

            {/* LinkedIn placeholder */}
           <a
            href="https://www.linkedin.com/in/karl-aboltins-roe-249b0417b"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-lg font-semibold border border-white/50 hover:bg-white/10 transition shadow-lg shadow-white/10"
          >
            🔗 LinkedIn
          </a>

            {/* GitHub placeholder */}
            <a
            href="https://github.com/K-Roe"
            target="_blank"
            rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg font-semibold border border-white/50 hover:bg-white/10 transition shadow-lg shadow-white/10"
            >
              🧑‍💻 GitHub
            </a>
          </div>

          <p className="text-blue-200 opacity-70 mt-6">
            More socials & ways to connect coming soon 😊
          </p>
        </div>
      </div>
    </section>
  );
}
