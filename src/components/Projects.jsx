import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";

import bb1 from "../assets/brightbuddy1.png";
import bb2 from "../assets/brightbuddy2.png";
import bb3 from "../assets/brightbuddy3.png";

import shopHome from "../assets/shop-madebygeeks-home.png";
import shopAdminOverview from "../assets/shop-admin-overview.png";
import shopAdminProducts from "../assets/shop-admin-products.png";
import shopAdminOrders from "../assets/shop-admin-orders.png";

export default function Projects() {
  const [openBrightSpeak, setOpenBrightSpeak] = useState(false);
  const [openBrightBuddy, setOpenBrightBuddy] = useState(false);
  const [openMadeByGeeks, setOpenMadeByGeeks] = useState(false);

  return (
    <section
      id="projects"
      className="relative scroll-mt-28 py-24 text-frost lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-sky/5 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-0">
        <div className="mb-16 max-w-3xl animate-fade">
          <span className="eyebrow text-brand-sky">Portfolio</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl">
            <span className="gradient-text">SEN apps</span>
            <span className="text-mist"> &amp; </span>
            <span className="gradient-text-warm">web builds</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            React Native products for families and educators, plus full-stack
            sites — storefronts, admin dashboards, payments — built with the same
            focus on clarity, performance and accessible UI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="surface surface-hover group relative flex flex-col overflow-hidden p-8">
            <div className="absolute -right-6 -top-6 size-28 rounded-full bg-brand-sky/15 blur-2xl transition group-hover:bg-brand-sky/25" />
            <span className="relative mb-4 inline-flex w-fit rounded-full bg-brand-sky/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-sky">
              Flagship
            </span>
            <h3 className="relative font-display text-2xl font-bold text-frost">
              BrightSpeak
            </h3>
            <p className="relative mt-3 flex-1 text-mist leading-relaxed">
              Communication support for non-verbal autistic children — visual
              tools, calm UI, real empathy in the details.
            </p>

            <div className="relative mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.roe.brightSpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              <a
                href="https://apps.apple.com/gb/app/bright-speak/id6758393898"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-gb?size=250x83"
                  alt="Download on the App Store"
                  className="h-9"
                />
              </a>
            </div>

            <div className="relative mt-6 flex gap-2 overflow-hidden rounded-2xl border border-white/10">
              {[screen1, screen2, screen3, screen4].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="h-32 min-w-0 flex-1 object-cover"
                />
              ))}
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setOpenBrightSpeak(true)}
                className="rounded-xl bg-brand-sky px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-brand-skyDim"
              >
                Learn more
              </button>
              <Link
                to="/case-study/brightspeak"
                className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-frost transition hover:bg-white/[0.06]"
              >
                Case study
              </Link>
            </div>
          </article>

          <article className="surface surface-hover group relative flex flex-col overflow-hidden p-8">
            <div className="absolute -right-6 -top-6 size-28 rounded-full bg-brand-coral/15 blur-2xl transition group-hover:bg-brand-coral/25" />
            <span className="relative mb-4 inline-flex w-fit rounded-full bg-brand-coral/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-coral">
              In development
            </span>
            <h3 className="relative font-display text-2xl font-bold text-frost">
              BrightBuddy
            </h3>
            <p className="relative mt-3 flex-1 text-mist leading-relaxed">
              Routine, emotions and confidence — gentle support for autistic
              children and the adults who care for them.
            </p>

            <div className="relative mt-6 flex gap-2 overflow-hidden rounded-2xl border border-white/10">
              {[bb1, bb2, bb3].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="h-32 min-w-0 flex-1 object-cover"
                />
              ))}
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setOpenBrightBuddy(true)}
                className="rounded-xl bg-brand-coral px-4 py-2.5 text-sm font-bold text-ink transition hover:brightness-110"
              >
                Learn more
              </button>
              <Link
                to="/case-study/brightBuddy"
                className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-frost transition hover:bg-white/[0.06]"
              >
                Case study
              </Link>
            </div>
          </article>

          <article className="surface surface-hover group relative flex flex-col overflow-hidden border-brand-amber/20 p-8 ring-1 ring-brand-amber/10">
            <div className="absolute -right-6 -top-6 size-28 rounded-full bg-brand-amber/15 blur-2xl transition group-hover:bg-brand-amber/25" />
            <span className="relative mb-4 inline-flex w-fit rounded-full bg-brand-amber/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-amber">
              Laravel shop
            </span>
            <h3 className="relative font-display text-2xl font-bold text-frost">
              Made by Geeks
            </h3>
            <p className="relative mt-3 flex-1 text-mist leading-relaxed">
              Collectibles storefront with cart, timed sales, coupons — and a
              full admin for catalog, orders, Stripe payments and invoices.
            </p>
            <p className="relative mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider text-mist">
              <span className="rounded-md bg-white/[0.06] px-2 py-1 text-frost/90">
                Laravel
              </span>
              <span className="rounded-md bg-white/[0.06] px-2 py-1 text-frost/90">
                Stripe
              </span>
              <span className="rounded-md bg-white/[0.06] px-2 py-1 text-frost/90">
                Tailwind
              </span>
            </p>

            <div className="relative mt-6 grid grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={shopHome}
                alt=""
                className="h-28 w-full object-cover object-top"
              />
              <img
                src={shopAdminOverview}
                alt=""
                className="h-28 w-full object-cover object-top"
              />
              <img
                src={shopAdminProducts}
                alt=""
                className="h-28 w-full object-cover object-top"
              />
              <img
                src={shopAdminOrders}
                alt=""
                className="h-28 w-full object-cover object-top"
              />
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setOpenMadeByGeeks(true)}
                className="rounded-xl bg-brand-amber px-4 py-2.5 text-sm font-bold text-ink transition hover:brightness-110"
              >
                Learn more
              </button>
              <a
                href="#services"
                className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-frost transition hover:bg-white/[0.06]"
              >
                Website services
              </a>
            </div>
          </article>

          <article className="surface surface-hover group relative flex flex-col overflow-hidden p-8">
            <div className="absolute -right-6 -top-6 size-28 rounded-full bg-brand-violet/15 blur-2xl transition group-hover:bg-brand-violet/25" />
            <span className="relative mb-4 inline-flex w-fit rounded-full bg-brand-violet/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-violet">
              Coming soon
            </span>
            <h3 className="relative font-display text-2xl font-bold text-frost">
              Next SEN app
            </h3>
            <p className="relative mt-3 flex-1 text-mist leading-relaxed">
              Another supportive, accessibility-led idea is in design. Watch this
              space — or nudge me if you want to collaborate.
            </p>
            <div className="relative mt-6 flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03]">
              <p className="text-sm font-semibold text-mist">Teaser incoming…</p>
            </div>
            <a
              href="#contact"
              className="relative mt-6 inline-flex rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-frost transition hover:bg-white/[0.06]"
            >
              Collaborate
            </a>
          </article>
        </div>
      </div>

      <Modal open={openBrightSpeak} onClose={() => setOpenBrightSpeak(false)}>
        <h2 className="font-display text-2xl font-bold text-brand-sky">
          BrightSpeak
        </h2>
        <p className="mt-3 text-mist leading-relaxed">
          BrightSpeak helps non-verbal autistic children communicate emotions,
          needs and thoughts through visual tools, calm UI and supportive design.
        </p>
        <div className="mt-6 flex gap-2 overflow-hidden rounded-2xl border border-white/10">
          {[screen1, screen2, screen3, screen4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-44 min-w-0 flex-1 object-cover"
            />
          ))}
        </div>
        <Link
          onClick={() => setOpenBrightSpeak(false)}
          to="/case-study/brightspeak"
          className="btn-primary mt-6 inline-block"
        >
          View full case study
        </Link>
      </Modal>

      <Modal open={openBrightBuddy} onClose={() => setOpenBrightBuddy(false)}>
        <h2 className="font-display text-2xl font-bold text-brand-coral">
          BrightBuddy
        </h2>
        <p className="mt-3 text-mist leading-relaxed">
          BrightBuddy helps autistic children feel calmer, more confident and
          supported using gentle visuals, routine helpers and reassurance tools.
        </p>
        <div className="mt-6 flex gap-2 overflow-hidden rounded-2xl border border-white/10">
          {[bb1, bb2, bb3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-44 min-w-0 flex-1 object-cover"
            />
          ))}
        </div>
        <Link
          onClick={() => setOpenBrightBuddy(false)}
          to="/case-study/brightBuddy"
          className="mt-6 inline-block rounded-xl bg-brand-coral px-5 py-3 text-sm font-bold text-ink hover:brightness-110"
        >
          View full case study
        </Link>
      </Modal>

      <Modal open={openMadeByGeeks} onClose={() => setOpenMadeByGeeks(false)}>
        <h2 className="font-display text-2xl font-bold text-brand-amber">
          Made by Geeks
        </h2>
        <p className="mt-3 text-mist leading-relaxed">
          A Laravel e-commerce build: public storefront with collection navigation
          and cart, timed product sales and discount codes, Stripe Checkout, and
          an admin area for products, categories, inventory, orders and PDF
          invoices — the kind of end-to-end site I ship for clients who need more
          than a brochure page.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-4">
          {[shopHome, shopAdminOverview, shopAdminProducts, shopAdminOrders].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="h-36 min-w-0 object-cover object-top sm:h-40"
              />
            ),
          )}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#contact"
            onClick={() => setOpenMadeByGeeks(false)}
            className="btn-warm inline-flex justify-center text-center"
          >
            Discuss a shop or site
          </a>
          <a
            href="#services"
            onClick={() => setOpenMadeByGeeks(false)}
            className="inline-flex justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-frost transition hover:bg-white/[0.06]"
          >
            Website offerings
          </a>
        </div>
      </Modal>
    </section>
  );
}
