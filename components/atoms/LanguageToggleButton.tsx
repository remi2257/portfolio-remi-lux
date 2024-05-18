"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { useHandledLocale } from "@/hooks/useHandledLocale";
import { Locale, localeInfosList } from "@/i18n/locale";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

function getNextLocale(locale: Locale): Locale {
  switch (locale) {
    case "fr":
      return "en";
    case "en":
      return "es";
    case "es":
      return "fr";
  }
}

export function LanguageToggleButton() {
  const router = useRouter();
  const [isReloading, startTransition] = useTransition();
  const pathname = usePathname();

  const navLocale = useHandledLocale();

  const currentSelectedLocale = !isReloading
    ? navLocale
    : getNextLocale(navLocale);

  const toggle = () => {
    const nextLocale = getNextLocale(currentSelectedLocale);

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Button variant="outline" size="icon" onClick={toggle}>
      {localeInfosList.map(({ locale, flag }) => (
        <span
          key={locale}
          className={cn(
            "absolute transition",
            currentSelectedLocale !== locale && "opacity-0 -rotate-90"
          )}
        >
          {flag}
        </span>
      ))}
    </Button>
  );
}
