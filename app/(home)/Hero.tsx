import Link from "next/link";

import SocialIcons from "@/components/molecules/SocialIcons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import HeroImage from "./HeroImage";

const Hero: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section
      className={cn(
        "flex flex-col items-center gap-y-4 max-w-prose",
        className
      )}
    >
      <HeroImage />
      <h2 className="text-pretty text-center text-2xl font-black sm:text-3xl">
        Experienced{" "}
        <span className="gradient-colors-3 text-gradient bg-gradient-to-r">
          Software Engineer
        </span>{" "}
        specialized in{" "}
        <span className="gradient-colors-1 text-gradient bg-gradient-to-r">
          Full-Stack
        </span>{" "}
        Development
      </h2>
      <h3 className="text-balance text-center text-muted-foreground sm:text-xl">
        From concept to launch, I craft web platforms that are robust, scalable,
        and designed to engage, powered by the latest in technology trends.
      </h3>
      <div className="grid gap-y-4 sm:grid-cols-3 sm:gap-x-10">
        <Button asChild variant="outline">
          <Link href="/#contact">Contact Me</Link>
        </Button>
        <SocialIcons />
        <Button asChild variant="default">
          <Link href="/resume">Get my resume</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
