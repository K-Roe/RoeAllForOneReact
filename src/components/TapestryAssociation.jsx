import tapestryLogo from "../assets/tapestry-logo.png";
import tapestryScreenshot from "../assets/tapestry.png";

const TAPESTRY_URL = "https://tapestry.info";

const variants = {
  inline: {
    wrap: "flex flex-wrap items-center gap-3",
    content: "flex flex-wrap items-center gap-3",
    logo: "h-9 w-9 shrink-0 rounded-lg bg-white p-1 object-contain sm:h-10 sm:w-10",
    text: "text-sm leading-snug text-mist",
    showExtended: false,
  },
  card: {
    wrap: "mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3",
    content: "flex flex-wrap items-center gap-3",
    logo: "h-9 w-9 shrink-0 rounded-lg bg-white p-1 object-contain sm:h-10 sm:w-10",
    text: "text-sm leading-snug text-mist",
    showExtended: false,
  },
  hero: {
    wrap: "mt-3 flex flex-wrap items-center gap-2.5",
    content: "flex flex-wrap items-center gap-2.5",
    logo: "h-8 w-8 shrink-0 rounded-md bg-white p-0.5 object-contain",
    text: "text-xs leading-snug text-mist",
    showExtended: false,
  },
  block: {
    wrap: "surface grid gap-6 overflow-hidden p-6 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(18rem,1.15fr)] lg:items-center",
    content: "flex flex-col gap-4 sm:flex-row sm:items-center",
    logo: "h-14 w-14 shrink-0 rounded-xl bg-white p-1.5 object-contain sm:h-16 sm:w-16",
    text: "text-base leading-relaxed text-mist",
    showExtended: true,
    showScreenshot: true,
  },
};

export default function TapestryAssociation({
  variant = "inline",
  linkLogo = true,
}) {
  const v = variants[variant] ?? variants.inline;

  const logo = (
    <img
      src={tapestryLogo}
      alt="Tapestry"
      className={v.logo}
    />
  );

  return (
    <div className={v.wrap}>
      <div className={v.content}>
        {linkLogo ? (
          <a
            href={TAPESTRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 transition hover:opacity-90"
            aria-label="Tapestry, early years platform (opens in new tab)"
          >
            {logo}
          </a>
        ) : (
          logo
        )}
        <div className="min-w-0 flex-1">
          <p className={v.text}>
            Developed in association with{" "}
            {linkLogo ? (
              <a
                href={TAPESTRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-frost underline decoration-slate-300 underline-offset-2 hover:text-brand-sky"
              >
                Tapestry
              </a>
            ) : (
              <span className="font-semibold text-frost">Tapestry</span>
            )}
          </p>
          {v.showExtended && (
            <p className="mt-2 text-sm leading-relaxed text-mist/90">
              Bright Speak connects families with the early years settings they
              already trust, bringing calm visual communication support
              alongside Tapestry&apos;s nursery and school workflows.
            </p>
          )}
        </div>
      </div>

      {v.showScreenshot && (
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
          <img
            src={tapestryScreenshot}
            alt="Bright Speak featured on the Tapestry Education website"
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </figure>
      )}
    </div>
  );
}
