import Link from "next/link";
import { MdGridOn } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { TbPhotoAi, TbTrain } from "react-icons/tb";

import SectionTitle from "@/components/atoms/SectionTitle";
import VerticalTimeline, {
  TimelineElement,
} from "@/components/molecules/VerticalTimeline";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectList: TimelineElement[] = [
  {
    title: "Profile Perfect AI",
    subtitle: "Next.js, TailwindCSS, Stable Diffusion, GPU Cloud, Stripe",
    badges: ["Live"],
    description: `Profile Perfect AI allows users to create AI-generated photos. All users have to do is upload a few photos of themselves, and the AI will generate a new photo of them.
                  Whether on LinkedIn, dating apps, or social networks, you can be sure that your profile photo leaves a lasting impression.`,
    footer: (
      <Button asChild>
        <Link href="https://profile-perfect-ai.remi-lux.dev/" target="_blank">
          Visit website
        </Link>
      </Button>
    ),

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
    subtitle: "Solve sudoku with AI",
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
];

const Projects: React.FC<{ index: number; className?: string }> = ({
  index,
  className,
}) => {
  return (
    <section className={cn("space-y-8 sm:space-y-12", className)}>
      <SectionTitle index={index} title="Projects" className="mb-6" />
      <VerticalTimeline elements={projectList} />
    </section>
  );
};

export default Projects;
