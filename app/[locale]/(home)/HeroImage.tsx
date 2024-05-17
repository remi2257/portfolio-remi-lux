"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import imgHeroDay from "@/public/assets/hero-day-1.jpg";
import imgHeroNight from "@/public/assets/hero-night-1.jpg";

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
        src={imgHeroDay}
        alt="Rémi Lux Day"
        className="rounded-full object-cover opacity-100 transition duration-500 dark:pointer-events-none dark:-translate-x-1/2 dark:opacity-0"
        onLoad={() => setImageLoaded(true)}
      />
      <Image
        src={imgHeroNight}
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
