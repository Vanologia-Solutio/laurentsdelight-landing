// Non-text site data. All copy lives in `lib/i18n/dictionaries/*`, keyed by
// the ids used here.

import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
  type RemixiconComponentType,
} from "@remixicon/react";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export type LinkKey = keyof Dictionary["links"];
export type NavLink = { href: string; key: LinkKey };

export type FlavorId =
  "original" | "moringa" | "velvet" | "dark" | "blueberry" | "almond";

/** Text with one value per language. */
export type Localized = Record<Locale, string>;

export type Flavor = {
  id: FlavorId;
  /** Product names stay the same in every language. */
  name: string;
  /** `null` shows a "photo coming soon" placeholder. */
  image: string | null;
  number: string;
  /** One-liner shown on the flavor card. */
  short: Localized;
  /** Longer product description. */
  description: Localized;
};

export type ContactId = keyof Dictionary["baker"]["contacts"];

export type Contact = {
  id: ContactId;
  label: string;
  handle: string;
  /** Omitted for WhatsApp — its link is built from the localized message. */
  href?: string;
  Icon: RemixiconComponentType;
};

// WhatsApp business number (country code + number, digits only).
export const WHATSAPP_NUMBER = "6287815198003";

/** Business contact details shown in the footer, baker card and legal pages. */
export const contactInfo = {
  phone: { display: "+62 878 1519 8003", tel: "+6287815198003" },
  email: "fallencristinelaurent@gmail.com",
  instagram: {
    handle: "@laurents.delight",
    href: "https://instagram.com/laurents.delight",
  },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const navLinks: NavLink[] = [
  { href: "#flavors", key: "flavors" },
  { href: "#story", key: "story" },
  { href: "#baker", key: "baker" },
  { href: "#order", key: "order" },
];

export const footerLinks: {
  titleKey: "explore" | "goodToKnow";
  links: NavLink[];
}[] = [
  {
    titleKey: "explore",
    links: [
      { href: "#flavors", key: "flavors" },
      { href: "#gallery", key: "gallery" },
      { href: "#story", key: "about" },
      { href: "#baker", key: "baker" },
      { href: "#order", key: "order" },
    ],
  },
  {
    titleKey: "goodToKnow",
    links: [
      { href: "/terms-of-service", key: "terms" },
      { href: "/privacy-policy", key: "privacy" },
      { href: "#top", key: "shipping" },
    ],
  },
];

export const flavors: Flavor[] = [
  {
    id: "original",
    name: "Classic Original",
    image: "/images/original.webp",
    number: "01",
    short: {
      en: "The classic, perfected.",
      id: "Klasik yang disempurnakan.",
    },
    description: {
      en: "A crisp edge, a molten middle, and enough chocolate to make you close your eyes.",
      id: "Pinggiran renyah, bagian tengah yang lumer, dan cokelat melimpah sampai kamu memejamkan mata.",
    },
  },
  {
    id: "moringa",
    name: "Moringa Cream Cheese",
    image: "/images/moringa.webp",
    number: "02",
    short: {
      en: "Earthy meets silky.",
      id: "Rasa alami bertemu lembut.",
    },
    description: {
      en: "Garden-fresh moringa folded into a buttery cookie with a cloud of cream cheese.",
      id: "Daun kelor segar dalam cookie bermentega, dengan krim keju selembut awan.",
    },
  },
  {
    id: "velvet",
    name: "Red Velvet Cream Cheese",
    image: "/images/red-velvet.webp",
    number: "03",
    short: {
      en: "A little bit dramatic.",
      id: "Sedikit dramatis.",
    },
    description: {
      en: "Velvety cocoa, ruby crumb, and a dreamy cream center made for slow afternoons.",
      id: "Kakao yang lembut, remah merah delima, dan krim di tengah untuk menemani sore yang santai.",
    },
  },
  {
    id: "dark",
    name: "Dark Choco Sea Salt",
    image: "/images/dark-choco.webp",
    number: "04",
    short: {
      en: "For serious chocolate people.",
      id: "Untuk pencinta cokelat sejati.",
    },
    description: {
      en: "Deep cocoa, pools of dark chocolate, and a pinch of sea salt for contrast.",
      id: "Kakao pekat, lelehan dark chocolate, dan sejumput garam laut sebagai penyeimbang.",
    },
  },
  {
    id: "blueberry",
    name: "Blueberry Chocolate Brownies",
    image: "/images/blueberry-choco.webp",
    number: "05",
    short: {
      en: "Fudgy, with a fruity twist.",
      id: "Fudgy, dengan sentuhan buah.",
    },
    description: {
      en: "Dense, fudgy chocolate brownies studded with juicy blueberries for a bright, tangy finish.",
      id: "Brownies cokelat yang padat dan fudgy, bertabur blueberry segar untuk sentuhan asam manis.",
    },
  },
  {
    id: "almond",
    name: "Almond Chocolate Brownies",
    image: "/images/almond-choco.webp",
    number: "06",
    short: {
      en: "Rich, with a satisfying crunch.",
      id: "Legit, dengan renyah yang bikin nagih.",
    },
    description: {
      en: "Deep chocolate brownies topped with toasted almonds for a nutty, crunchy bite.",
      id: "Brownies cokelat pekat dengan taburan almond panggang yang gurih dan renyah.",
    },
  },
];

export const getFlavor = (id: FlavorId) =>
  flavors.find((flavor) => flavor.id === id);

/** Smallest total quantity (all items combined) that can be checked out. */
export const MIN_ORDER_QTY = 1;
/** Highest quantity allowed per item in the cart. */
export const MAX_ITEM_QTY = 99;

/**
 * WhatsApp order message. Always in Bahasa Indonesia, whatever the site
 * language, so the bakery receives orders in one consistent format.
 */
export const buildOrderMessage = (
  lines: { name: string; quantity: number }[],
) =>
  [
    "Hi Laurent's Delight, saya mau order:",
    "",
    ...lines.map(({ name, quantity }) => `- ${quantity}x ${name}`),
    "",
    "Terima kasih!",
  ].join("\n");

// Phone and Instagram come from `contactInfo`. TODO: confirm the LinkedIn URL
// (bio and quote live in the dictionaries).
export const baker = {
  firstName: "Fallen Cristine",
  lastName: "Laurent",
  initials: "FCL",
  photo: "/images/baker.webp" as string | null,
  contacts: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      handle: contactInfo.phone.display,
      Icon: RiWhatsappLine,
    },
    {
      id: "instagram",
      label: "Instagram",
      handle: contactInfo.instagram.handle,
      href: contactInfo.instagram.href,
      Icon: RiInstagramLine,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "Fallen Cristine Laurent",
      href: "https://www.linkedin.com/in/fallen-cristine-laurent",
      Icon: RiLinkedinBoxLine,
    },
  ] satisfies Contact[],
};
