"use client";

import { createContext } from "react";

import { Content, Language } from "./content";
import contentEn from "./content_en";
import contentEs from "./content_es";
import contentFr from "./content_fr";
import { ColorPalette, colorPaletteMap } from "./style";

interface ResumeContextType {
  colorPalette: ColorPalette;
  content: Content;
}

export const ResumeContext = createContext<ResumeContextType>({
  colorPalette: colorPaletteMap.blue,
  content: {} as Content,
});

const ResumeContextProvider: React.FC<
  React.PropsWithChildren<{
    language: Language;
    colorPalette: ColorPalette;
  }>
> = ({ colorPalette, language, children }) => {
  let content: Content;
  switch (language) {
    case "fr":
      content = contentFr;
      break;
    case "en":
      content = contentEn;
      break;
    case "es":
      content = contentEs;
      break;
  }

  return (
    <ResumeContext.Provider value={{ colorPalette, content }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
