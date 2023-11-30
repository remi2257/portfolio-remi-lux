import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import SocialIcons from "./SocialIcons";

export default function Footer() {
  const iconClasses = "inline-block h-6 w-6 mx-2";

  return (
    <footer className="mt-8 border-t sm:mt-12">
      <div className="container flex flex-col items-center justify-center gap-y-4 py-4 sm:flex-row sm:justify-between">
        <h2 className="text-center font-bold">
          Developped by Rémi Lux with
          <span className="whitespace-nowrap">
            <SiNextdotjs className={iconClasses} />
            &
            <SiTailwindcss className={iconClasses} />
          </span>
        </h2>
        <SocialIcons />
      </div>
    </footer>
  );
}
