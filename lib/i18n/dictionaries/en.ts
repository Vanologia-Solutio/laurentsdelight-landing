// English copy — the source of truth for the dictionary shape.
// Plain strings only: this object is passed to client components.

const en = {
  meta: {
    title: "Laurent's Delight | Homemade Baked Goods",
    description:
      "Discover handcrafted cookies, delicious brownies, and delightful homemade treats, made to bring a little sweetness to every moment.",
  },
  links: {
    flavors: "flavors",
    story: "our story",
    baker: "the baker",
    order: "order",
    gallery: "gallery",
    about: "about us",
    terms: "terms of service",
    privacy: "privacy policy",
    shipping: "shipping & care",
  },
  header: {
    navLabel: "Main navigation",
    home: "Laurent's Delight home",
    bag: "Shopping bag",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    eyebrow: "small batch / big delight",
    titleLine1: "Made to be",
    titleLine2: "remembered.",
    lead: "Joy, baked into every batch. Audaciously good cookies and brownies, made by hand and sent warm from our kitchen to your people.",
    cta: "meet the flavors",
    hours: "baked daily · 8AM−6PM",
    established: "est. 2026",
    place: "indonesia",
    mood: "today's mood",
    moodText: "Fresh out of the oven.",
    imageAlt: "A plate of four Laurent's Delight cookies on baking paper",
  },
  flavors: {
    eyebrow: "six ways to fall in love",
    title: "Pick your",
    accent: "delight.",
    description: "No wrong answers. Just different kinds of wonderful.",
    photoSoon: "photo coming soon",
    categories: {
      cookies: "cookies",
      cakesBrownies: "cake & brownies",
    },
  },
  gallery: {
    eyebrow: "from our oven to your feed",
    title: "A box full of",
    accent: "moments.",
    description:
      "Best enjoyed with both hands, good company, and absolutely no sharing required.",
    photos: {
      apron: {
        alt: "A linen apron embroidered with the Laurent's Delight logo",
        caption: "baked with love",
      },
      boxes: {
        alt: "Gift boxes of Laurent's Delight cookies with signature cards and branded paper bags",
        caption: "ready for gifting",
      },
      arranged: {
        alt: "Rows of individually wrapped cookies with Laurent's Delight stickers",
        caption: "fresh every batch",
      },
      packagings: {
        alt: "Wrapped cookies and labeled paper bags ready for delivery",
        caption: "packed with care",
      },
    },
  },
  story: {
    eyebrow: "about laurent's delight",
    line1: "A little extra",
    line2: "is our secret.",
    body: "Born from a love of late-night baking and generous sharing, Laurent's Delight turns familiar flavors into tiny celebrations. We believe the best cookies are made slowly, packed warmly, and passed around before they even cool.",
    cta: "meet the baker",
    values: ["slowly mixed", "generously filled", "always shared"],
  },
  baker: {
    // TODO: placeholder copy — replace with Fallen's real bio and quote.
    eyebrow: "meet the baker",
    role: "founder & head baker",
    quote: "A cookie should feel like a hug you can hold in one hand.",
    bio: [
      "Fallen Cristine Laurent is the hands, heart, and slightly flour-dusted soul behind Laurent's Delight. What began as late-night baking for friends and family slowly turned into a kitchen that never quite stopped smelling of butter and brown sugar.",
      "She develops every recipe herself - testing, tasting, and tweaking until each cookie earns its place in the box. Her favorite part is still the same as day one: watching someone take the first bite.",
    ],
    sayHi: "say hi to",
    portraitAlt: "Portrait of",
    portraitSoon: "portrait coming soon",
    opensNewTab: "opens in a new tab",
    contacts: {
      whatsapp: {
        cta: "chat to order",
        message: "Hi Fallen! I'd love to order some cookies.",
      },
      instagram: { cta: "follow the bakes" },
      linkedin: { cta: "connect" },
    },
  },
  order: {
    eyebrow: "order online",
    line1: "Warm cookies.",
    line2: "Delivered to your door.",
    body: "Message us on WhatsApp and we'll bake a fresh box for you, or for someone you love.",
    cta: "order on WhatsApp",
  },
  cart: {
    title: "Your cart",
    view: "view cart",
    close: "Close cart",
    add: "add to cart",
    increase: "Add one",
    decrease: "Remove one",
    remove: "Remove",
    quantity: "Quantity",
    empty: "Your cart is empty.",
    emptyHint: "Pick a few favorites and they'll show up here.",
    browse: "browse the flavors",
    total: "Total items",
    minOrder: "Minimum order is {count} items.",
    checkout: "order via WhatsApp",
    checkoutHint:
      "We'll open WhatsApp with your order ready to send. Prices and delivery are confirmed in the chat.",
    clear: "clear cart",
  },
  footer: {
    tagline: "Small-batch cookies for big feelings, baked fresh every day.",
    explore: "explore",
    goodToKnow: "good to know",
    sayHello: "say hello",
    copyright: "laurent's delight",
    madeWith: "made with butter & good intentions",
    backToTop: "back to top ↑",
  },
  legal: {
    eyebrow: "the fine print",
    updated: "Last updated",
    onThisPage: "On this page",
    alsoRead: "Also read",
    backHome: "back to home",
  },
  whatsapp: {
    title: "Chat with us",
    subtitle: "Usually replies within the hour",
    open: "Chat on WhatsApp",
    close: "Close WhatsApp menu",
    /** Opens the cart instead of sending a message. */
    orderLabel: "I'd like to order",
    quickMessages: [
      {
        label: "Do you deliver to my area?",
        message: "Hi! Do you deliver to my area? I'd love to get some cookies.",
      },
      {
        label: "Gifts & custom orders",
        message:
          "Hi! I'm interested in a gift box or custom order for an occasion.",
      },
    ],
  },
};

export type Dictionary = typeof en;

export default en;
