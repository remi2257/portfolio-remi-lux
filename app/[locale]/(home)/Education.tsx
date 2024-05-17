import { IoIosSchool } from "react-icons/io";
import { MdEngineering } from "react-icons/md";

import TimelineSection from "./TimelineSection";
import { TimelineElement } from "./VerticalTimeline";

const timelineeList: TimelineElement[] = [
  {
    title: "Master in Signal & Image Processing",
    subtitle: "Grenoble INP - Phelma",
    description: [
      "The Master covered a broad spectrum, from general electronics to machine learning, focusing particularly on image processing.",
      "Key projects featured deep learning for noise reduction in speech & creating an Arduino device for air quality assessment with online data integration.",
    ],

    Icon: MdEngineering,
    date: "2016/19",
  },
  {
    title: "French Scientific Preparatory Class",
    subtitle: "Lycée Fabert, Metz",
    description: [
      "Immersed myself in the Physics & Chemistry preparatory track (PCSI/PC*), setting the stage for competitive engineering school exams.",
      "It gave me a lot of theoretical knowledge about science, and it also taught me rigor and how to manage a heavy workload.",
    ],

    Icon: IoIosSchool,
    date: "2014/16",
  },
];

const Education: React.FC<{
  index: number;
  className?: string;
}> = ({ index, className }) => {
  return (
    <TimelineSection
      id="education"
      index={index}
      label="Education"
      timelineElements={timelineeList}
      className={className}
    />
  );
};

export default Education;
