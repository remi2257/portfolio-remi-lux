"use client";

import Image from "next/image";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { useHandledLocale } from "@/hooks/useHandledLocale";
import { Locale, LOCALE_INFOS_LIST } from "@/i18n/locale";
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
      {LOCALE_INFOS_LIST.map(({ locale, flag }) => (
        <Image
          key={locale}
          className={cn(
            "absolute transition",
            currentSelectedLocale !== locale && "-rotate-90 opacity-0"
          )}
          width={16}
          height={16}
          src={flag}
          alt={locale}
        />
      ))}
    </Button>
  );
}
