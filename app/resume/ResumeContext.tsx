"use client";

import { createContext } from "react";

import { ColorPalette, colorPaletteMap } from "./style";

interface ResumeContextType {
  colorPalette: ColorPalette;
}

export const ResumeContext = createContext<ResumeContextType>({
  colorPalette: colorPaletteMap.blue,
});

const ResumeContextProvider: React.FC<
  React.PropsWithChildren<ResumeContextType>
> = ({ colorPalette, children }) => {
  return (
    <ResumeContext.Provider value={{ colorPalette }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
