import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import meandmikey from "../assets/meandmikey.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState("");

  const location = useLocation();
  const isCaseStudy = location.pathname.includes("/case-study");

  useEffect(() => {
    const sections = ["services", "projects", "contact"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          setActive(id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-ink-card/75 px-4 py-3 shadow-panel backdrop-blur-2xl sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 font-display font-bold text-frost"
        >
          <img
            src={meandmikey}
            className="size-10 shrink-0 rounded-2xl border border-white/15 object-cover shadow-md"
            alt="Karl and Mikey"
            loading="lazy"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm sm:text-base">BrightSen</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-mist sm:block">
              Apps · Websites
            </span>
          </span>
        </Link>

        {!isCaseStudy && (
          <>
            <nav className="hidden items-center gap-1 text-sm font-semibold text-mist md:flex">
              <a
                href="/#services"
                className={`rounded-xl px-3 py-2 transition ${
                  active === "services"
                    ? "bg-white/12 text-frost"
                    : "hover:bg-white/[0.06] hover:text-frost"
                }`}
              >
                Websites
              </a>
              <a
                href="/#projects"
                className={`rounded-xl px-3 py-2 transition ${
                  active === "projects"
                    ? "bg-white/12 text-frost"
                    : "hover:bg-white/[0.06] hover:text-frost"
                }`}
              >
                App work
              </a>
              <a
                href="/#contact"
                className={`rounded-xl px-3 py-2 transition ${
                  active === "contact"
                    ? "bg-white/12 text-frost"
                    : "hover:bg-white/[0.06] hover:text-frost"
                }`}
              >
                Contact
              </a>

              <div className="relative ml-1">
                <button
                  type="button"
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-1 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-frost transition hover:border-white/25"
                >
                  Case studies
                  <span className="text-xs opacity-70" aria-hidden>
                    ▼
                  </span>
                </button>

                {dropdown && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/10 bg-ink/95 p-3 shadow-panel backdrop-blur-xl">
                    <Link
                      onClick={() => setDropdown(false)}
                      to="/case-study/brightspeak"
                      className="block rounded-xl px-3 py-2 text-frost hover:bg-white/[0.06]"
                    >
                      BrightSpeak
                    </Link>
                    <Link
                      onClick={() => setDropdown(false)}
                      to="/case-study/brightBuddy"
                      className="block rounded-xl px-3 py-2 text-frost hover:bg-white/[0.06]"
                    >
                      BrightBuddy
                    </Link>
                    <p className="mt-2 border-t border-white/10 px-3 pt-2 text-xs text-mist/80">
                      More soon…
                    </p>
                  </div>
                )}
              </div>

              <a
                href="/#contact"
                className="ml-2 shrink-0 rounded-2xl bg-gradient-to-r from-brand-amber to-amber-400 px-4 py-2.5 text-xs font-bold text-ink shadow-glow-warm transition hover:brightness-110"
              >
                Hire for a site
              </a>
            </nav>

            <a
              href="/#contact"
              className="btn-warm hidden !py-2.5 !text-xs sm:inline-flex md:hidden"
            >
              Hire me
            </a>
          </>
        )}

        {isCaseStudy && (
          <Link
            to="/"
            className="rounded-2xl bg-brand-sky px-5 py-2.5 text-sm font-bold text-ink shadow-glow transition hover:bg-brand-skyDim"
          >
            ← Portfolio
          </Link>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex size-11 items-center justify-center rounded-xl border border-white/15 text-xl text-frost md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && !isCaseStudy && (
        <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-panel backdrop-blur-xl md:hidden">
          <a
            href="/#services"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 font-semibold text-frost hover:bg-white/[0.06]"
          >
            Websites
          </a>
          <a
            href="/#projects"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 font-semibold text-frost hover:bg-white/[0.06]"
          >
            App work
          </a>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 font-semibold text-frost hover:bg-white/[0.06]"
          >
            Contact
          </a>
          <Link
            to="/case-study/brightspeak"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 font-semibold text-brand-sky hover:bg-white/[0.06]"
          >
            BrightSpeak case study
          </Link>
          <Link
            to="/case-study/brightBuddy"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 font-semibold text-brand-sky hover:bg-white/[0.06]"
          >
            BrightBuddy case study
          </Link>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-warm mt-2 justify-center"
          >
            Hire for a website
          </a>
        </div>
      )}
    </header>
  );
}
