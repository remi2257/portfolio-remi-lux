"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

import { Button } from "@/components/ui/button";

export function ModeToggleButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      variant="outline"
      size="icon"
      className="mono-grid place-items-center"
      onClick={toggleTheme}
    >
      <LuSun className="size-5 rotate-0 scale-100 transition dark:-rotate-90 dark:scale-0" />
      <LuMoon className="size-5 rotate-90 scale-0 transition dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
