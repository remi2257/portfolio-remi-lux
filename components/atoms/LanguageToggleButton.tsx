"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n/locale";
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
  // const params = useParams();

  const navLocale = useLocale();

  const isFrench = navLocale === "fr";
  const isEnglish = navLocale === "en";
  const isSpanish = navLocale === "es";

  if (!isFrench && !isEnglish && !isSpanish) {
    throw new Error(`Unsupported locale: ${navLocale}`);
  }

  const currentSelectedLocale = !isReloading
    ? navLocale
    : getNextLocale(navLocale);

  const currentIsFrench = currentSelectedLocale === "fr";
  const currentIsEnglish = currentSelectedLocale === "en";
  const currentIsSpanish = currentSelectedLocale === "es";

  const toggle = () => {
    const nextLocale = getNextLocale(currentSelectedLocale);

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Button
      className="mono-grid place-items-center"
      variant="outline"
      size="icon"
      onClick={toggle}
    >
      <span
        className={cn("transition", !currentIsFrench && "opacity-0 -rotate-90")}
      >
        🇫🇷
      </span>
      <span
        className={cn(
          "transition",
          !currentIsEnglish && "opacity-0 -rotate-90"
        )}
      >
        🇬🇧
      </span>
      <span
        className={cn(
          "transition",
          !currentIsSpanish && "opacity-0 -rotate-90"
        )}
      >
        🇪🇸
      </span>
    </Button>
  );
}
