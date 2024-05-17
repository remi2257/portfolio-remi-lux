import Link from "next/link";
import { useTranslations } from "next-intl";

import { LanguageToggleButton } from "@/components/atoms/LanguageToggleButton";
import { ThemeToggleButton } from "@/components/atoms/ThemeToggleButton";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const t = useTranslations();

  return (
    <header className="mb-8 border-b sm:mb-12">
      <div className="container flex items-center justify-between gap-x-2 py-2 sm:py-4">
        <Link href="/">
          <h1 className="font-black sm:text-lg xl:text-xl">rémiL.</h1>
        </Link>

        <div className="flex gap-x-2 max-sm:hidden">
          <Button className="max-xl:hidden" asChild variant="link">
            <Link href="/#about">{t("navbar.about")}</Link>
          </Button>
          <Button className="max-xl:hidden" asChild variant="link">
            <Link href="/#projects">{t("navbar.projects")}</Link>
          </Button>
          <Button className="max-xl:hidden" asChild variant="link">
            <Link href="/#experiences">{t("navbar.projects")}</Link>
          </Button>
          <Button className="max-xl:hidden" asChild variant="link">
            <Link href="/#education">{t("navbar.education")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#contact">{t("cta.contactMe")}</Link>
          </Button>
          <Button asChild variant="default" className="ml-2">
            <Link href="/resume">{t("cta.getMyResume")}</Link>
          </Button>
        </div>

        <div className="flex gap-x-2">
          <ThemeToggleButton />
          <LanguageToggleButton />
        </div>
      </div>
    </header>
  );
}
