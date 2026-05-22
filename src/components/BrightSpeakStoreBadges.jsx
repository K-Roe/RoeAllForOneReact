import { brightSpeakStoreLinks } from "../constants/brightSpeakScreens";

export default function BrightSpeakStoreBadges({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      <a
        href={brightSpeakStoreLinks.play}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get BrightSpeak on Google Play"
          className="h-12"
        />
      </a>
      <a
        href={brightSpeakStoreLinks.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-gb?size=250x83"
          alt="Download BrightSpeak on the App Store"
          className="h-9"
        />
      </a>
    </div>
  );
}
