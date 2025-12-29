import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import meandmikey from "../assets/meandmikey.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState("");

  const location = useLocation();
  const isCaseStudy = location.pathname.includes("/case-study");

  // Scroll active highlight
  useEffect(() => {
    const sections = ["projects", "contact"];

    const handleScroll = () => {
      sections.forEach((id) => {
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

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          max-w-7xl mx-auto flex items-center justify-between
          px-6 lg:px-12 py-4
          bg-gradient-to-r from-sky-500/20 to-blue-900/10
          border-b border-white/10
          backdrop-blur-xl shadow-xl
        "
      >
        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold flex items-center gap-3">
        <img
          src={meandmikey}
          className="w-10 h-10 object-cover rounded-full border border-white/40 shadow-lg"
          alt="Karl and Mikey"
          loading="lazy"
        />
          <span
            className="bg-gradient-to-r from-sky-300 via-white to-sky-200 
          bg-clip-text text-transparent"
          >
            Karl Aboltins-Roe
          </span>
        </Link>

        {/* DESKTOP NAV */}
        {!isCaseStudy && (
          <nav className="hidden md:flex gap-6 text-blue-100 font-semibold items-center">
            <a
              href="/#projects"
              className={`px-3 py-2 rounded-xl transition ${
                active === "projects"
                  ? "bg-white/20 text-white"
                  : "hover:bg-white/10"
              }`}
            >
              Projects
            </a>

            <a
              href="/#contact"
              className={`px-3 py-2 rounded-xl transition ${
                active === "contact"
                  ? "bg-white/20 text-white"
                  : "hover:bg-white/10"
              }`}
            >
              Contact
            </a>

            {/* DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition"
              >
                My Apps ▼
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-black/80 border border-white/20 backdrop-blur-xl p-4 flex flex-col gap-2">
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
            className="px-5 py-2 bg-sky-400 text-black font-semibold rounded-xl hover:bg-sky-500 transition shadow-lg"
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
        <div
          className="md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10 
        text-white px-6 py-6 flex flex-col gap-4"
        >
          <a href="/#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <Link
            to="/case-study/brightspeak"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-xl bg-sky-400 text-black font-semibold hover:bg-sky-500 transition inline-block"
          >
            BrightSpeak
          </Link>
        </div>
      )}
    </header>
  );
}
