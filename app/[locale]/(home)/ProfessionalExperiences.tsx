import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsBank } from "react-icons/bs";
import { FaBox, FaTshirt } from "react-icons/fa";
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
      title: "Souk",
      subtitle: "CTO as a Service",
      badges: ["Freelance", "Next.js", "React Native", "Golang", "AWS"],
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
      subtitle: t("serendy.job"),
      badges: ["React Native", "Next.js", "Supabase", "PostgreSQL"],
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
      subtitle: t("milleis.job"),
      badges: ["Freelance", "Angular", "TailwindCSS"],
      description: tList("milleis.description"),

      Icon: BsBank,
      date: "2023",
    },
    {
      title: "MASA Group",
      subtitle: t("masa.job"),
      badges: ["Freelance", "Angular", "PostgreSQL", "Nest.js"],
      description: tList("masa.description"),

      Icon: GiFrance,
      date: "2022",
    },
    {
      title: "Stockly",
      subtitle: t("stockly.job"),
      badges: ["Freelance", "Angular"],
      description: tList("stockly.description"),

      Icon: FaBox,
      date: "2022",
    },
    {
      title: "Forssea Robotics",
      subtitle: t("forssea.job"),
      badges: [
        t("badges.cdi"),
        t("badges.robotics"),
        "Python",
        "C++",
        "Angular",
      ],
      description: tList("forssea.description"),

      Icon: TbSubmarine,
      date: "2021/22",
    },
    {
      title: "Niryo",
      subtitle: t("niryo.job"),
      badges: [
        t("badges.cdi"),
        t("badges.robotics"),
        "Computer Vision",
        "Python",
        "C++",
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
