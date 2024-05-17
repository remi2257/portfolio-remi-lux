import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaCar } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { TbPhotoAi, TbTrain } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { useTranslationsWithList } from "@/utils";

import TimelineSection from "./TimelineSection";
import { TimelineElement } from "./VerticalTimeline";

const Projects: React.FC<{ index: number; className?: string }> = ({
  index,
  className,
}) => {
  const [t, tList] = useTranslationsWithList("home.projects");
  const ctaT = useTranslations("cta");

  const projectList: TimelineElement[] = [
    {
      title: t("profilePerfectAI.title"),
      subtitle: "Next.js, Stable Diffusion, GPU Cloud, Stripe",
      badges: [t("badges.ai"), t("badges.archived")],
      description: tList("profilePerfectAI.description"),
      // footer: (
      //   <Button asChild>
      //     <Link href="https://profile-perfect-ai.remi-lux.dev/" target="_blank">
      //       Visit website
      //     </Link>
      //   </Button>
      // ),

      Icon: TbPhotoAi,
      date: "2023",
    },
    {
      title: "TGV Max Extra",
      subtitle: "Angular, Firebase, Stripe",
      description: tList("tgvMaxExtra.description"),
      badges: [t("badges.generatedMoney"), t("badges.archived")],

      Icon: TbTrain,
      date: "2020",
    },
    {
      title: "Sudoku Solver",
      subtitle: t("sudokuSolver.subtitle"),
      badges: ["600+ Stars"],
      description: tList("sudokuSolver.description"),
      Icon: MdGridOn,
      date: "2019",

      footer: (
        <Button asChild>
          <Link
            href="https://github.com/remi2257/sudoku-solver"
            target="_blank"
          >
            {ctaT("seeOnGithub")}
            <SiGithub className="ml-2 size-4" />
          </Link>
        </Button>
      ),
    },
    {
      title: "Little Car AI",
      subtitle: t("littleCarAI.subtitle"),
      badges: [t("badges.ai")],
      description: tList("littleCarAI.description"),

      Icon: FaCar,
      date: "2018",

      footer: (
        <Button asChild>
          <Link
            href="https://github.com/remi2257/little-car-ai"
            target="_blank"
          >
            {ctaT("seeOnGithub")}
            <SiGithub className="ml-2 size-4" />
          </Link>
        </Button>
      ),
    },
  ];

  return (
    <TimelineSection
      id="projects"
      index={index}
      label={t("title")}
      timelineElements={projectList}
      className={className}
    />
  );
};

export default Projects;
