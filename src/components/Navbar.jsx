import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState("");

  const location = useLocation();


  // Scroll active highlight
  useEffect(() => {
    const sections = ["projects", "contact"];

    const handleScroll = () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCaseStudy = location.pathname.includes("/case-study");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between 
      px-6 lg:px-12 py-4 bg-white/10 dark:bg-black/40 
      border-b border-white/20 backdrop-blur-xl shadow-xl">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold flex items-center gap-2">
          <img
            src="https://ui-avatars.com/api/?name=Karl&background=38bdf8&color=000"
            className="w-10 h-10 rounded-full border border-white/30"
          />

          <span className="bg-gradient-to-r from-sky-300 via-white to-sky-200 
          bg-clip-text text-transparent">
            Karl Aboltins-Roe
          </span>

          <span className="text-blue-100 dark:text-blue-200">
            — Roe All For One
          </span>
        </Link>

        {/* DESKTOP NAV */}
        {!isCaseStudy && (
          <nav className="hidden md:flex gap-8 text-blue-100 dark:text-blue-200 font-medium items-center">

            <a
              href="/#projects"
              className={`relative transition ${
                active === "projects" ? "text-white" : ""
              }`}
            >
              Projects
              <span
                className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-sky-400 transition 
                ${active === "projects" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              ></span>
            </a>

            <a
              href="/#contact"
              className={`relative transition ${
                active === "contact" ? "text-white" : ""
              }`}
            >
              Contact
              <span
                className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-sky-400 transition 
                ${active === "contact" ? "opacity-100" : "opacity-0"}`}
              ></span>
            </a>

            {/* DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="px-4 py-2 bg-white/10 border border-white/30 rounded-lg hover:bg-white/20 transition"
              >
                Case Studies ▼
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-black/80 border border-white/20 backdrop-blur-xl p-4 flex flex-col gap-2">
                  <Link
                    onClick={() => setDropdown(false)}
                    to="/case-study/brightspeak"
                    className="hover:text-sky-300"
                  >
                    BrightSpeak
                  </Link>

                  <p className="opacity-60">More coming soon…</p>
                </div>
              )}
            </div>
          </nav>
        )}

        {/* BACK BUTTON ONLY ON CASE STUDY */}
        {isCaseStudy && (
          <Link
            to="/"
            className="px-5 py-2 bg-sky-400 text-black font-semibold rounded-lg hover:bg-sky-500 transition"
          >
            ← Back to Portfolio
          </Link>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && !isCaseStudy && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10 
        text-white px-6 py-6 flex flex-col gap-4">

          <a href="/#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <Link
            to="/case-study/brightspeak"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg bg-sky-400 text-black font-semibold hover:bg-sky-500 transition inline-block"
          >
            BrightSpeak Case Study
          </Link>
        </div>
      )}
    </header>
  );
}
