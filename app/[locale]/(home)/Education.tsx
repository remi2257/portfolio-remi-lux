import { IoIosSchool } from "react-icons/io";
import { MdEngineering } from "react-icons/md";

import { useTranslationsWithList } from "@/utils";

import TimelineSection from "./TimelineSection";
import { TimelineElement } from "./VerticalTimeline";

const Education: React.FC<{
  index: number;
  className?: string;
}> = ({ index, className }) => {
  const [t, tList] = useTranslationsWithList("home.education");

  const timelineElmtList: TimelineElement[] = [
    {
      title: t("phelma.title"),
      subtitle: "Grenoble INP - Phelma",
      description: tList("phelma.description"),

      Icon: MdEngineering,
      date: "2016/19",
    },
    {
      title: t("prepa.title"),
      subtitle: "Lycée Fabert, Metz",
      description: tList("prepa.description"),

      Icon: IoIosSchool,
      date: "2014/16",
    },
  ];

  return (
    <TimelineSection
      id="education"
      index={index}
      label={t("title")}
      timelineElements={timelineElmtList}
      className={className}
    />
  );
};

export default Education;
