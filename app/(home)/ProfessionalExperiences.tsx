import Link from "next/link";
import { BsBank } from "react-icons/bs";
import { FaBox, FaTshirt } from "react-icons/fa";
import { GiFrance, GiOwl, GiRobotGrab } from "react-icons/gi";
import { TbSubmarine } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { WiMoonAltWaxingCrescent1 } from "react-icons/wi";

import { Button } from "@/components/ui/button";

import TimelineSection from "./TimelineSection";
import { TimelineElement } from "./VerticalTimeline";

const experienceList: TimelineElement[] = [
  {
    title: "Souk",
    subtitle: "CTO as a Service",
    badges: ["Freelance", "Golang", "AWS", "React Native", "Next.js"],
    description: [
      "Work on Souk, a high-performance Vinted scraper ensuring users never miss out on best products.",
      "Optimized Golang backend for scalability and speed.",
      "Collaborated closely with designers to create a new branding.",
      "Development of both apps for mobile (React Native) & desktop (Next.js).",
    ],
    footer: (
      <Button asChild>
        <Link
          href="https://apps.apple.com/fr/app/souk-alertes-2nd-main/id6472217012"
          target="_blank"
        >
          See on stores
        </Link>
      </Button>
    ),

    Icon: FaTshirt,
    date: "2024",
  },
  {
    title: "Serendy",
    subtitle: "CTO & Co-founder",
    badges: ["React Native", "Supabase", "PostgreSQL"],
    description: [
      "Creation of Serendy, an dating app that shifts the focus from endless messaging to real-life connections.",
      "Users can see who is nearby and propose a date. If the request is accepted, Serendy chooses a local bar where users will meet in real life.",
      "Deployment of the application on both App Store and Play Store.",
    ],
    footer: (
      <Button asChild>
        <Link
          href="https://apps.apple.com/us/app/serendy/id6462817010"
          target="_blank"
        >
          See on stores
        </Link>
      </Button>
    ),

    Icon: WiMoonAltWaxingCrescent1,
    date: "2023",
  },
  {
    title: "Milleis Private Bank",
    subtitle: "Front-end Developer",
    badges: ["Freelance", "Angular", "TailwindCSS"],
    description: [
      "Development of tools for Milleis private bankers, focusing on tasks like client file creation and online signatures",
      "Used Angular for the Front-End of various applications, embracing a mono-repo setup facilitated by Nx.",
    ],
    Icon: BsBank,
    date: "2023",
  },
  {
    title: "MASA Group",
    subtitle: "Full-Stack Developer",
    badges: ["Freelance", "Angular", "PostgreSQL", "Nest.js"],
    description: [
      "Contributed to the development of GEFORA, a strategic tool empowering the French army in troop and operations oversight.",
      "Used an Angular Front-End with communicated with a Nest.js Back-End.",
      "All was inside a Nx mono-repo, and data management was facilitated with PostgreSQL and TypeORM.",
    ],

    Icon: GiFrance,
    date: "2022",
  },
  {
    title: "Stockly",
    subtitle: "Front-end Developer",
    badges: ["Freelance", "Angular"],
    description: [
      "Development of the Back Office application, offering operational staff an efficient tool for purchasing and shipping products.",
      "Employed Angular for the Front-End to implement design from Figma.",
    ],
    Icon: FaBox,
    date: "2022",
  },
  {
    title: "Forssea Robotics",
    subtitle: "Software Engineer",
    badges: ["Contract", "Robotics", "Python", "C++", "Angular"],
    description: [
      "Created the architectural blueprint of the NAVCAM, emphasizing a seamless interface between the software and the HMI.",
      "Employed ROS 2 with C++ for the robotic framework, integrated NodeJS and Express for the Back-End, and utilized Angular for the HMI.",
    ],
    Icon: TbSubmarine,
    date: "2021/22",
  },
  {
    title: "Niryo",
    subtitle: "Computer Vision & Robotics Engineer",
    badges: ["Contract", "Robotics", "Python", "C++", "Angular"],
    description: [
      "Directed the software development for Set Vision, a featured product on both robots Niryo One & Niryo Ned.",
      "Led the creation of vision modules for different robots of both educational and industrial sectors, involving decisions from camera selection to guiding the robot's actions with objects.",
      "Employed Python, ROS, and OpenCV for the robotic systems & Angular for the HMI.",
    ],
    footer: (
      <Button asChild>
        <Link
          href="https://niryo.com/products-cobots/vision-set-ned2/"
          target="_blank"
        >
          See on website
        </Link>
      </Button>
    ),

    Icon: GiRobotGrab,
    date: "2019/21",
  },
  {
    title: "Bertin IT",
    subtitle: "Computer Vision & Software Engineer",
    badges: ["Internship", "Computer Vision", "Python"],
    description: [
      "Built to the Video Summary segment of MediaCentric®, a solution that acquires video files from diverse sources like YouTube, Facebook, and Twitter.",
      "My primary objective was to provide a rapid and comprehensive synthesis of web videos extracted by the solution.",
      "To achieve this, I used deep learning techniques and OpenCV to detect keyframes, and extract faces & texts.",
    ],

    Icon: VscGraphLine,
    date: "2019",
  },
  {
    title: "University of Plymouth",
    subtitle: "Computer Vision Engineer",
    badges: ["Internship", "Computer Vision", "Python"],
    description: [
      "Immersed myself in a 10-week internship dedicated to the Owl Robot, a robotics project at the University of Plymouth.",
      "My primary task was to refine the target tracking algorithm with OpenCV.",
    ],

    Icon: GiOwl,
    date: "2018",
  },
];

const ProfessionalExperiences: React.FC<{
  index: number;
  className?: string;
}> = ({ index, className }) => {
  return (
    <TimelineSection
      id="experiences"
      index={index}
      label="Professional Experiences"
      timelineElements={experienceList}
      className={className}
    />
  );
};

export default ProfessionalExperiences;
