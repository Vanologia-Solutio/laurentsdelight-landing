import { NextResponse, type NextRequest } from "next/server";

import {
  hasLocale,
  LOCALE_COOKIE,
  locales,
  pickLocale,
} from "@/lib/i18n/config";

/**
 * Sends visitors without a locale prefix to `/en` or `/id`.
 * Priority: the switcher's cookie, then the browser's Accept-Language, then English.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasPrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasPrefix) return;

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    cookie && hasLocale(cookie)
      ? cookie
      : pickLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any file with an extension (images, favicon, …).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
