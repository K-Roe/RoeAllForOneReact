import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const STRIPE_DONATE_URL = "https://buy.stripe.com/9B6dRafkIeLIbNlf5ZeZ200";

export default function Donate() {
  return (
    <main className="relative isolate min-h-screen px-6 py-16 text-frost sm:px-10 lg:px-20 lg:py-20">
      <SEO
        title="Support Bright Speak | Keep the app free"
        description="Optional donations help BrightSenApps keep Bright Speak free for families and improve accessible SEND communication features."
        path="/donate"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <span className="eyebrow text-brand-sky">Optional donation</span>

        <h1 className="headline mt-6 text-4xl sm:text-5xl lg:text-6xl">
          Help keep <span className="gradient-text">Bright Speak free</span> for
          families
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-mist sm:text-xl">
          Bright Speak is free for children, parents, carers, and families who
          need communication support. Donations are optional and never unlock or
          restrict app features.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-mist">
          Contributions help with app store releases, maintenance, accessibility
          improvements, infrastructure, and new SEND-focused features.
        </p>
        <p className="mt-4 rounded-2xl border border-brand-sky/25 bg-brand-sky/[0.06] px-5 py-4 text-mist leading-relaxed">
          <strong className="text-frost">No paywall.</strong> Choosing not to
          donate will not limit Bright Speak access.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "What donations help with",
              items: [
                "Hosting and infrastructure",
                "App store fees and releases",
                "Maintenance and bug fixes",
                "Accessibility improvements",
                "New communication features",
              ],
            },
            {
              title: "Our approach",
              items: [
                "Family access stays free",
                "No advertisements",
                "No feature lockouts for non-donors",
                "Future organisation tools can be explored separately",
              ],
            },
            {
              title: "How it works",
              items: [
                "Open secure Stripe Checkout",
                "Complete payment on Stripe",
                "No BrightSenApps account required",
                "Card details are handled by Stripe",
              ],
            },
          ].map((card) => (
            <article key={card.title} className="surface p-6">
              <h2 className="font-display text-lg font-bold text-brand-sky">
                {card.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="surface mt-12 p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold text-frost">
            Ready to support Bright Speak?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-mist">
            Every contribution helps BrightSenApps improve free communication
            support for children with SEND.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={STRIPE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
              aria-label="Donate via Stripe, opens secure checkout in a new tab"
            >
              Donate via Stripe
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link to="/bright-speak" className="btn-ghost w-full sm:w-auto">
              View Bright Speak
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
