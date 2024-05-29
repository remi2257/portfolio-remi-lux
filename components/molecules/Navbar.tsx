import { useTranslations } from "next-intl";

import { LanguageToggleButton } from "@/components/atoms/LanguageToggleButton";
import { ThemeToggleButton } from "@/components/atoms/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function Navbar() {
  const navbarT = useTranslations("navbar");
  const ctaT = useTranslations("cta");

  return (
    <header className="mb-8 border-b sm:mb-12">
      <div className="container flex items-center justify-between gap-x-2 py-2 sm:py-4">
        <Link href="/">
          <div className="font-black sm:text-lg xl:text-xl">rémiL.</div>
        </Link>

        <div className="flex gap-x-2 max-sm:hidden">
          <Button className="max-xl:hidden" asChild variant="link">
            <Link href="/#about">{navbarT("about")}</Link>
          </Button>
          <Button className="max-xl:hidden" asChild variant="link">
            <Link href="/#experiences">{navbarT("experiences")}</Link>
          </Button>
          <Button className="max-xl:hidden" asChild variant="link">
            <Link href="/#projects">{navbarT("projects")}</Link>
          </Button>
          <Button className="max-xl:hidden" asChild variant="link">
            <Link href="/#education">{navbarT("education")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#contact">{ctaT("contactMe")}</Link>
          </Button>
          <Button asChild variant="default" className="ml-2">
            <Link href="/resume">{ctaT("getMyResume")}</Link>
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
