/**
 * Centralized business configuration.
 *
 * TRUTHFULNESS RULE: Do not add fabricated values here. Every field is either:
 *   (a) verified against the source brief / business owner, or
 *   (b) explicitly `null` with a `// TODO(verify): ...` comment.
 *
 * Components MUST treat `null` as "do not render this claim" — never substitute
 * a placeholder string, a generic default, or an invented number.
 */

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  /** Symptoms/keywords used on the service detail page. Verified against the brief only. */
  commonSigns: string[];
  icon: ServiceIconName;
};

export type ServiceIconName =
  | "brake"
  | "battery"
  | "alternator"
  | "starter"
  | "diagnostics"
  | "ignition"
  | "radiator"
  | "suspension";

export type City = {
  slug: string;
  name: string;
  county: "DuPage" | "Cook";
  /** Short line used in hero/meta copy. */
  blurb: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  city: string;
  /** Link to the original review if one is publicly available. Null = no link shown. */
  sourceUrl: string | null;
};

export type FaqItem = {
  question: string;
  /** Null when the answer has not been verified. The FAQ component skips unanswered items. */
  answer: string | null;
};

export const business = {
  name: "630 Mobile Auto Repair",
  legalName: "630 Mobile Auto Repair LLC",
  phoneDisplay: "630-447-0231",
  phoneE164: "+16304470231",
  telHref: "tel:+16304470231",
  smsHref: "sms:+16304470231",
  email: "info@630mobileauto.com",
  baseCity: "Addison, Illinois",

  hours: {
    label: "Open daily, 7:00 AM–9:00 PM",
    // Structured for schema.org OpeningHoursSpecification (all 7 days, same hours).
    opens: "07:00",
    closes: "21:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  /** Verified credentials only. Unverified items are commented out, not fabricated. */
  credentials: {
    insured: true,
    licensed: null as boolean | null, // TODO(verify): confirm licensing status/type before enabling
    aseCertified: null as boolean | null, // TODO(verify): confirm ASE certification before enabling
  },

  warranty: null as string | null, // TODO(verify): warranty terms, if any, before adding this claim
  paymentMethods: null as string[] | null, // TODO(verify): accepted payment methods
  pricing: null as
    | { serviceSlug: string; startingAt: number; notes: string }[]
    | null, // TODO(verify): starting prices per service, and what's included (parts/labor/travel/tax)
  responseTimeLanguage: null as string | null, // TODO(verify): do not claim same-day/response-time windows without confirmation

  review: {
    platform: "Google",
    url: "https://www.google.com/maps/place/630+Mobile+Auto+Repair/@41.8820641,-88.3692252,10z/data=!4m6!3m5!1s0x880fb3ffdc9117b3:0xdec1d414444e7d99!8m2!3d41.8825354!4d-88.0395825!16s%2Fg%2F11m5jstgjk",
    rating: 5.0,
    reviewCount: 88,
  },

  social: {
    facebook: null as string | null, // TODO(verify): add if a real, active profile exists
    instagram: null as string | null, // TODO(verify): add if a real, active profile exists
  },

  smsPrefillTemplate: (vehicle: string) =>
    `Hi, I'm in Elmhurst and need help with my ${vehicle || "[year/make/model]"}. The issue is: `,
};

export const services: Service[] = [
  {
    slug: "brake-repair",
    name: "Brake Repair",
    shortDescription: "Grinding, squealing, or a soft pedal? We'll take a look on-site.",
    longDescription:
      "Squeaking, grinding, or a brake pedal that feels soft can point to worn pads, rotors, or other brake system issues. We inspect and repair brake components at your home or workplace.",
    commonSigns: ["Squealing or grinding noise", "Soft or spongy pedal", "Vibration when braking", "Dashboard brake warning light"],
    icon: "brake",
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    shortDescription: "Won't start or struggling in the cold? We diagnose and replace batteries on-site.",
    longDescription:
      "A weak or dead battery is one of the most common reasons a vehicle won't start. We test your battery and charging system and replace the battery on-site when needed.",
    commonSigns: ["Slow or clicking start", "Dashboard battery warning light", "Dimming headlights or interior lights", "Vehicle won't start at all"],
    icon: "battery",
  },
  {
    slug: "alternator-repair",
    name: "Alternator Repair",
    shortDescription: "Dimming lights or a dying battery could mean your alternator needs attention.",
    longDescription:
      "The alternator keeps your battery charged while you drive. When it fails, your vehicle can lose electrical power or stall. We diagnose and repair alternator issues at your location.",
    commonSigns: ["Battery warning light while driving", "Dimming or flickering lights", "Dead battery after recent replacement", "Unusual electrical issues"],
    icon: "alternator",
  },
  {
    slug: "starter-repair",
    name: "Starter Repair",
    shortDescription: "Clicking sound but the engine won't turn over? That's often a starter issue.",
    longDescription:
      "A failing starter can leave you with a clicking sound or no response at all when you turn the key. We diagnose and repair starter problems on-site.",
    commonSigns: ["Clicking sound when starting", "No response when turning the key", "Intermittent starting issues", "Grinding noise on startup"],
    icon: "starter",
  },
  {
    slug: "diagnostics",
    name: "Vehicle Diagnostics",
    shortDescription: "Check engine light on? We'll scan and explain what's going on.",
    longDescription:
      "A check engine light or unusual symptom can have many causes. We run diagnostics at your location and walk you through what we find before any repair begins.",
    commonSigns: ["Check engine light on", "Unusual noises or smells", "Loss of power", "Warning lights on the dashboard"],
    icon: "diagnostics",
  },
  {
    slug: "ignition-repair",
    name: "Ignition Repair",
    shortDescription: "Trouble turning the key or starting your vehicle? We can help.",
    longDescription:
      "Ignition system problems can make it difficult or impossible to start your vehicle. We diagnose and repair ignition switch and related issues on-site.",
    commonSigns: ["Key won't turn", "Vehicle stalls unexpectedly", "Dashboard lights flicker when starting", "Difficulty turning the ignition"],
    icon: "ignition",
  },
  {
    slug: "radiator-cooling",
    name: "Radiator & Cooling System Repair",
    shortDescription: "Overheating or low coolant? We service radiators and cooling systems.",
    longDescription:
      "An overheating engine can cause serious damage if it's not addressed. We inspect and repair radiators, hoses, and other cooling system components at your location.",
    commonSigns: ["Engine temperature gauge running high", "Coolant leaks under the vehicle", "Steam from under the hood", "Sweet-smelling odor near the engine"],
    icon: "radiator",
  },
  {
    slug: "shocks-struts",
    name: "Shocks & Struts",
    shortDescription: "Bouncy or rough ride? Worn shocks and struts affect handling and safety.",
    longDescription:
      "Worn shocks and struts can make your vehicle feel bouncy, unstable, or harder to control. We inspect and replace shocks and struts on-site.",
    commonSigns: ["Bouncy or rough ride", "Uneven tire wear", "Vehicle pulls or leans in turns", "Clunking noise over bumps"],
    icon: "suspension",
  },
];

export const cities: City[] = [
  { slug: "elmhurst", name: "Elmhurst", county: "DuPage", blurb: "Our most-requested service area." },
  { slug: "lombard", name: "Lombard", county: "DuPage", blurb: "Mobile repair throughout Lombard." },
  { slug: "addison", name: "Addison", county: "DuPage", blurb: "Based nearby — fast to reach across Addison." },
  { slug: "villa-park", name: "Villa Park", county: "DuPage", blurb: "Mobile repair throughout Villa Park." },
  { slug: "wheaton", name: "Wheaton", county: "DuPage", blurb: "Mobile repair throughout Wheaton." },
  { slug: "glen-ellyn", name: "Glen Ellyn", county: "DuPage", blurb: "Mobile repair throughout Glen Ellyn." },
  { slug: "oak-brook-terrace", name: "Oak Brook Terrace", county: "DuPage", blurb: "Mobile repair throughout Oak Brook Terrace." },
  { slug: "glendale-heights", name: "Glendale Heights", county: "DuPage", blurb: "Mobile repair throughout Glendale Heights." },
  { slug: "schaumburg", name: "Schaumburg", county: "Cook", blurb: "Mobile repair throughout Schaumburg." },
  { slug: "wood-dale", name: "Wood Dale", county: "DuPage", blurb: "Mobile repair throughout Wood Dale." },
  { slug: "bensenville", name: "Bensenville", county: "DuPage", blurb: "Mobile repair throughout Bensenville." },
  { slug: "itasca", name: "Itasca", county: "DuPage", blurb: "Mobile repair throughout Itasca." },
  { slug: "roselle", name: "Roselle", county: "DuPage", blurb: "Mobile repair throughout Roselle." },
  { slug: "oak-brook", name: "Oak Brook", county: "DuPage", blurb: "Mobile repair throughout Oak Brook." },
  { slug: "elk-grove-village", name: "Elk Grove Village", county: "Cook", blurb: "Mobile repair throughout Elk Grove Village." },
];

/**
 * Testimonials copied from the existing /elmhurst page, with obvious typos corrected
 * (substance unchanged; not represented as verbatim third-party review text).
 */
export const testimonials: Testimonial[] = [
  {
    quote: "Awesome to work with. Excellent communication, professional, and very knowledgeable. Highly recommend!",
    author: "Sam G.",
    city: "Elmhurst",
    sourceUrl: null,
  },
  {
    quote: "Friendly, affordable, honest service. Showed up on time and explained the work that needed to be done.",
    author: "Greg S.",
    city: "Elmhurst",
    sourceUrl: null,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What repairs can be completed on-site?",
    answer:
      "We handle a wide range of repairs and diagnostics at your location, including brakes, batteries, alternators, starters, ignition, radiator and cooling system work, shocks and struts, and diagnostics. Some repairs may require a traditional shop — we'll let you know if that's the case for your vehicle.",
  },
  {
    question: "Do I need to be present?",
    answer: null, // TODO(verify): confirm policy on customer presence during service
  },
  {
    question: "Can you work in an apartment or workplace parking lot?",
    answer:
      "In many cases, yes — we work at homes, workplaces, and parking areas where there's reasonable access to the vehicle. Let us know your location when you reach out so we can confirm it's suitable.",
  },
  {
    question: "Do you service all makes and models?",
    answer: "Yes, we work on all makes and models.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We provide an estimate before any work begins, based on your vehicle and the issue you describe. Tell us the details by call, text, or the quote form and we'll follow up with pricing.",
  },
  {
    question: "Are parts included in the quote?",
    answer: null, // TODO(verify): confirm what's included in quoted pricing
  },
  {
    question: "Is there a diagnostic or travel fee?",
    answer: null, // TODO(verify): confirm fee structure
  },
  {
    question: "What happens in bad weather?",
    answer: null, // TODO(verify): confirm weather policy
  },
  {
    question: "What payment methods are accepted?",
    answer: null, // TODO(verify): confirm accepted payment methods
  },
  {
    question: "Do you offer a workmanship or parts warranty?",
    answer: null, // TODO(verify): confirm warranty terms
  },
  {
    question: "Which areas around Elmhurst do you serve?",
    answer:
      "We serve Elmhurst and surrounding DuPage and Cook County communities, including Lombard, Addison, Villa Park, Wheaton, Glen Ellyn, Oak Brook Terrace, Glendale Heights, Schaumburg, Wood Dale, Bensenville, Itasca, Roselle, Oak Brook, and Elk Grove Village.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer: null, // TODO(verify): do not claim same-day or specific turnaround without confirmation
  },
];

export const siteUrl = "https://630mobileauto.com"; // TODO(verify): confirm production domain before launch
