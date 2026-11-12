import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";

import { CartDrawer } from "@/components/cart/cart-drawer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CartProvider } from "@/components/providers/cart-provider";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { defaultLocale, locales } from "@/lib/i18n/config";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";

import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary();

  return {
    title: t.meta.title,
    description: t.meta.description,
    generator: "Vanologia Solutio",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? "en_US" : "id_ID",
      type: "website",
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "light",
  // Browser UI color — metadata needs a literal value; keep in sync with --cream.
  themeColor: "#f5ecdf",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const dictionary = await getDictionary();

  return (
    <html lang={locale} className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <I18nProvider locale={locale} dictionary={dictionary}>
          <CartProvider>
            <MotionProvider>
              <SiteHeader />
              {children}
              <SiteFooter />
              <FloatingWhatsApp />
              <CartDrawer />
            </MotionProvider>
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
