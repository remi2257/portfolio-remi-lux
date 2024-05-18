import { useLocale } from "next-intl";

import { Locale, isHandledLocale } from "@/i18n/locale";

export const useHandledLocale = (): Locale => {
  const locale = useLocale();

  if (!isHandledLocale(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return locale;
};
