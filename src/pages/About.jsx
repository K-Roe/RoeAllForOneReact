import { useEffect } from "react";
import karlPhoto from "../assets/Karl.jpg";
import joelPhoto from "../assets/Joel.png";

const DEFAULT_TITLE = "BrightSenApps - SEN mobile app company";

const staff = [
 {
  name: "Karl Aboltins-Roe",
  role: "Founder",
  image: karlPhoto,
  imageLabel: "Karl and Mikey",
  accent: "text-brand-sky",
  description:
    "I founded BrightSenApps after experiencing first-hand the challenges and importance of communication support for children with additional needs. Inspired by my son, Michael, I created BrightSenApps to provide accessible, practical, and engaging tools that help children communicate, learn, and express themselves. As both a parent and a software developer, I combine real-world experience with technology to build solutions that support families, educators, and care professionals.",
},
  {
    name: "Joel Bellis",
    role: "Co-founder",
    image: joelPhoto,
    imageLabel: "Joel photo",
    accent: "text-brand-mint",
    description:
      "Joel works alongside Karl on the development and direction of BrightSenApps. As co-founder, he supports the company's planning, product decisions, and long-term growth, helping ensure each app is built with purpose, reliability, and the needs of users at its centre.",
  },
];

function StaffImage({ image, label }) {
  if (image) {
    return (
      <div className="relative aspect-[4/5] min-h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 sm:min-h-80 lg:min-h-0">
        <img
          src={image}
          alt={label}
          className="size-full object-cover object-center"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[4/5] min-h-64 w-full items-center justify-center overflow-hidden rounded-3xl border border-dashed border-white/20 bg-white/[0.04] sm:min-h-80 lg:min-h-0">
      <div
        className="absolute inset-0 bg-[length:32px_32px] bg-grid-fade opacity-30"
        aria-hidden
      />
      <div className="relative flex size-24 items-center justify-center rounded-full border border-white/15 bg-ink-card/80 text-center text-xs font-bold uppercase tracking-[0.16em] text-mist">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    const previous = document.title;
    document.title = "About BrightSenApps - SEN mobile app company";
    return () => {
      document.title = previous || DEFAULT_TITLE;
    };
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <section className="max-w-4xl">
          <span className="eyebrow text-brand-sky">About BrightSenApps</span>
          <h1 className="headline mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">BrightSenApps</span> builds
            accessible SEN apps for everyday support
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mist sm:text-xl">
            BrightSenApps develops mobile applications for children with special
            educational needs, families, carers, schools, and support
            professionals. The company focuses on accessible communication,
            calm user experience, and practical tools that are simple to use in
            real daily settings.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-mist">
            Our aim is to provide reliable, thoughtfully designed products that
            help make communication, routines, and support more manageable. Each
            app is built with attention to clarity, accessibility, and the people
            who rely on these tools every day.
          </p>
        </section>

        <section className="mt-14 space-y-8" aria-label="Staff profiles">
          {staff.map((person, index) => (
            <article
              key={person.name}
              className="surface surface-hover grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-12 lg:items-center"
            >
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <StaffImage image={person.image} label={person.imageLabel} />
              </div>

              <div className="lg:col-span-7">
                <p
                  className={`text-xs font-bold uppercase tracking-[0.18em] ${person.accent}`}
                >
                  {person.role}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-frost sm:text-4xl">
                  {person.name}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
                  {person.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
