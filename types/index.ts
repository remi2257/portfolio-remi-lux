import { Locale } from "@/i18n/locale";

export type RouteParamsWithLocale<P = unknown> = P & {
  locale: Locale;
};

export type RoutePropsWithLocaleParam<P = unknown> = P & {
  params: RouteParamsWithLocale;
};
