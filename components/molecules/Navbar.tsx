import Link from "next/link";

import { ModeToggleButton } from "@/components/atoms/ModeToggleButton";

// TODO : use absolute import
import { Button } from "../ui/button";

export default async function Navbar() {
  return (
    <header className="mb-8 border-b sm:mb-12">
      <div className="container flex items-center justify-between gap-x-2 py-2 sm:py-4">
        <Link href="/">
          {/* TODO: Black / lower case ? */}
          <h1 className="font-bold sm:text-lg xl:text-xl">Rémi Lux</h1>
        </Link>

        <div className="hidden sm:flex sm:gap-x-2">
          <Button className="hidden lg:inline-flex" asChild variant="link">
            <Link href="/#about">About</Link>
          </Button>
          <Button className="hidden lg:inline-flex" asChild variant="link">
            <Link href="/#projects">Projects</Link>
          </Button>
          <Button className="hidden lg:inline-flex" asChild variant="link">
            <Link href="/#experiences">Experiences</Link>
          </Button>
          <Button className="hidden lg:inline-flex" asChild variant="link">
            <Link href="/#education">Education</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="default" className="ml-2">
            <Link href="/resume">Get my resume</Link>
          </Button>
        </div>

        <ModeToggleButton />
      </div>
    </header>
  );
}
