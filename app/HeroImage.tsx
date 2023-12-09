"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

const HeroImage: React.FC<{ className?: string }> = ({ className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={cn(
        "mono-grid aspect-square opacity-0 transition-opacity duration-700 h-48 place-items-center sm:h-64",
        imageLoaded && "opacity-100",
        className
      )}
    >
      <Image
        priority
        src="/assets/hero-day-1.jpg"
        alt="Rémi Lux Day"
        width={256}
        height={256}
        className="rounded-full object-cover opacity-100 transition duration-500 dark:pointer-events-none dark:-translate-x-1/2 dark:opacity-0"
        onLoad={() => setImageLoaded(true)}
      />
      <Image
        src="/assets/hero-night-1.jpg"
        alt="Rémi Lux Night"
        width={256}
        height={256}
        className="pointer-events-none translate-x-1/2 rounded-full object-cover opacity-0 transition duration-500 dark:pointer-events-auto dark:translate-x-0 dark:opacity-100"
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default HeroImage;
