import { StaticImport } from "next/dist/shared/lib/get-img-props";

import flagEn from "@/assets/images/en.svg";
import flagFr from "@/assets/images/fr.svg";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localePrefix = "as-needed";

export function isHandledLocale(str: string): str is Locale {
  return locales.includes(str as Locale);
}

type LocaleInfo = { flag: StaticImport; name: string };

const LOCALE_INFOS_MAP: Map<Locale, LocaleInfo> = new Map([
  ["fr", { flag: flagFr, name: "Français" }],
  ["en", { flag: flagEn, name: "English" }],
]);

export const LOCALE_INFOS_LIST = Array.from(LOCALE_INFOS_MAP.entries()).map(
  ([locale, { flag, name }]) => ({ locale, flag, name })
);
