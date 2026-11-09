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

export type FlavorId = "original" | "moringa" | "velvet" | "dark";

/** Text with one value per language. */
export type Localized = Record<Locale, string>;

export type Flavor = {
  id: FlavorId;
  /** Product names stay the same in every language. */
  name: string;
  image: string;
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

// TODO: placeholder number — replace with the real WhatsApp business number
// (country code + number, digits only).
export const WHATSAPP_NUMBER = "6281234567890";

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
];

// TODO: placeholder photo path and contact handles — replace with Fallen's
// real details (bio and quote live in the dictionaries).
export const baker = {
  firstName: "Fallen Cristine",
  lastName: "Laurent",
  initials: "FCL",
  photo: "/images/baker.webp" as string | null,
  contacts: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      handle: "+62 812 3456 7890",
      Icon: RiWhatsappLine,
    },
    {
      id: "instagram",
      label: "Instagram",
      handle: "@fallenlaurent",
      href: "https://instagram.com/fallenlaurent",
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
