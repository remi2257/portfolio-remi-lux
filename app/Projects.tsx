import Link from "next/link";
import { MdGridOn } from "react-icons/md";
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
    description: `Profile Perfect AI uses AI to enhance your online identity with beautiful photos.
      Whether on LinkedIn, dating apps, or social networks, we're here to make sure your profile photo leaves a lasting impression.`,
    Icon: TbPhotoAi,
    date: "2023",

    footer: (
      <Button asChild>
        <Link href="https://profile-perfect-ai.remi-lux.dev/" target="_blank">
          Go to website
        </Link>
      </Button>
    ),
  },

  {
    title: "TGV Max Extra",
    subtitle: "Angular, Firbase, Stripe",
    description:
      "TGV Max Extra is a web application enabling TGV Max subscribers to create alerts and be notified when €0 tickets are available.",
    Icon: TbTrain,
    date: "2020",
    archived: true,
  },
  {
    title: "Sudoku Solver",
    subtitle: "Solve sudoku with AI",
    description: `Dynamically resolves the solutions for multiple Sudoku grids in real-time. Once solved, these solutions are showcased through Augmented Reality.
      This project has garnered more than 500 stars on GitHub.`,
    Icon: MdGridOn,
    date: "2019",

    footer: (
      <Button asChild>
        <Link href="https://github.com/remi2257/sudoku-solver" target="_blank">
          See on GitHub
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
