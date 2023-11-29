import {
  SiAngularjs,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import SectionTitle from "@/components/atoms/SectionTitle";
import { cn } from "@/lib/utils";

const About: React.FC<{ index: number; className?: string }> = ({
  index,
  className,
}) => {
  const skillLineClasses =
    "flex flex-wrap justify-center items-center gap-3 sm:gap-x-4";
  const iconClasses = "h-10 w-10 sm:h-12 sm:w-12";

  return (
    <section className={cn("max-w-prose space-y-8", className)}>
      <div className="text-center text-lg">
        <SectionTitle index={index} title="About" className="mb-6" />
        <p className="text-pretty">
          I&apos;m Rémi Lux! I&apos;ve got 2+ years of web development
          experience, mainly focusing on front-end.
        </p>
        <p className="text-pretty">
          I love new challenges and I&apos;m always looking for opportunities to
          learn new things.
        </p>
      </div>

      <div className="flex flex-col items-center gap-y-6">
        <div className="text-lg font-medium uppercase text-muted-foreground">
          Experience with
        </div>
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className={skillLineClasses}>
            <SiHtml5
              className={cn(iconClasses, "transition hover:text-orange-500")}
            />
            <SiCss3
              className={cn(iconClasses, "transition hover:text-blue-500")}
            />
            <SiTailwindcss
              className={cn(iconClasses, "transition hover:text-teal-500")}
            />
            <SiJavascript
              className={cn(iconClasses, "transition hover:text-yellow-400")}
            />
            <SiTypescript
              className={cn(iconClasses, "transition hover:text-blue-700")}
            />
          </div>
          <div className={skillLineClasses}>
            <SiReact
              className={cn(iconClasses, "transition hover:text-blue-400")}
            />
            <SiNextdotjs
              className={cn(iconClasses, "transition hover:text-neutral-500")}
            />
            <SiAngularjs
              className={cn(iconClasses, "transition hover:text-red-600")}
            />
          </div>
          <div className={skillLineClasses}>
            <SiSupabase
              className={cn(iconClasses, "transition hover:text-green-600")}
            />
            <SiPostgresql
              className={cn(iconClasses, "transition hover:text-blue-800")}
            />
            <SiDocker
              className={cn(iconClasses, "transition hover:text-sky-500")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
