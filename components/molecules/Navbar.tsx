import Link from "next/link";

import { ModeToggleButton } from "@/components/atoms/ModeToggleButton";

export default async function Navbar() {
  return (
    <header className="mb-8 border-b sm:mb-12">
      <div className="container flex items-center justify-between py-2 sm:py-4">
        <Link href="/">
          <h2 className="font-bold sm:text-lg xl:text-xl">Rémi Lux</h2>
        </Link>

        <ModeToggleButton />
      </div>
    </header>
  );
}
