import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { Locale, locales } from "./locale";

export default getRequestConfig(async ({ locale }) => {
  // TODO: redirect to the default locale if the incoming `locale` parameter is not valid
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // TODO: merge with the default
  return {
    messages: (await import(`@/i18n/translations/${locale}.json`)).default,
  };
});
