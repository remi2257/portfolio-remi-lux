export const colorList = ["blue", "green", "orange", "purple", "red"] as const;
export type Color = (typeof colorList)[number];

export type ColorPalette = {
  headerBg: string;
  titleFg: string;
};

export const colorPaletteMap: Record<Color, ColorPalette> = {
  blue: {
    headerBg: "hsl(213, 45%, 40%)",
    titleFg: "hsl(213, 60%, 58%)",
  },
  green: {
    headerBg: "hsl(140, 45%, 40%)",
    titleFg: "hsl(140, 60%, 58%)",
  },
  orange: {
    headerBg: "hsl(30, 45%, 40%)",
    titleFg: "hsl(30, 60%, 58%)",
  },
  purple: {
    headerBg: "hsl(270, 45%, 40%)",
    titleFg: "hsl(270, 60%, 58%)",
  },
  red: {
    headerBg: "hsl(0, 45%, 40%)",
    titleFg: "hsl(0, 60%, 58%)",
  },
};
