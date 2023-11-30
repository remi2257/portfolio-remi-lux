import Link from "next/link";

import { ModeToggleButton } from "@/components/atoms/ModeToggleButton";

import { Button } from "../ui/button";

export default async function Navbar() {
  return (
    <header className="mb-8 border-b sm:mb-12">
      <div className="container flex items-center justify-between gap-x-2 py-2 sm:py-4">
        <Link href="/">
          <h2 className="font-bold sm:text-lg xl:text-xl">Rémi Lux</h2>
        </Link>

        <div className="hidden md:flex lg:gap-x-4">
          <Button asChild variant="link">
            <Link href="#about">About</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="#projects">Projects</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="#experiences">Experiences</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="#education">Education</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <ModeToggleButton />
      </div>
    </header>
  );
}
