"use client";

import { createContext, useContext } from "react";

import { Content, Language } from "./content";
import contentEn from "./content_en";
import contentEs from "./content_es";
import contentFr from "./content_fr";
import { ColorPalette } from "./style";

interface ResumeContextType {
  colorPalette: ColorPalette;
  content: Content;
}

export const ResumeContext = createContext<ResumeContextType | null>(null);

export const useResumeContext = () => {
  const ctx = useContext(ResumeContext);
  if (!ctx) {
    throw new Error(
      "useResumeContext must be used within a ResumeContextProvider"
    );
  }
  return ctx;
};

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
