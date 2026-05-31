import { useEffect } from "react";
import { Link } from "react-router-dom";

const STRIPE_DONATE_URL = "https://buy.stripe.com/9B6dRafkIeLIbNlf5ZeZ200";
const DEFAULT_TITLE = "BrightSenApps — SEN mobile apps by Karl Roe";

export default function Donate() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Support BrightSpeak — optional donation";
    return () => {
      document.title = previous || DEFAULT_TITLE;
    };
  }, []);

  return (
    <section className="relative isolate min-h-screen px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-20 size-[360px] rounded-full bg-brand-sky/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 size-[320px] rounded-full bg-brand-violet/15 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <span className="eyebrow text-brand-sky">Optional donation</span>

        <h1 className="headline mt-6 text-4xl sm:text-5xl lg:text-6xl">
          Help keep{" "}
          <span className="gradient-text">BrightSpeak free</span>
          <span className="text-frost"> for families</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-mist sm:text-xl">
          BrightSpeak is free for SEN children, parents, and carers. It&apos;s
          independently built to support communication and everyday life — core
          features stay open without asking families to pay.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-mist">
          Running and improving the app has real costs. If it&apos;s helped your
          family, an optional donation helps with maintenance and new features.
        </p>
        <p className="mt-4 rounded-2xl border border-brand-sky/25 bg-brand-sky/[0.06] px-5 py-4 text-mist leading-relaxed">
          <strong className="text-frost">Donations are optional.</strong> Choosing
          not to donate will not limit BrightSpeak access or features.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="surface p-6">
            <h2 className="font-display text-lg font-bold text-brand-sky">
              What donations help with
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist">
              <li>Hosting and infrastructure</li>
              <li>App store fees and releases</li>
              <li>Ongoing maintenance and bug fixes</li>
              <li>Accessibility improvements</li>
              <li>New SEN-focused features</li>
            </ul>
          </article>

          <article className="surface p-6">
            <h2 className="font-display text-lg font-bold text-brand-mint">
              Our approach
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist">
              <li>BrightSpeak core features stay free for families</li>
              <li>Donations support the app — they&apos;re not a paywall</li>
              <li>Not donating never locks you out of features</li>
              <li>
                Separate licensing for nurseries or schools may be offered later
                if extra tools are needed — family use won&apos;t depend on that
              </li>
            </ul>
          </article>

          <article className="surface p-6">
            <h2 className="font-display text-lg font-bold text-frost">
              How it works
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-4 text-sm leading-relaxed text-mist">
              <li>Tap Donate — you&apos;ll open secure Stripe Checkout</li>
              <li>Complete payment on Stripe&apos;s site</li>
              <li>That&apos;s it — no BrightSenApps account required here</li>
            </ol>
          </article>
        </div>

        <div className="surface mt-12 p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold text-frost">
            Ready to support BrightSpeak?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-mist">
            Every contribution goes toward keeping BrightSpeak free for families
            and improving it for SEN children, parents, and carers.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={STRIPE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
              aria-label="Donate via Stripe — opens secure checkout in a new tab"
            >
              Donate via Stripe
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link to="/" className="btn-ghost w-full sm:w-auto">
              Back to portfolio
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-mist/80">
            Secure payment processed by Stripe. BrightSenApps does not store card
            details.
          </p>
        </div>

        <p className="mt-10 text-center text-sm text-mist">
          Questions or feedback?{" "}
          <a
            href="/#contact"
            className="font-semibold text-brand-sky underline decoration-brand-sky/30 underline-offset-2 hover:text-frost"
          >
            Get in touch on the main site
          </a>
          .
        </p>
      </div>
    </section>
  );
}
