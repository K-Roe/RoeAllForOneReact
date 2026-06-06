import { Link } from "react-router-dom";
import { contactEmail } from "../data/siteContent";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 px-6 py-24 text-frost lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-violet/10 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Talk to BrightSenApps
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              We welcome messages from parents, carers, schools, nurseries,
              speech and language professionals, SENCOs, funders, and charitable
              partners.
            </p>
            <ul className="mt-8 space-y-4 text-mist">
              {[
                "Bright Speak feedback from families and professionals",
                "School and nursery pilot opportunities",
                "Partnerships, funding, and accessibility collaboration",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-sky" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-mist">
              Direct contact
            </p>
            <p className="mt-4 text-mist leading-relaxed">
              Email is the best starting point. Tell us who you support, what you
              are trying to solve, and how BrightSenApps might help.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href={`mailto:${contactEmail}`} className="btn-primary justify-center">
                Email BrightSenApps
              </a>
              <Link to="/schools" className="btn-ghost justify-center">
                Schools and organisations
              </Link>
              <Link to="/donate" className="btn-ghost justify-center">
                Support Bright Speak
              </Link>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.instagram.com/brightsenapps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 min-w-[140px]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/karl-aboltins-roe-249b0417b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 min-w-[140px]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-mist">
              Based in the UK. Building accessible tools for families and
              education settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
