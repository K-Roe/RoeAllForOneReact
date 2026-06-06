import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/brightsenapps.png";

const navItems = [
  { label: "Bright Speak", to: "/bright-speak" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Impact", to: "/impact" },
  { label: "Schools", to: "/schools" },
  { label: "Contact", href: "/#contact" },
];

function navClass({ isActive }) {
  return `rounded-xl px-3 py-2 transition ${
    isActive ? "bg-white/12 text-frost" : "hover:bg-white/[0.06] hover:text-frost"
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-ink-card/80 px-4 py-3 shadow-panel backdrop-blur-2xl sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 font-display font-bold text-frost"
          aria-label="BrightSenApps home"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white p-1 shadow-md">
            <img
              src={logo}
              className="h-full w-full object-contain"
              alt=""
              loading="eager"
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm sm:text-base">
              BrightSenApps
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-mist sm:block">
              SEND communication tools
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 text-sm font-semibold text-mist lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) =>
            item.to ? (
              <NavLink key={item.label} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ) : (
              <a key={item.label} href={item.href} className={navClass({})}>
                {item.label}
              </a>
            )
          )}
          <Link
            to="/donate"
            className="ml-2 shrink-0 rounded-2xl bg-brand-sky px-4 py-2.5 text-xs font-bold text-ink shadow-glow transition hover:bg-brand-skyDim"
          >
            Support the app
          </Link>
        </nav>

        <a
          href="/#contact"
          className="btn-primary hidden !py-2.5 !text-xs sm:inline-flex lg:hidden"
        >
          Contact us
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex size-11 items-center justify-center rounded-xl border border-white/15 text-frost lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className={`h-0.5 w-5 rounded bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav
          className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-panel backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) =>
            item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-semibold text-frost hover:bg-white/[0.06]"
              >
                {item.label}
              </NavLink>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-semibold text-frost hover:bg-white/[0.06]"
              >
                {item.label}
              </a>
            )
          )}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 justify-center"
          >
            Support the app
          </Link>
        </nav>
      )}
    </header>
  );
}
