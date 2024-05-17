import { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiAngularjs,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useTranslationsWithList } from "@/utils";

import SectionTitle from "./SectionTitle";

const SkillIcon: React.FC<{
  Icon: IconType;
  tooltip: string;
  className?: string;
}> = ({ Icon, tooltip, className }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Icon
            className={cn("h-10 w-10 sm:h-12 sm:w-12 transition", className)}
          />
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const About: React.FC<{ index: number; className?: string }> = ({
  index,
  className,
}) => {
  const [t, tList] = useTranslationsWithList("home.about");

  const skillLineClasses =
    "flex flex-wrap justify-center items-center gap-3 sm:gap-x-4";

  return (
    <section id="about" className={cn("space-y-6 sm:space-y-10", className)}>
      <SectionTitle index={index} title={t("title")} />

      <div className="space-y-3 text-pretty pb-2 text-center text-base text-muted-foreground sm:space-y-6 sm:text-lg">
        <p className="text-xl font-bold text-foreground sm:text-2xl">
          {t("hey")}
        </p>

        {tList("description").map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>

      <div className="flex flex-col items-center gap-y-6">
        <div className="text-base font-medium uppercase text-muted-foreground sm:text-lg">
          {t("experienceWith")}
        </div>
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div
            // General Web Development
            className={skillLineClasses}
          >
            <SkillIcon
              Icon={SiHtml5}
              tooltip="HTML"
              className={"hover:text-orange-500"}
            />
            <SkillIcon
              Icon={SiCss3}
              tooltip="CSS"
              className={"hover:text-blue-500"}
            />
            <SkillIcon
              Icon={SiTailwindcss}
              tooltip="TailwindCSS"
              className={"hover:text-teal-500"}
            />
            <SkillIcon
              Icon={SiJavascript}
              tooltip="JavaScript"
              className={"hover:text-yellow-400"}
            />
            <SkillIcon
              Icon={SiTypescript}
              tooltip="TypeScript"
              className={"hover:text-blue-700"}
            />
          </div>
          <div
            // Web Frameworks
            className={skillLineClasses}
          >
            <SkillIcon
              Icon={SiReact}
              tooltip="React.js"
              className={"hover:text-blue-400"}
            />
            <SkillIcon
              Icon={SiNextdotjs}
              tooltip="Next.js"
              className={"hover:text-neutral-500"}
            />
            <SkillIcon
              Icon={SiAngularjs}
              tooltip="Angular"
              className={"hover:text-red-600"}
            />
          </div>
          <div
            // Database
            className={skillLineClasses}
          >
            <SkillIcon
              Icon={SiSupabase}
              tooltip="Supabase"
              className={"hover:text-green-600"}
            />
            <SkillIcon
              Icon={SiPostgresql}
              tooltip="PostgreSQL"
              className={"hover:text-blue-800"}
            />
            <SkillIcon
              Icon={SiFirebase}
              tooltip="Firebase"
              className={"hover:text-amber-500"}
            />
          </div>
          <div
            // Tools
            className={skillLineClasses}
          >
            <SkillIcon
              Icon={SiGit}
              tooltip="Git"
              className={"hover:text-red-500"}
            />
            <SkillIcon
              Icon={SiVercel}
              tooltip="Vercel"
              className={"hover:text-neutral-500"}
            />
            <SkillIcon
              Icon={SiAmazonaws}
              tooltip="AWS"
              className={"hover:text-orange-600"}
            />
            <SkillIcon
              Icon={SiDocker}
              tooltip="Docker"
              className={"hover:text-sky-600"}
            />
          </div>
          <div
            // Other languages
            className={skillLineClasses}
          >
            <SkillIcon
              Icon={SiNodedotjs}
              tooltip="Node.js"
              className={"hover:text-green-600"}
            />
            <SkillIcon
              Icon={SiGo}
              tooltip="Go"
              className={"hover:text-sky-500"}
            />
            <SkillIcon
              Icon={SiPython}
              tooltip="Python"
              className={"hover:text-yellow-500"}
            />
            <SkillIcon
              Icon={SiCplusplus}
              tooltip="C++"
              className={"hover:text-blue-700"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
