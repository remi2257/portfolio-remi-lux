export const locales = ["fr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localePrefix = "as-needed";

export function isHandledLocale(str: string): str is Locale {
  return locales.includes(str as Locale);
}

type LocaleInfo = { flag: string; name: string };

export const localeInfosMap: Map<Locale, LocaleInfo> = new Map([
  ["fr", { flag: "🇫🇷", name: "Français" }],
  ["en", { flag: "🇬🇧", name: "English" }],
  ["es", { flag: "🇪🇸", name: "Español" }],
]);

export const localeInfosList = Array.from(localeInfosMap.entries()).map(
  ([locale, { flag, name }]) => ({ locale, flag, name })
);
