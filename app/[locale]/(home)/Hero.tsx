import { useTranslations } from "next-intl";

import SocialIcons from "@/components/molecules/SocialIcons";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import HeroImage from "./HeroImage";

const Hero: React.FC<{ className?: string }> = ({ className }) => {
  const t = useTranslations("home.hero");
  const ctaT = useTranslations("cta");

  return (
    <section
      className={cn(
        "flex max-w-prose flex-col items-center gap-y-4 sm:gap-y-6",
        className
      )}
    >
      <HeroImage />
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-balance text-center text-2xl font-black sm:text-3xl">
          {t.rich("title", {
            span1: children => (
              <span className="gradient-colors-3 text-gradient bg-gradient-to-r">
                {children}
              </span>
            ),
            span2: children => (
              <span className="gradient-colors-1 text-gradient bg-gradient-to-r">
                {children}
              </span>
            ),
          })}
        </h1>
        <h2 className="text-pretty text-center text-muted-foreground sm:text-xl">
          {t("subtitle")}
        </h2>
      </div>

      <div className="grid gap-y-4 sm:grid-cols-3 sm:gap-x-10">
        <Button asChild variant="outline">
          <Link href="/#contact">{ctaT("contactMe")}</Link>
        </Button>
        <SocialIcons />
        <Button asChild variant="default">
          <Link href="/resume">{ctaT("getMyResume")}</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
