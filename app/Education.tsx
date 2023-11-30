import { IoIosSchool } from "react-icons/io";
import { MdEngineering } from "react-icons/md";

import TimelineSection from "@/components/molecules/TimelineSection";
import { TimelineElement } from "@/components/molecules/VerticalTimeline";

const timelineeList: TimelineElement[] = [
  {
    title: "Master in Signal & Image Processing",
    subtitle: "Grenoble INP - Phelma",
    description: `The curriculum covered a diverse array of concepts, including general electronics, image processing, machine learning encompassing optimization and classification, telecommunications, and signal processing.
                  Additionally, it delved into the intricacies of audio, image, and video compression techniques.
                  `,

    Icon: MdEngineering,
    date: "2016/19",
  },
  {
    title: "French Scientific Preparatory Class",
    subtitle: "Lycée Fabert, Metz",
    description: `For 2 years, I prepared for the competitive entrance exam to an engineering school.
                  It gave me a lot of theoretical knowledge about science, and it also taught me rigor and how to manage a heavy workload.
                  Curriculum: Physics & Chemistry (PCSI/PC*)
                  `,

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
