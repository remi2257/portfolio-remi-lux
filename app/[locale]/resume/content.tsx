import {
  Image as ImagePdf,
  Link as LinkPdf,
  Text,
  View,
} from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { useContext } from "react";

import { ResumeContext } from "./ResumeContext";

// -- Language

export const languageList = ["fr", "en", "es"] as const;
export type Language = (typeof languageList)[number];

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
      case "es":
        title = "INGENIERO_FULL_STACK";
        break;
    }
  }

  let suffix: string;

  switch (language) {
    case "fr":
      suffix = "CV_FR";
      break;
    case "en":
      suffix = "RESUME_EN";
      break;
    case "es":
      suffix = "RESUMEN_ES";
      break;
  }

  return `${title}_${suffix}`;
}

// -- Types

export type SubSection = {
  name: string;
  nameExtra?: React.ReactNode;
  subtitle?: string;
  points: React.ReactNode[];
};

export type Section = {
  name: string;
  subSectionList: SubSection[];
};

export type Content = {
  jobTitle: string; // Just under Rémi Lux

  education: Section;
  professionalExperience: Section;
  skills: Section;
  personalProjects: Section;
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

export const GithubStars: React.FC<{ stars: number }> = ({ stars }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 1,
      }}
    >
      <ImagePdf
        src="/assets/github.png"
        style={{
          width: 10,
          height: 10,
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 11,
          marginTop: 1,
          marginLeft: 4,
          marginRight: 1,
        }}
      >
        {stars}{" "}
      </Text>
      <ImagePdf
        src="/assets/github_star.png"
        style={{
          width: 10,
          height: 10,
        }}
      />
    </View>
  );
};
