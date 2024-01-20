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
        Experienced Full-Stack Engineer specialized in{" "}
        <span className="gradient-colors-1 bg-gradient-to-r bg-clip-text text-transparent">
          Front-End
        </span>
      </h2>
      <h3 className="text-balance text-center text-muted-foreground sm:text-xl">
        With a robust HTML, CSS, and Javascript foundation and Full-Stack
        expertise, I develop visually engaging websites with enhanced
        functionality.
      </h3>
      <div className="grid gap-y-4 sm:grid-cols-3 sm:gap-x-10">
        <Button asChild>
          <Link href="#contact">Contact me</Link>
        </Button>
        <SocialIcons />
        <Button asChild>
          <Link href="/resume">Get my resume</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
