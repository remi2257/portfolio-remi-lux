import { useTranslations } from "next-intl";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import SocialIcons from "./SocialIcons";

export default function Footer() {
  const t = useTranslations("footer");

  const iconClasses = "inline-block h-6 w-6 mx-2";

  return (
    <footer className="mt-8 border-t sm:mt-12">
      <div className="container flex flex-col items-center justify-center gap-y-4 py-4 sm:flex-row sm:justify-between">
        <div className="text-center font-bold">
          {t("madeWith")}
          <span className="whitespace-nowrap">
            <SiNextdotjs className={iconClasses} />
            &
            <SiTailwindcss className={iconClasses} />
          </span>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}
