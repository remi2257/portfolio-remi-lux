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
          <Icon className={cn("size-10 transition sm:size-12", className)} />
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

  return (
    <section id="about" className={cn("space-y-6 sm:space-y-10", className)}>
      <SectionTitle index={index} title={t("title")} />

      <div className="space-y-3 text-pretty pb-2 text-center text-base text-muted-foreground sm:space-y-6 sm:text-lg">
        {tList("description").map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>

      <div className="flex flex-col items-center gap-y-6">
        <div className="text-base font-medium uppercase text-muted-foreground sm:text-lg">
          {t("experienceWith")}
        </div>
        <div
          className={cn(
            "flex flex-col items-center gap-6 sm:gap-8",

            // skillLineClasses
            "*:flex *:flex-wrap *:items-center *:justify-center *:gap-3 *:sm:gap-x-4"
          )}
        >
          <div
          // General Web Development
          >
            <SkillIcon
              Icon={SiHtml5}
              tooltip="HTML"
              className={"hover:text-[#f06529]"}
            />
            <SkillIcon
              Icon={SiCss3}
              tooltip="CSS"
              className={"hover:text-[#2965f1]"}
            />
            <SkillIcon
              Icon={SiTailwindcss}
              tooltip="TailwindCSS"
              className={"hover:text-[#38bdf8]"}
            />
            <SkillIcon
              Icon={SiJavascript}
              tooltip="JavaScript"
              className={"hover:text-[#f0db51]"}
            />
            <SkillIcon
              Icon={SiTypescript}
              tooltip="TypeScript"
              className={"hover:text-[#007acc]"}
            />
          </div>
          <div
          // Web Frameworks
          >
            <SkillIcon
              Icon={SiReact}
              tooltip="React.js"
              className={"hover:text-[#61dafb]"}
            />
            <SkillIcon
              Icon={SiNextdotjs}
              tooltip="Next.js"
              className={"hover:text-neutral-600"}
            />
            <SkillIcon
              Icon={SiAngularjs}
              tooltip="Angular"
              className={"hover:text-[#dd0031]"}
            />
          </div>
          <div
          // Database
          >
            <SkillIcon
              Icon={SiSupabase}
              tooltip="Supabase"
              className={"hover:text-[#3ecf8e]"}
            />
            <SkillIcon
              Icon={SiPostgresql}
              tooltip="PostgreSQL"
              className={"hover:text-[#336791]"}
            />
            <SkillIcon
              Icon={SiFirebase}
              tooltip="Firebase"
              className={"hover:text-[#ffca28]"}
            />
          </div>
          <div
          // Tools
          >
            <SkillIcon
              Icon={SiGit}
              tooltip="Git"
              className={"hover:text-[#f34f29]"}
            />
            <SkillIcon
              Icon={SiVercel}
              tooltip="Vercel"
              className={"hover:text-neutral-600"}
            />
            <SkillIcon
              Icon={SiAmazonaws}
              tooltip="AWS"
              className={"hover:text-[#ff9900]"}
            />
            <SkillIcon
              Icon={SiDocker}
              tooltip="Docker"
              className={"hover:text-[#2496ed]"}
            />
          </div>
          <div
          // Other languages
          >
            <SkillIcon
              Icon={SiNodedotjs}
              tooltip="Node.js"
              className={"hover:text-[#68a063]"}
            />
            <SkillIcon
              Icon={SiGo}
              tooltip="Go"
              className={"hover:text-[#00add8]"}
            />
            <SkillIcon
              Icon={SiPython}
              tooltip="Python"
              className={"hover:text-[#ffde57]"}
            />
            <SkillIcon
              Icon={SiCplusplus}
              tooltip="C++"
              className={"hover:text-[#3d7eaf]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
