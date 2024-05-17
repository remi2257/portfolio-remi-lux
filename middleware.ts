import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales, localePrefix } from "./i18n/locale";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  // (?!...) : négation anticipée. Cela signifie "ne pas correspondre si ce qui suit est ...".
  // .*\\..* : Correspond à n'importe quel chemin contenant un point (.), ce qui inclut généralement les fichiers (par exemple, .css, .js, .png, etc.).
  // _next : Correspond à n'importe quel chemin qui commence par _next, utilisé par Next.js pour ses ressources internes.
  matcher: "/((?!.*\\..*|_next).*)",
};
