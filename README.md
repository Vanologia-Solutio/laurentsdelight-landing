# Laurent's Delight — Landing Page

The marketing site for **Laurent's Delight**, a small-batch home cookie bakery in Indonesia. There's no physical store; customers order online, mainly through WhatsApp.

The site is a single animated landing page in **English and Bahasa Indonesia**, plus a Privacy Policy and Terms of Service.

## Tech stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, `cacheComponents`) · React 19 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com), with design tokens in `app/globals.css` |
| Motion | [Framer Motion](https://motion.dev) |
| Icons | [Remix Icon](https://remixicon.com) (`@remixicon/react`) |
| Fonts | DM Sans (body) and Fraunces (display), via `next/font` |
| i18n | Built in, with no i18n library: a `[lang]` route segment, `proxy.ts` and typed dictionaries |

> **Note:** this is Next.js 16, which renames middleware to `proxy.ts` and changes some APIs. Before changing framework-level code, check the docs bundled in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en or /id
```

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (both locales are prerendered as static pages) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier on all `.ts` / `.tsx` files |

## Project structure

```
app/
  [lang]/                    # every route lives under /en or /id
    layout.tsx               # <html lang>, metadata, providers, header/footer/WhatsApp
    page.tsx                 # landing page — composes the sections
    privacy-policy/page.tsx
    terms-of-service/page.tsx
  globals.css                # palette, semantic color tokens, shadows, type scale
proxy.ts                     # redirects "/" → "/en" or "/id"

components/
  layout/                    # site-header, site-footer, language-switcher, floating-whatsapp
  sections/                  # hero, flavors, gallery, story, baker, order (+ card/visual parts)
  legal/legal-page.tsx       # shared layout for legal pages
  motion/reveal.tsx          # <Reveal>, <Stagger>, <StaggerItem> animation wrappers
  providers/                 # i18n + MotionConfig (respects "reduce motion")
  ui/                        # Section, SectionHeading, Logo

lib/
  content.ts                 # non-text data: flavors, links, baker contacts, WhatsApp number
  i18n/
    config.ts                # locales, default locale, Accept-Language parsing, localizeHref
    get-dictionary.ts        # getDictionary() / getLocale() for server components
    dictionaries/en.ts       # all English UI copy (source of truth for the shape)
    dictionaries/id.ts       # Bahasa Indonesia copy, type-checked against en.ts
  legal/                     # Privacy Policy + Terms content (en + id)
  motion.ts                  # easing, springs and animation presets
  utils.ts                   # cn() class-name helper

public/images/               # logo + product and lifestyle photos (.webp)
```

## How things work

### Languages (en / id)

- **Routing:** every page is served at `/en/...` and `/id/...`.
- **Redirect:** `proxy.ts` sends visitors without a language prefix to the right one. It checks the `NEXT_LOCALE` cookie (set by the language switcher) first, then the browser's `Accept-Language`, and falls back to English.
- **Server components** call `await getDictionary()` to load the current language's copy.
- **Client components** use `useI18n()` from `components/providers/i18n-provider.tsx`.
- **Completeness:** `id.ts` is typed against `en.ts`, so **the build fails if a translation is missing**.
- **Flavor text** (`short`, `description`) lives next to each flavor in `lib/content.ts` as `{ en, id }`.
- **Internal links:** wrap them in `localizeHref(locale, href)` so they work from any page, e.g. `"#flavors"` → `"/en#flavors"`.

### Colors and styling

All colors are defined once in `app/globals.css`:

1. **Palette** (`:root`): the raw brand colors (`--cream`, `--terracotta`, `--espresso`, …).
2. **Semantic tokens** (`@theme`): role-based names that become Tailwind classes, such as `bg-primary`, `text-accent`, `bg-secondary`, `bg-surface` and `shadow-stamp`.

Components only use the semantic classes, never hex values. To re-theme, edit the palette.

The type scale lives in the same file as utilities: `eyebrow`, `label`, `display-1` and `display-2`.

### Layout

Each section uses `<Section>` (`components/ui/section.tsx`): a full-width shell with `px-4` padding and a centered `max-w-6xl` container, so every section lines up on the same edges.

### Motion

- **Presets** (`fadeUp`, `fadeIn`, `scaleIn`, `lineUp`) are defined in `lib/motion.ts`.
- **Using them from server components:** wrap content in `<Reveal>`, `<Stagger>` or `<StaggerItem>` and pick a preset **by name**, e.g. `variants="lineUp"`. Variant objects contain functions and can't be passed from server to client components, which is why names are used.
- **Reduced motion:** all animation respects the operating system's "reduce motion" setting.

> **Good to know:** with `cacheComponents` enabled, Next.js keeps recently visited pages mounted but hidden (`display: none`). Client state survives navigation, and DOM queries can match hidden copies. Filter with `el.getClientRects().length` when that matters.

## Editing content

| To change… | Edit |
|---|---|
| Section copy, buttons, labels, alt text | `lib/i18n/dictionaries/en.ts` + `id.ts` |
| Flavors (name, photo, number, descriptions) | `lib/content.ts` → `flavors` |
| Nav and footer links | `lib/content.ts` → `navLinks`, `footerLinks` |
| WhatsApp number | `lib/content.ts` → `WHATSAPP_NUMBER` |
| Cart order message, minimum order, max per item | `lib/content.ts` → `buildOrderMessage`, `MIN_ORDER_QTY`, `MAX_ITEM_QTY` |
| Baker contacts and photo | `lib/content.ts` → `baker` |
| Footer phone / email / Instagram | `components/layout/site-footer.tsx` |
| Gallery photos | `components/sections/gallery.tsx` → `photos` |
| Privacy Policy / Terms | `lib/legal/*.ts` (and `LEGAL_UPDATED` in `lib/legal/types.ts`) |
| Colors, shadows, type scale | `app/globals.css` |

## Before launch

- [x] Replace the placeholder **WhatsApp number** (`WHATSAPP_NUMBER` in `lib/content.ts`).
- [ ] Replace the placeholder **footer phone and email** and the Instagram link (`site-footer.tsx`).
- [ ] Add the baker's **real bio, quote, photo and contact handles** (`baker` in `lib/content.ts` and the dictionaries).
- [ ] Have a fluent speaker **review the Bahasa Indonesia copy** (`id.ts`, `lib/legal/*`).
- [ ] Have the **Privacy Policy and Terms reviewed**. They are drafts covering Indonesia's personal data protection law (UU PDP, Law No. 27 of 2022).
- [ ] Decide what the **"shipping & care"** footer link should point to (it currently goes to the top of the page).
