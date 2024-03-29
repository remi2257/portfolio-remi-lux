import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { TbPhotoAi, TbTrain } from "react-icons/tb";

import { Button } from "@/components/ui/button";

import TimelineSection from "./TimelineSection";
import { TimelineElement } from "./VerticalTimeline";

const projectList: TimelineElement[] = [
  {
    title: "Profile Perfect AI",
    subtitle: "Next.js, TailwindCSS, Stable Diffusion, GPU Cloud, Stripe",
    badges: ["AI", "Archived"],
    description: `Profile Perfect AI allows users to create AI-generated photos. All users have to do is upload a few photos of themselves, and the AI will generate a new photo of them.
                  Whether on LinkedIn, dating apps, or social networks, you can be sure that your profile photo leaves a lasting impression.`,
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
    description: `TGV Max Extra is a web application enabling TGV Max subscribers to create alerts and be notified when €0 tickets are available.
                  The application had 500+ users and 1000+ alerts send in less than 3 months.`,
    badges: ["Generated money", "Archived"],

    Icon: TbTrain,
    date: "2020",
  },
  {
    title: "Sudoku Solver",
    subtitle: "Solve any Sudoku with Computer Vision",
    badges: ["500+ Stars"],
    description: `Dynamically resolves the solutions for multiple Sudoku grids in real-time. Once solved, these solutions are showcased through Augmented Reality.
      This project has garnered more than 500 stars on GitHub.`,

    Icon: MdGridOn,
    date: "2019",

    footer: (
      <Button asChild>
        <Link href="https://github.com/remi2257/sudoku-solver" target="_blank">
          See on GitHub
          <SiGithub className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    ),
  },
  {
    title: "Little Car AI",
    subtitle: "Use AI to teach a car to drive",
    badges: ["AI"],
    description: `Teaching a car to drive through Reinforcement Learning.
                  The Neural Net processes LIDAR and speed data, with high-reward agents influencing the next generation, creating a cycle of improvement, mimicking natural selection.
                  `,

    Icon: FaCar,
    date: "2018",

    footer: (
      <Button asChild>
        <Link href="https://github.com/remi2257/little-car-ai" target="_blank">
          See on GitHub
          <SiGithub className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    ),
  },
];

const Projects: React.FC<{ index: number; className?: string }> = ({
  index,
  className,
}) => {
  return (
    <TimelineSection
      id="projects"
      index={index}
      label="Projects"
      timelineElements={projectList}
      className={className}
    />
  );
};

export default Projects;
