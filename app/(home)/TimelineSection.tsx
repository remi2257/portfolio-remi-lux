import { cn } from "@/lib/utils";

import SectionTitle from "./SectionTitle";
import VerticalTimeline, { TimelineElement } from "./VerticalTimeline";

const TimelineSection: React.FC<{
  id?: string;
  index: number;
  label: string;
  timelineElements: TimelineElement[];
  className?: string;
}> = ({ id, index, label, timelineElements, className }) => {
  return (
    <section id={id} className={cn("space-y-8 sm:space-y-12", className)}>
      <SectionTitle index={index} title={label} />
      <VerticalTimeline elements={timelineElements} />
    </section>
  );
};

export default TimelineSection;
