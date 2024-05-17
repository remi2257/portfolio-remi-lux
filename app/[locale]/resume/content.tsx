import { Link as LinkPdf, Text } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { useContext } from "react";

import { ResumeContext } from "./ResumeContext";

// -- Language

// TODO: Delete

export const languageList = ["fr", "en"] as const;
export type Language = (typeof languageList)[number];

export const languageMap: Record<Language, string> = {
  fr: "Français",
  en: "English",
  // es: "Español",
};

export function generateDocumentTitle(language: Language, anonymous: boolean) {
  let title: string;

  if (!anonymous) {
    title = "LUX_REMI";
  } else {
    switch (language) {
      case "fr":
        title = "INGENIEUR_FULL_STACK";
        break;
      case "en":
        title = "FULL_STACK_ENGINEER";
        break;
    }
  }

  switch (language) {
    case "fr":
      title += "_CV_FR";
      break;
    case "en":
      title += "_RESUME_EN";
      break;
  }

  return title;
}

// -- Types

export type SubSection = {
  name: React.ReactNode;
  nameExtra?: React.ReactNode;
  subtitle?: string;
  points: React.ReactNode[];
};

export type Section = {
  name: string;
  subSectionList: SubSection[];
};

export type Content = {
  jobTitle: string;

  education: Section;
  professionalExperience: Section;
  skills: Section;
  personnalProjects: Section;
};

// -- Components

export const Link: React.FC<React.PropsWithChildren<{ src: string }>> = ({
  src,
  children,
}) => {
  const { colorPalette } = useContext(ResumeContext);

  return (
    <LinkPdf style={{ color: colorPalette.headerBg }} src={src}>
      {children}
    </LinkPdf>
  );
};

export const Strong: React.FC<React.PropsWithChildren<{ style?: Style }>> = ({
  children,
  style = {},
  ...props
}) => {
  return (
    <Text style={[{ fontWeight: "bold" }, style]} {...props}>
      {children}
    </Text>
  );
};
