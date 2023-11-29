import Link from "next/link";
import { BsBank } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { GiFrance, GiRobotGrab } from "react-icons/gi";
import { TbSubmarine } from "react-icons/tb";
import { WiMoonAltWaxingCrescent1 } from "react-icons/wi";

import SectionTitle from "@/components/atoms/SectionTitle";
import VerticalTimeline, {
  TimelineElement,
} from "@/components/molecules/VerticalTimeline";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const experienceList: TimelineElement[] = [
  {
    title: "Serendy",
    subtitle: "CTO & Co-founder",
    description: `Development of Serendy, a dating application focused on the present moment.
    What sets Serendy apart is its natural, spontaneous approach, breaking with the endless exchange of messages often devoid of real encounters. User A sends a request to user B, and if accepted, a rendezvous point emerges with three bar proposals to make the meeting a reality. Serendy thus optimizes the dating process by placing the real world at the heart of the experience.`,
    Icon: WiMoonAltWaxingCrescent1,
    date: "2023",

    footer: (
      <Button asChild>
        <Link href="https://serendy.io/" target="_blank">
          Go to website
        </Link>
      </Button>
    ),
  },

  {
    title: "Milleis Banque Privée",
    subtitle: "Front-end Developer | Freelance",
    description:
      "Development of tools for Milleis private bankers (file creation, online signature, ...).",
    Icon: BsBank,
    date: "2023",
  },
  {
    title: "MASA Group",
    subtitle: "Full-Stack Developer | Freelance",
    description:
      "Development of GEFORA, a tool enabling the French army to manage its troops and operations.",
    Icon: GiFrance,
    date: "2022",
  },
  {
    title: "Stockly",
    subtitle: "Front-end Developer | Freelance",
    description:
      "Development of the Back Office application enabling operational staff to purchase & ship products.",
    Icon: FaBox,
    date: "2022",
  },
  {
    title: "Forssea Robotics",
    subtitle: "Software Engineer | Contract",
    description:
      "Architecture of the NAVCAM Robotics Stack & Interfacing between software and NAVCAM HMI.",
    Icon: TbSubmarine,
    date: "2022",
  },
  {
    title: "Niryo",
    subtitle: "Computer Vision & Robotics Engineer | Contract",
    description:
      "Responsible for the software part of the Set Vision marketed on the Niryo One.",
    Icon: GiRobotGrab,
    date: "2019/21",
  },
];

const ProfessionalExperiences: React.FC<{
  index: number;
  className?: string;
}> = ({ index, className }) => {
  return (
    <section className={cn("space-y-8 sm:space-y-12", className)}>
      <SectionTitle
        index={index}
        title="Professional Experiences"
        className="mb-6"
      />
      <VerticalTimeline elements={experienceList} />
    </section>
  );
};

export default ProfessionalExperiences;
