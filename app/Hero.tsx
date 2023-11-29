import Image from "next/image";
import Link from "next/link";

import SocialIcons from "@/components/molecules/SocialIcons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section
      className={cn(
        "flex flex-col items-center gap-y-4 max-w-prose",
        className
      )}
    >
      <div className="mono-grid aspect-square h-48 sm:h-64">
        <Image
          priority
          src="/assets/hero-day-1.jpg"
          alt="Rémi Lux Day"
          width={256}
          height={256}
          className={cn(
            "rounded-full object-cover transition duration-500 opacity-100 dark:-translate-x-1/2 dark:opacity-0 dark:pointer-events-none"
          )}
        />
        <Image
          src="/assets/hero-night-1.jpg"
          alt="Rémi Lux Night"
          width={256}
          height={256}
          className={cn(
            "rounded-full object-cover transition duration-500 opacity-0 translate-x-1/2 dark:translate-x-0 dark:opacity-100 pointer-events-none dark:pointer-events-auto"
          )}
        />
      </div>
      <h2 className="text-pretty text-center text-2xl font-black sm:text-3xl">
        Experienced web developer specializing in{" "}
        <span className="gradient-colors-1 bg-gradient-to-r bg-clip-text text-transparent">
          ReactJS
        </span>
        .
      </h2>
      <h3 className="text-pretty text-center text-muted-foreground sm:text-xl">
        I have a strong foundration in HTML, CSS and Javascript, and I am
        skilled in creating interactive and visually appealing websites.
      </h3>
      <div className="flex items-center gap-x-8">
        <Button asChild>
          <Link href="#contact" className="scroll-smooth">
            Contact me
          </Link>
        </Button>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Hero;
