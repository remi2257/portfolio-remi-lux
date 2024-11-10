import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsBank } from "react-icons/bs";
import { FaBox, FaImages, FaTshirt } from "react-icons/fa";
import { GiFrance, GiOwl, GiRobotGrab } from "react-icons/gi";
import { TbSubmarine } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { WiMoonAltWaxingCrescent1 } from "react-icons/wi";

import { Button } from "@/components/ui/button";
import { useTranslationsWithList } from "@/utils";

import TimelineSection from "./TimelineSection";
import { TimelineElement } from "./VerticalTimeline";

const ProfessionalExperiences: React.FC<{
  index: number;
  className?: string;
}> = ({ index, className }) => {
  const [t, tList] = useTranslationsWithList("home.experiences");
  const ctaT = useTranslations("cta");

  const experienceList: TimelineElement[] = [
    {
      title: "Meero",
      subtitle: "Senior Front-End Engineer",
      badges: [t("badges.cdi"), "React.js", "TailwindCSS"],
      description: tList("meero.description"),

      Icon: FaImages,
      date: "2024",

      footer: (
        <Button asChild>
          <Link
            href="https://carcutter.github.io/cars-webplayer-js/"
            target="_blank"
          >
            {ctaT("seeDocumentation")}
          </Link>
        </Button>
      ),
    },
    {
      title: "Souk",
      subtitle: "Full-Stack Engineer",
      badges: ["Freelance", "Next.js", "React Native", "Go"],
      description: tList("souk.description"),

      Icon: FaTshirt,
      date: "2024",

      footer: (
        <Button asChild>
          <Link href="https://souk.to" target="_blank">
            {ctaT("visitWebsite")}
          </Link>
        </Button>
      ),
    },
    {
      title: "Serendy",
      subtitle: "Full-Stack Engineer",
      badges: ["Freelance", "React Native", "Next.js", "Supabase"],
      description: tList("serendy.description"),

      Icon: WiMoonAltWaxingCrescent1,
      date: "2023",

      footer: (
        <Button asChild>
          <Link href="https://serendy.io/" target="_blank">
            {ctaT("visitWebsite")}
          </Link>
        </Button>
      ),
    },
    {
      title: "Milleis Banque Privée",
      subtitle: "Front-End Engineer",
      badges: ["Freelance", "React", "TailwindCSS"],
      description: tList("milleis.description"),

      Icon: BsBank,
      date: "2023",
    },
    {
      title: "MASA Group",
      subtitle: "Full-Stack Engineer",
      badges: ["Freelance", "Angular", "PostgreSQL"],
      description: tList("masa.description"),

      Icon: GiFrance,
      date: "2022",
    },
    {
      title: "Stockly",
      subtitle: "Front-End Engineer",
      badges: ["Freelance", "Angular"],
      description: tList("stockly.description"),

      Icon: FaBox,
      date: "2022",
    },
    {
      title: "Forssea Robotics",
      subtitle: "Software Engineer",
      badges: [t("badges.cdi"), "Computer Vision", "C++", "Angular"],
      description: tList("forssea.description"),

      Icon: TbSubmarine,
      date: "2021/22",
    },
    {
      title: "Niryo",
      subtitle: "Software Engineer",
      badges: [
        t("badges.cdi"),
        t("badges.robotics"),
        "Computer Vision",
        "Python",
        "Angular",
      ],
      description: tList("niryo.description"),

      Icon: GiRobotGrab,
      date: "2019/21",

      footer: (
        <Button asChild>
          <Link
            href="https://niryo.com/products-cobots/vision-set-ned2/"
            target="_blank"
          >
            {ctaT("seeOnWebsite")}
          </Link>
        </Button>
      ),
    },
    {
      title: "Bertin IT",
      subtitle: t("bertin.job"),
      badges: [t("badges.internship"), "Computer Vision", "Python"],
      description: tList("bertin.description"),

      Icon: VscGraphLine,
      date: "2019",
    },
    {
      title: "University of Plymouth",
      subtitle: t("plymouthUni.job"),
      badges: [t("badges.internship"), "Computer Vision", "Python"],
      description: tList("plymouthUni.description"),

      Icon: GiOwl,
      date: "2018",
    },
  ];

  return (
    <TimelineSection
      id="experiences"
      index={index}
      label={t("title")}
      timelineElements={experienceList}
      className={className}
    />
  );
};

export default ProfessionalExperiences;
