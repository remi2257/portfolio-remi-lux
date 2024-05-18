import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { isHandledLocale } from "./locale";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!isHandledLocale(locale)) {
    notFound();
  }

  return {
    messages: (await import(`@/i18n/translations/${locale}.json`)).default,
  };
});
