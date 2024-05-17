import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales, localePrefix } from "./i18n/locale";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */ matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],

  // Match only internationalized pathnames
  // matcher: ['/', '/(de|en)/:path*']
};
