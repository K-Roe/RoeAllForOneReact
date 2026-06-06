export const contactEmail = "brightsenapps@brightsenapps.com";

export const brightSpeakFeatures = [
  "AAC-style communication cards",
  "Sentence builder for simple requests",
  "Common phrases for everyday needs",
  "Food and drink communication",
  "Feelings recognition",
  "Letter learning",
  "Number learning",
  "Colour recognition",
  "Animal recognition",
  "Emotional learning activities",
  "Personalised child profiles",
  "Parent controls and custom content management",
];

export const audiences = [
  "Parents and carers",
  "Schools and SENCOs",
  "Nurseries and early years teams",
  "Speech and language professionals",
  "Care providers",
  "Charitable and funding partners",
];

export const values = [
  {
    title: "Accessibility first",
    body: "Large touch targets, clear language, calm layouts, and predictable interactions are treated as core product requirements.",
  },
  {
    title: "Free family access",
    body: "Bright Speak is completely free, with no advertisements and no paywall for families who need communication support.",
  },
  {
    title: "Built with lived feedback",
    body: "Product decisions are shaped by parent feedback, SEND experience, and practical use in real homes and education settings.",
  },
  {
    title: "Warm, useful technology",
    body: "The aim is not novelty. The aim is digital support that helps children communicate, learn, and feel understood.",
  },
];

export const testimonials = [
  {
    quote:
      "Bright Speak gives our child a clearer way to show what they need without the pressure of spoken words.",
    source: "Parent feedback",
  },
  {
    quote:
      "The calm design and simple choices make it easier to introduce communication support during busy parts of the day.",
    source: "Early years feedback",
  },
  {
    quote:
      "It feels practical rather than overwhelming, which matters when families are already managing so much.",
    source: "SEND community feedback",
  },
];

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BrightSenApps",
  url: "https://brightsenapps.com",
  email: contactEmail,
  sameAs: [
    "https://www.instagram.com/brightsenapps/",
    "https://www.linkedin.com/in/karl-aboltins-roe-249b0417b",
  ],
  description:
    "BrightSenApps creates accessible digital tools for children with special educational needs, communication difficulties, autism, and additional learning needs.",
};

export const brightSpeakSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bright Speak",
  operatingSystem: "iOS, Android",
  applicationCategory: "EducationalApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  description:
    "A free AAC-style communication and learning app for children with SEND, autism, and communication difficulties.",
};
