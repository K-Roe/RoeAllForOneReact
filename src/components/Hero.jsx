import { Link } from "react-router-dom";
import AndroidPhone from "./AndroidPhone";
import BrightSpeakStoreBadges from "./BrightSpeakStoreBadges";
import TapestryAssociation from "./TapestryAssociation";
import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";
import logo from "../assets/brightsenapps.png";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[92dvh] overflow-hidden px-6 pb-20 pt-8 text-frost lg:px-16 lg:pb-24 lg:pt-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-[0.35]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between animate-fade">
          <div className="surface inline-flex items-center gap-4 px-4 py-3 pr-6">
            <img
              src={logo}
              alt="BrightSenApps"
              className="h-14 w-auto max-w-[9.5rem] object-contain object-left sm:h-16 sm:max-w-[11rem]"
            />
            <div className="hidden h-14 w-px bg-white/15 sm:block sm:h-16" aria-hidden />
            <p className="max-w-xs text-sm leading-snug text-mist">
              Free AAC communication and learning support for children with SEND.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <div className="eyebrow border-brand-sky/30 bg-brand-sky/[0.08] text-brand-sky">
              Bright Speak is free on iOS and Android
            </div>
            <TapestryAssociation variant="hero" />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 animate-fade">
            <h1 className="headline text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[3.5rem]">
              Accessible communication tools for{" "}
              <span className="gradient-text">children with SEND</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              BrightSenApps creates friendly digital tools for children with
              special educational needs, communication difficulties, autism, and
              additional learning needs.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-mist/90">
              Our flagship app, Bright Speak, helps children communicate needs,
              feelings, choices, and learning concepts through calm visual
              supports. It is completely free, has no advertisements, and is
              shaped by real parent feedback.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/bright-speak" className="btn-primary">
                Learn about Bright Speak
              </Link>
              <a href="#contact" className="btn-ghost">
                Contact us
              </a>
            </div>

            <BrightSpeakStoreBadges className="mt-8" />
          </div>

          <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
            <div className="relative w-fit animate-float">
              <span className="absolute -left-2 top-6 z-10 rounded-full bg-brand-sky/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-lg">
                Bright Speak
              </span>
              <AndroidPhone
                images={[screen1, screen2, screen3, screen4]}
                interval={3000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
