import AndroidPhone from "./AndroidPhone";
import BrowserMockup from "./BrowserMockup";
import screen1 from "../assets/brightspeak.jpg";
import screen2 from "../assets/brightspeak2.jpg";
import screen3 from "../assets/brightspeak3.jpg";
import screen4 from "../assets/brightspeak4.jpg";
import logo from "../assets/brightsenapps.png";
import shopHome from "../assets/shop-madebygeeks-home.png";
import shopAdminOverview from "../assets/shop-admin-overview.png";
import shopAdminProducts from "../assets/shop-admin-products.png";
import shopAdminOrders from "../assets/shop-admin-orders.png";

const shopWebSlides = [
  { src: shopHome, alt: "Made by Geeks storefront — hero and navigation" },
  { src: shopAdminOverview, alt: "Shop admin — overview dashboard" },
  { src: shopAdminProducts, alt: "Shop admin — products catalog" },
  { src: shopAdminOrders, alt: "Shop admin — orders" },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden px-6 pb-24 pt-8 text-frost lg:px-16 lg:pb-28 lg:pt-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-[0.35]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-20 size-[420px] rounded-full bg-brand-sky/25 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 size-[380px] rounded-full bg-brand-violet/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between animate-fade">
          <div className="surface inline-flex items-center gap-4 px-4 py-3 pr-6">
            <img
              src={logo}
              alt="BrightSEN Apps"
              className="h-14 w-auto max-w-[9.5rem] object-contain object-left sm:h-16 sm:max-w-[11rem]"
            />
            <div className="hidden h-14 w-px bg-white/15 sm:block sm:h-16" aria-hidden />
            <p className="max-w-xs text-sm leading-snug text-mist">
              <span className="font-semibold text-frost">Karl Roe</span>
              <br />
              SEN-focused products &amp; client websites
            </p>
          </div>
          <div className="eyebrow border-brand-amber/30 bg-brand-amber/[0.08] text-brand-amber">
            Open for website projects
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 animate-fade">
            <h1 className="headline text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[3.5rem]">
              Calm, capable{" "}
              <span className="gradient-text">mobile apps</span>
              <span className="text-mist"> — and </span>
              <span className="gradient-text-warm">websites</span>
              <span className="text-frost"> people actually use.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              I&apos;m Karl. I build supportive React Native apps for Autism
              &amp; SEN communities, and I partner with small teams who need a
              sharp, fast, accessible site — without the stress.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="#projects"
                className="surface surface-hover group relative overflow-hidden p-6 text-left"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">
                    Mobile apps
                  </span>
                  <span className="rounded-full bg-brand-sky/15 px-2 py-0.5 text-[10px] font-bold text-brand-sky">
                    SEN
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-mist">
                  BrightSpeak, BrightBuddy &amp; thoughtful tools that prioritise
                  comfort and clarity.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-frost group-hover:text-brand-sky">
                  View app work
                  <span aria-hidden>→</span>
                </span>
                <div
                  className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-sky/10 blur-2xl transition group-hover:bg-brand-sky/20"
                  aria-hidden
                />
              </a>

              <a
                href="#services"
                className="surface surface-hover group relative overflow-hidden border-brand-amber/20 p-6 text-left ring-1 ring-brand-amber/15"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
                    Websites
                  </span>
                  <span className="rounded-full bg-brand-amber/15 px-2 py-0.5 text-[10px] font-bold text-brand-amber">
                    For hire
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-mist">
                  Landing pages &amp; small business sites — modern stack, SEO
                  friendly, easy to grow.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-frost group-hover:text-brand-amber">
                  See what I offer
                  <span aria-hidden>→</span>
                </span>
                <div
                  className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-amber/10 blur-2xl transition group-hover:bg-brand-amber/20"
                  aria-hidden
                />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-warm">
                Start a project
              </a>
              <a href="#services" className="btn-ghost">
                Website details
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-12 lg:mx-0 lg:ml-auto lg:max-w-none lg:items-stretch lg:gap-14">
              <div className="relative w-fit animate-float lg:self-end">
                <span className="absolute -left-2 top-6 z-10 rounded-full bg-brand-sky/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-lg">
                  Apps
                </span>
                <AndroidPhone
                  images={[screen1, screen2, screen3, screen4]}
                  interval={3000}
                />
              </div>

              <div className="relative w-full border-t border-white/[0.08] pt-12 lg:pt-14">
                <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-mist lg:text-left">
                  Web builds
                </p>
                <div className="relative mx-auto w-full max-w-[min(100%,540px)] animate-float-delayed lg:mx-0 lg:ml-auto lg:max-w-[min(100%,580px)]">
                  <span className="absolute -right-1 top-0 z-10 rounded-full bg-brand-amber/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-lg">
                    Web
                  </span>
                  <BrowserMockup slides={shopWebSlides} interval={3500} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
