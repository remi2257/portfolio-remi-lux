"use client";

import { createContext, useContext } from "react";

import { Content } from "./_content/content.type";
import contentEn from "./_content/en";
import contentEs from "./_content/es";
import contentFr from "./_content/fr";
import { Language } from "./resume-lang";
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
