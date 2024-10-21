import { Language } from "./resume-lang";

export function generateDocumentTitle(language: Language, anonymous: boolean) {
  let title: string;

  if (!anonymous) {
    title = "LUX_REMI";
  } else {
    switch (language) {
      case "fr":
        title = "INGENIEUR_FRONT_END";
        break;
      case "en":
        title = "FRONT_END_ENGINEER";
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
  }

  return `${title}_${suffix}`;
}
