export const colorList = ["blue", "green", "orange", "purple", "red"] as const;
export type Color = (typeof colorList)[number];

export type ColorPalette = {
  name: string;
  headerBg: string;
  titleFg: string;
};

export const colorPaletteMap: Record<Color, ColorPalette> = {
  blue: {
    name: "French Blue",
    headerBg: "hsl(213, 45%, 40%)",
    titleFg: "hsl(213, 60%, 58%)",
  },
  green: {
    name: "Fresh Green",
    headerBg: "hsl(140, 45%, 40%)",
    titleFg: "hsl(140, 60%, 58%)",
  },
  orange: {
    name: "Vivid Orange",
    headerBg: "hsl(30, 45%, 40%)",
    titleFg: "hsl(30, 60%, 58%)",
  },
  purple: {
    name: "Royal Purple",
    headerBg: "hsl(270, 45%, 40%)",
    titleFg: "hsl(270, 60%, 58%)",
  },
  red: {
    name: "Bordeaux Red",
    headerBg: "hsl(0, 45%, 40%)",
    titleFg: "hsl(0, 60%, 58%)",
  },
};
