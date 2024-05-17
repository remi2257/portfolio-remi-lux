import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { isHandledLocale } from "./locale";

export default getRequestConfig(async ({ locale }) => {
  // TODO: redirect to the default locale if the incoming `locale` parameter is not valid
  // Validate that the incoming `locale` parameter is valid
  if (!isHandledLocale(locale)) {
    notFound();
  }

  // TODO: merge with the default
  return {
    messages: (await import(`@/i18n/translations/${locale}.json`)).default,
  };
});
